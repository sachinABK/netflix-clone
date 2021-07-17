import React, { useState, useEffect, useContext } from "react";
import db from "../../firebase";
import { loadStripe } from "@stripe/stripe-js";
import { MovieContext } from "../../context/globalState";
import "./PlanScreen.css";
const PlanScreen = () => {
  let stripeAppId;

  if (process.env.NODE_ENV !== "production") {
    stripeAppId = process.env.REACT_APP_STRIPE_APP_ID;
  } else {
    stripeAppId = process.env.STRIPE_APP_ID;
  }

  const [products, setProducts] = useState([]);
  const { user } = useContext(MovieContext);
  const [subscription, setSubscription] = useState();
  useEffect(() => {
    db.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((querrySnapshot) => {
        querrySnapshot.forEach(async (subscription) => {
          setSubscription({
            role: subscription.data().role,
            current_period_end: subscription.data().current_period_end.seconds,
            current_period_start:
              subscription.data().current_period_start.seconds,
          });
        });
      });
  }, [user.uid]);
  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user?.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });
    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        alert(`An error occured: ${error.message}`);
      }
      if (sessionId) {
        const stripe = await loadStripe(stripeAppId);
        stripe.redirectToCheckout({
          sessionId,
        });
      }
    });
  };

  return (
    <div className="planScreen">
      {subscription && (
        <p>
          Renewal date:{" "}
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        const isCurrentPackage = productData.name
          ?.toLowerCase()
          .includes(subscription?.role);
        return (
          <div
            key={productId}
            className={`${
              isCurrentPackage && "planScreen__plan--disabled"
            } planScreen__plan`}
          >
            <div className="planScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button
              className="planScreen__button"
              onClick={() =>
                !isCurrentPackage && loadCheckout(productData?.prices?.priceId)
              }
            >
              {isCurrentPackage ? "Current Package" : "Subscription"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PlanScreen;
