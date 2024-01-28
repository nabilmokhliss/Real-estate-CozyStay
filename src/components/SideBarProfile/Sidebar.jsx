import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  // background: #15171c;
  // display: flex;
  // flex-direction: column;
  // justify-content: flex-start;
  // align-items: center;
  width: 300px; /* Ajoutez la largeur de votre barre latérale */
`;

// const NavIcon = styled(Link)`
//   margin-top: 2rem;
//   font-size: 2rem;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 100%; /* Utilisez la largeur complète du conteneur parent */
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          {/* <NavIcon to='#'>
            <FaIcons.FaBars />
          </NavIcon> */}
          <SidebarNav>
            <SidebarWrap>
              {/* <NavIcon to='#'>
                <AiIcons.AiOutlineClose />
              </NavIcon> */}
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </SidebarNav>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
