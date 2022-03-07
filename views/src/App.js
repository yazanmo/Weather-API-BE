import React from "react";
import { Switch, Route } from "react-router-dom";
import Weather from "./components/Weather/Weather";
import Navigation from "./components/navigation";
import Home from "./components/Home";
import { useState } from "react";



const App = () => {
  const [homePageSection, setHomePageSection] = useState("");
  return (
    <>
      <div className="App">
        <Navigation setHomePageSection={setHomePageSection} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                homePageSection={homePageSection}
                setHomePageSection={setHomePageSection}
              />
            )}
          />
          <Route exact path="/weather" render={() => <Weather />} />

        </Switch>
      </div>
    </>
  );
};

export default App;
