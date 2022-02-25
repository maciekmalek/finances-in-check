import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = styled.div`
  background: rgb(220, 220, 220, 0.2);

  display: flexbox;
  justify-content: space-between;
`;
const Title = styled.span`
  font-weight: bold;
  font-size: 4em;
  color: palevioletred;
`;
const Menu = styled.div`
  text-align: center;
  width: 25em;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LoginName = styled.span`
  font-size: 3em;
`;

const menuHandler = () => {
  console.log("fawsome click");
};

export default function Navbar(props) {
  return (
    <div>
      <Header>
        <Title>{props.site.siteMetadata.title}</Title>
        <Menu>
          <LoginName>{props.site.siteMetadata.username}</LoginName>
          <FontAwesomeIcon icon={faBars} size="4x" onClick={menuHandler} />
        </Menu>
      </Header>
    </div>
  );
}
