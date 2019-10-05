import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionsOverviewComponent from "../../components/collections-overview/collections-overview.component";

const CollectionsOverview = props => (
  <CollectionsOverviewComponent {...props}></CollectionsOverviewComponent>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
