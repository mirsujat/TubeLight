import React from "react";
import { withRouter } from "react-router-dom";
import MenuItemComponent from "../../components/menu-item/menu-item.component";

const MenuItem = () => <MenuItemComponent {...props}></MenuItemComponent>;

export default withRouter(MenuItem);
