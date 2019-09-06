import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsFetching } from "../../redux/shop/shop.selectors";
import Spinner from "../HOC/Spinner";
import CollectionsOverview from "../CollectionsOverview/CollectionsOverview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
