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
const Menu = styled.div``;

const LoginName = styled.span`
  font-size: 30px;
`;

export default function Navbar(props) {
  return (
    <div>
      <Header>
        <Title>{props.site.siteMetadata.title}</Title>
        <Menu>
          <LoginName>{props.site.siteMetadata.username}</LoginName>
          <FontAwesomeIcon icon={faBars} size="4x" />
        </Menu>
      </Header>
    </div>
  );
}
