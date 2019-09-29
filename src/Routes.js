import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import { dashboard as dashboardRoutes, auth as authRoutes } from "./index"

import MainLayout from './layouts/MainLayout'
import Contact from './pages/Contact'
import Home from './pages/Home'
import TermsAndConditions from './pages/TermsAndConditions'
import Page404 from "./pages/Page404"
import Article from './components/Article'


/**
 * file routes/index.js
 *

import React from "react";

import async from "../Async"

import {
  BookOpen,
  CheckSquare,
  Grid,
  Heart,
  Layout,
  List,
  Map,
  PieChart,
  Sliders,
  Users
} from "react-feather"

const Home = async(() => import('../pages/Home'))

const appRoutes = [{
  id: 'Home',
  path: '/',
  component: Home,
}]

export default [
  appRoutes,
];

*** */

const childRoutes = (Layout, routes) =>
  routes.map(({ children, path, component: Component }, index) =>
    children ? (
      // Route item with children
      children.map(({ path, component: Component }, index) => (
        <Route
          key={index}
          path={path}
          exact
          render={props => (
            <Layout>
              <Component {...props} />
            </Layout>
          )}
        />
      ))
    ) : (
      // Route item without children
      <Route
        key={index}
        path={path}
        exact
        render={props => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    )
  );

const Routes = () => (
  <Router>
    <Switch>
      { /* childRoutes(DashboardLayout, dashboardRoutes) */ }
      { /* childRoutes(AuthLayout, authRoutes) */ }
      <Route
        key="home"
        path="/"
        exact
        render={() => <MainLayout><Home /></MainLayout>} />
      <Route
        key="article-view"
        path="/articles/:slug"
        render={() => <MainLayout><Article /></MainLayout>} />
      <Route
        key="terms_and_conditions"
        path="/pages/terms-and-conditions"
        exact
        render={() => <MainLayout><TermsAndConditions /></MainLayout>} />
      <Route
        key="contact"
        path="/pages/contact"
        exact
        render={() => <MainLayout><Contact /></MainLayout>} />
      <Route
        render={() => (
          <MainLayout>
            <Page404 />
          </MainLayout>
        )}
      />
    </Switch>
  </Router>
);

export default Routes;
