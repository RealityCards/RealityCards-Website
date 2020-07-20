import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import FAQ from "./views/FAQ";
import Team from "./views/Team";
import Careers from "./views/Careers";
import Terms from "./views/Terms";
import Privacy from "./views/Privacy";
import Cookie from "./views/Cookie";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/faq" component={FAQ} layout={LayoutDefault} />
          <AppRoute
            exact
            path="/team"
            component={Team}
            layout={LayoutDefault}
          />
          <AppRoute
            exact
            path="/careers"
            component={Careers}
            layout={LayoutDefault}
          />
          <AppRoute
            exact
            path="/terms-of-service"
            component={Terms}
            layout={LayoutDefault}
          />
          <AppRoute
            exact
            path="/privacy-policy"
            component={Privacy}
            layout={LayoutDefault}
          />
          <AppRoute
            exact
            path="/cookie-policy"
            component={Cookie}
            layout={LayoutDefault}
          />
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
        </Switch>
      )}
    />
  );
};

export default App;
