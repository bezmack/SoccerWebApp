import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Team from '../components/Team';
import Match from '../components/Match';
import About from '../components/About';
import Contacts from '../components/Contacts';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/team" component={Team} />
        <Route path="/match" component={Match} />
        <Route path="/about" component={About} />
        {/* <Route path={`/about/contacts`} component={Contacts} /> */}
        <Route component={NotFoundPage} />
        <Route path={`/about/info`} component={Contacts} />
        <Route path={`/about/contacts`} component={Contacts} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
