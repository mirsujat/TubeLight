import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import DirectoryComponent from "../../components/directory/directory.component";

const Directory = props => <DirectoryComponent {...props}></DirectoryComponent>;

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
