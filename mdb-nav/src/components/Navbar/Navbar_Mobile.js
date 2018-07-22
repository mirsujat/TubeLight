import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler,  NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';


import SearchFormSm from '../SearchForm/SearchFormSm';

class NavbarMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            dropdownOpen: false
        };
    
    this.toggle = this.toggle.bind(this);
    }

    

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Router>
                <Navbar color="indigo"  dark fixed="top">
                <NavbarToggler onClick = { this.onClick } />
                    <NavbarBrand href="#">
                        <span className="logo"><i class="fa fa-th" aria-hidden="true"></i></span>
                        <span>NavBar</span>
                    </NavbarBrand>
                   
                    <NavbarNav right>
                    <NavItem>
                        <NavLink to=""><i class="fa fa-search" aria-hidden="true"></i></NavLink>
                    </NavItem>
                     
                      <NavItem>
                          <NavLink to="#"><i class="fa fa-bell-o" aria-hidden="true"></i></NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="#"><i class="fa fa-cogs" aria-hidden="true"></i></NavLink>
                      </NavItem>
                      <NavItem>
                          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                          <DropdownToggle nav><i class="fa fa-user-o" aria-hidden="true"></i></DropdownToggle>
                          <DropdownMenu>
                              <DropdownItem href="#">Action</DropdownItem>
                              <DropdownItem href="#">Another Action</DropdownItem>
                              <DropdownItem href="#">Something else here</DropdownItem>
                              <DropdownItem href="#">Something else here</DropdownItem>
                          </DropdownMenu>
                          </Dropdown>
                      </NavItem>
                    </NavbarNav>
                        
                   
                </Navbar>
            </Router>
        );
    }
}

export default NavbarMobile;