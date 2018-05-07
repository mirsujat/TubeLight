import React from 'react';

const withClass = props => <div className={props.Style}>{props.children}</div>;

export default withClass;

// This is not so usefull
