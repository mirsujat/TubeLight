import React, { Component, Fragment } from "react";

import Header from "../sections/Header/Header.jsx";
import ButtonDemo from "../../components/Button/Demo.jsx";
import Cards from "../../components/Card/demo.jsx";
import NavbarIcon from "../../components/Navbar/NavbarIcon.jsx";
import NavbarIconText from "../../components/Navbar/NavbarIconText.jsx";
import NavbarNotification from "../../components/Navbar/NavbarNotification.jsx";
import NavbarSearch from "../../components/Navbar/NavbarSearch.jsx";
import InputDefaultDemo from "../../components/InputDefault/Demo.jsx";
import CustomInputDemo from "../../components/Input/Demo.jsx";
import CheckboxRadioSwitchDemo from "../../components/CheckboxRadioSwitch/Demo.jsx";
import BadgeDemo from "../../components/Badge/Demo.jsx";
import PaginationDemo from "../../components/Pagination/Demo.jsx";
import TabsDemo from "../../components/Tabs/Demo.jsx";
import NavPillsDemo from "../../components/NavPills/Demo.jsx";
import NotificationDemo from "../../components/Notification/Notification.jsx";
import TypographyDemo from "../../components/Typography/Demo/Demo.jsx";
import ImageCard from "../../components/ImageCard/ImageCard.jsx";
import Modal from "../../components/Modal/Modal.jsx";
import Datepicker from "../../components/Datepicker/Datepicker.jsx";
import Tooltips from "../../components/Tooltips/Tooltips.jsx";
import Popovers from "../../components/Popovers/Popovers.jsx";
import CarouselDemo from "../../components/Carousel/Demo.jsx";

class Components extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Header />
        <ButtonDemo />
        <Cards />
        <NavbarIcon />
        <NavbarIconText />
        <NavbarNotification />
        <NavbarSearch />
        <InputDefaultDemo />
        <CustomInputDemo />
        <CheckboxRadioSwitchDemo />
        <BadgeDemo />
        <PaginationDemo />
        <TabsDemo />
        <NavPillsDemo />
        <NotificationDemo />
        <TypographyDemo />
        <ImageCard />
        <Modal />
        <Datepicker />
        <Tooltips />
        <Popovers />
        <CarouselDemo />
      </Fragment>
    );
  }
}

export default Components;
