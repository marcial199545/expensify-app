import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";

//NOTE components
import Page404 from "../components/Page404/Page404.jsx";
import Header from "../components/Header/Header.jsx";
import Home from "../components/Home/Home.jsx";
import AddExpensePage from "../components/AddExpense/AddExpense.jsx";
import EditExpensePage from "../components/EditExpense/EditExpensePage.jsx";
import HelpPage from "../components/HelpPage/HelpPage.jsx";

const AppRouter = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={Page404} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
