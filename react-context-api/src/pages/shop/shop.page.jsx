import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverviewPage from "../collections-overview/collections-overview.page";
import CollectionPage from "../collection/collection.page";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverviewPage} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
