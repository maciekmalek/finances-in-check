import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Body from "./Body";
import Navbar from "./Navbar";
const GlobalStyle = createGlobalStyle`
  body{
    margin: 0px;
    background-color: black;
    color: white;
  }
`;

export default function Layout(props) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar {...props}></Navbar>
      <Body {...props}></Body>
    </React.Fragment>
  );
}
