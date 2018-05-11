import React from 'react';

import Style from './Modal.css';

const modal = props => <div className={Style.Modal}>{props.children}</div>;

export default modal;
