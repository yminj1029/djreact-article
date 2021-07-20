import React from "react";
import { Route } from "react-router-dom";
import ArticleListView from "./containers/ArticleListView";
import ArticleDetailView from "./containers/ArticleDetailView";
const BaseRouter = () => {
  return (
    <div>
      <Route exact path="/" component={ArticleListView}></Route>
      <Route exact path="/:articleID" component={ArticleDetailView}></Route>
    </div>
  );
};

export default BaseRouter;
