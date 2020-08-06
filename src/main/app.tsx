import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

import MainLayout from "../components/mainLayout/MainLayout";
import StockComponent from "../containers/todo/stockComponents/Stock";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/stocks"
                        render={props => (
                            <MainLayout {...props}>
                                <StockComponent />
                            </MainLayout>
                        )}
                    />

                    <Redirect from="/" to="/stocks" />
                </Switch>
            </Router>
        );
    }
}

export default App;
