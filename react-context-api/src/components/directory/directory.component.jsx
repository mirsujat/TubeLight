import React from "react";
import MenuItem from "../../containers/MenuItem/MenuItem";

import "./directory.styles.scss";

const DirectoryComponent = ({ sections }) => (
  <div className="directory-menu" data-testid="directory-component">
    {sections
      ? sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))
      : null}
  </div>
);

export default DirectoryComponent;
