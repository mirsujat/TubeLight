import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const CollectionsOverviewContainer = ({ collections }) => (
  <CollectionsOverview collections={collections}></CollectionsOverview>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverviewContainer);
