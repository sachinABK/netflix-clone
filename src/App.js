import React, { useEffect, useState } from "react";
import "./App.css";
import Homescreen from "./components/Homescreen/Homescreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loginscreen from "./components/LoginScreen/Loginscreen";
import { auth } from "./firebase";
import { MovieContext } from "./context/globalState";
import ProfileScreen from "./components/ProfileScreen/ProfileScreen";
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setUser({
          uid: userAuth.uid,
          email: userAuth.email,
        });
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <MovieContext.Provider value={{ user }}>
      <div className="app">
        <Router>
          {!user ? (
            <Loginscreen />
          ) : (
            <Switch>
              <Route exact path="/profile">
                <ProfileScreen />
              </Route>
              <Route exact path="/">
                <Homescreen />
              </Route>
            </Switch>
          )}
        </Router>
      </div>
    </MovieContext.Provider>
  );
}

export default App;
