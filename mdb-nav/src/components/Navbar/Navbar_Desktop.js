import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler,  NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarDesktop extends Component {
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
                        <span>NavBar</span>
                    </NavbarBrand>
                    
                    

                    <NavbarNav right>
                      <NavItem active>
                          <NavLink to="#">Home</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="#">Features</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="#">Pricing</NavLink>
                      </NavItem>
                      <NavItem>
                          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                          <DropdownToggle nav caret>Dropdown</DropdownToggle>
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

export default NavbarDesktop;