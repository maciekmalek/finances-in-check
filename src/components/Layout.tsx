import * as React from "react";
import Body from "./Body";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <div>
      <Navbar {...props}></Navbar>
      <Body {...props}></Body>
    </div>
  );
}
