import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchForm from '../SearchForm';
import arrowleft from '../../arrow-left-50.png';

class NavbarMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false,
            switchNav: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.switchNav = this.switchNav.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    switchNav() {
        this.setState({
            switchNav: !this.state.switchNav
        });
    }

    render() {
        let navigation = null;
        if(this.state.switchNav){
           
             navigation =  (
                <div className="d-flex" >
                    <img src={arrowleft} width="30" height="28" onClick={this.switchNav} className="left-arrow" />
                    
                        <SearchForm />
                    
                </div>
             ) 
            
        }else{
            navigation = (
                <div>
                    <NavbarBrand href="/">
                        <strong>Navbar</strong>
                    </NavbarBrand>
                    <NavbarNav>
                    <NavItem >
                        <NavLink to="#"><i onClick={this.switchNav} class="fa fa-search" aria-hidden="true"></i></NavLink>
                        </NavItem> 
                        <NavItem>
                            <NavLink to="#"><i class="fa fa-home" aria-hidden="true"></i></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="#"><i class="fa fa-cog" aria-hidden="true"></i></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="#"><i class="fa fa-user-circle" aria-hidden="true"></i></NavLink>
                        </NavItem>
                        <NavItem>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle nav><i class="fa fa-cart-plus" aria-hidden="true"></i></DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href="#">Action</DropdownItem>
                                <DropdownItem href="#">Another Action</DropdownItem>
                                <DropdownItem href="#">Something else here</DropdownItem>
                                <DropdownItem href="#">Something else here</DropdownItem>
                            </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                    </NavbarNav>
                </div>
            )
        }
        return (
          <div>
            <Router>
                <Navbar color="white" light  fixed="top" scrolling>
                    {navigation}    
                </Navbar>    
            </Router>
            </div>
        );
    }
}

export default NavbarMobile;