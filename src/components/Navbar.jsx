// import React from 'react';
import { NavLink } from "react-router-dom";

// 1st CSS style
// import styled from 'styled-components';

// const StyleBtn = styled.button`
//     background: red;
//     color: white;
//     font-size: 2rem;
//     padding: 1rem;
// `;

// 2nd CSS style
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
    return (
        <Wrapper>
            <div className="nav-center">
                {/* <StyleBtn>Styled BTN</StyleBtn> */}
                <span className="logo">MixMaster</span>
                <div className="nav-links">
                    <NavLink to='/' className='nav-link'>Home</NavLink>
                    <NavLink to='/about' className='nav-link'>About</NavLink>
                    <NavLink to='/newsletter' className='nav-link'>Newsletter</NavLink>
                </div>
            </div>
        </Wrapper>
    );
};

// const Wrapper = styled.nav`
//     background: red;
// `

export default Navbar;