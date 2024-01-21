import styled from 'styled-components';
import {FaBars} from 'react-icons/fa';
import { useState } from 'react';

const Nav = styled.div`
    background-color: ${({ theme }) => theme.card_light};
    display: flex;
    height: 80px;
    font-size: 1rem;
    justify-content: center;
    align-items: center;
    position: sticky;
    z-index: 5;
    top: 0;
    @media screen and (max-width: 900px){
        transition: 0.8s all ease;
    }
`;

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 0 24px;
    z-index: 1;
    max-width: 1200px;
`;

const NavBrand = styled.a`
    width: 80%;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    padding: 0 6px;
    justify-self: flex-start;
    align-items: center;
    color: ${({ theme }) => theme.text_primary};
    @media screen and (max-width: 640px){
        /* padding: 0 0px; */
    }
`;

const NavItems = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    list-style: none;

    @media screen and (max-width: 768px){
        display: none;
        /* flex-direction: column; */
    }
`;

const NavLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.text_primary};
    padding: 0px 15px;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

const Hamburger = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        color: ${({ theme }) => theme.text_primary};
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 50%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

const Span = styled.div`
    font-weight: bold;
    padding: 0 4px;
    font-size: 18px;
`;

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    background: ${({ theme }) => theme.card_light + 99};
    transition: all 0.3s ease-in-out;
    padding: 12px 40px 24px 40px;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    border-radius: 0 0 20 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    opacity: ${({ open }) => (open ? "1" : "0")};
    z-index: ${({ open }) => (open ? "1" : "-1")};

    @media screen and (min-width: 768px){
        display: none;
    }
`;

const MobileMenuLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Nav>
            <NavbarContainer>
                <NavBrand href = "#about">
                    <Span>
                        Portfolio
                    </Span>
                </NavBrand>
                <Hamburger>
                    <FaBars onClick = {() => {
                        setIsOpen(!isOpen);
                    }}>
                    </FaBars>
                </Hamburger>
                <NavItems>
                    <NavLink href = "#skills">Skills</NavLink>
                    <NavLink href = "#experience">Experience</NavLink>
                    <NavLink href = "#projects">Projects</NavLink>
                    <NavLink href = "#contact">Contact</NavLink>
                </NavItems>
            </NavbarContainer>
            {
                isOpen &&
                <MobileMenu open = {isOpen}>
                    <MobileMenuLink href = "#skills" 
                    onClick = {() => {
                        setIsOpen(!isOpen);
                    }}>
                        Skills
                    </MobileMenuLink>
                    <MobileMenuLink href = "#experience" 
                    onClick = {() => {
                        setIsOpen(!isOpen);
                    }}>
                        Experience
                    </MobileMenuLink>
                    <MobileMenuLink href = "#projects" 
                    onClick = {() => {
                        setIsOpen(!isOpen);
                    }}>
                        Projects
                    </MobileMenuLink>
                    <MobileMenuLink href = "#contact" 
                    onClick = {() => {
                        setIsOpen(!isOpen);
                    }}>
                        Contact
                    </MobileMenuLink>
                </MobileMenu>
            }
        </Nav>
    );
}