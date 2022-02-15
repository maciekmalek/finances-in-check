import React from "react";
import styled from "styled-components";

const DummyText = styled.p`
  font-size: 40px;
`;

export default function Body(props) {
  return (
    <div>
      <DummyText>{props.site.siteMetadata.description}</DummyText>
    </div>
  );
}
