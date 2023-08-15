import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import Styles from "./Layaut.module.css"
import styled from "styled-components";

const Layout = () => {

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: rgb(230, 87, 87);
  }
`;
    return (
        <div className={Styles.header}>
            <ul className={Styles.nav}>
                <li>
                  <StyledLink className={Styles.navLink} to="/home" >Home</StyledLink>
                </li>
                <li>
                  <StyledLink className={Styles.navLink} to="/movies" >Movies</StyledLink>
                </li>
            </ul>
            <Suspense fallback={<div>Loading page...</div>}>
              <Outlet />
            </Suspense>
        </div>
    )
}


export default Layout;