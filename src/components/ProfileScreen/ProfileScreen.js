import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { MovieContext } from "../../context/globalState";
import Navbar from "../Navbar/Navbar";
import { auth } from "../../firebase";
import "./ProfileScreen.css";
import PlanScreen from "../PlanScreen/PlanScreen";
const ProfileScreen = () => {
  const { user } = useContext(MovieContext);
  const history = useHistory();
  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlanScreen />
              <p></p>
              <button
                onClick={() => {
                  auth.signOut();
                  history.push("/");
                }}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
