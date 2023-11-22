import React from 'react'
import { Route, Switch } from "react-router-dom";
import Maidapp from "./maidapp";
import Home from "./home/home";
import Service from "./service";
import About from "./about";
import Contact from "./contact_us";
import Pagenotfound from "./404";
import Termsprivacy from "./termsprivacy";
import SearchPage from "./searcher"; 
import SwaggerPage from './documentation';

const routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/searcher/documentation" component={SwaggerPage} />
            <Route path="/searcher/" component={SearchPage} />
            <Route path="*" component={Pagenotfound} />
        </Switch>
    )
}

export default routes
