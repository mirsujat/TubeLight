import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import Directory from "../../components/directory/directory.component";

const DirectoryContainer = ({ sections }) => (
  <Directory sections={sections}></Directory>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(DirectoryContainer);
