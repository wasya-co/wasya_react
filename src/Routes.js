import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import { dashboard as dashboardRoutes, auth as authRoutes } from "./index"

import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Page404 from "./pages/Page404"


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
        render={() => <MainLayout><Home name='authed' /></MainLayout>} />
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
