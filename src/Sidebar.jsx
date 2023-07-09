import React from 'react';
import SideNav, { Toggle, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './App.css';
import {useNavigate}  from 'react-router-dom';



function Sidebar() {
    const navigate= useNavigate();
  return (
    <SideNav onSelect={(selected) => {
      console.log(selected);
      navigate('./'+selected);
    }}>
      <Toggle />
      <SideNav.Nav defaultSelected="Dashboard">
        <NavItem eventKey="Dashboard">
          <NavIcon>
            <i className="<i class="fa-solid fa-house style={{ fontSize: '1.5rem' }}></i>
          </NavIcon>
          <NavText>Dashboard</NavText>
        </NavItem>
        <NavItem eventKey="profile">
          <NavIcon>
            <i className="<i class=="fa-solid fa-user style={{ fontSize: '1.5rem' }}></i>
          </NavIcon>
          <NavText>Profile</NavText>
        </NavItem>
        <NavItem eventKey="password">
          <NavIcon>
            <i className="<i class="fa-solid fa-lock style={{ fontSize: '1.5rem' }}></i>
          </NavIcon>
          <NavText>Change Password</NavText>
        </NavItem>
      </SideNav.Nav>s
    </SideNav>
  );
}

export default Sidebar;

