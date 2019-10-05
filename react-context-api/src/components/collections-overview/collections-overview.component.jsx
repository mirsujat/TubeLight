import React from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

const CollectionsOverviewComponent = ({ collections }) => (
  <div className="collections-overview" data-testid="collections-overview">
    {collections
      ? collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      : null}
  </div>
);

export default CollectionsOverviewComponent;
