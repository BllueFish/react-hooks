import React from 'react';
import "./styles/style.less";
import App from "./app";
import { createHashHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";

const history = createHashHistory();

function RouterConfig() {
    return (
        <Router history={history}>
            {/* Switch表示只渲染第一个与当前地址匹配的Route */}
            <Switch>
                <Route path="/" exact component={App} />
            </Switch>
        </Router>
    );
}

export default RouterConfig;