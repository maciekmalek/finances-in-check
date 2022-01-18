import { PageProps } from "gatsby";
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = styled.div`
  background: #add8e6;
  display: flexbox;
  justify-content: space-between;
`;
const Title = styled.span`
  font-weight: bold;
  font-size: 50px;
  color: palevioletred;
`;
const MenuBurger = styled.div``;

export default function Navbar(props: PageProps) {
  return (
    <div>
      <Header>
        <Title>Finances in check</Title>
        <MenuBurger>
          <FontAwesomeIcon icon={faBars} size="4x" />
        </MenuBurger>
      </Header>
    </div>
  );
}
