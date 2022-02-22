import React from "react";
import styled from "styled-components";
import RecordsStore from "../stores/records-store";

const DummyText = styled.p`
  font-size: 40px;
`;
const AddRecordButton = styled.button`
  font-size: 20px;
`;
export default function Body(props) {
  return (
    <div>
      <DummyText>{props.site.siteMetadata.description}</DummyText>
      <AddRecordButton
        onClick={() => {
          console.log("implement store handling");
        }}
      >
        Add Record
      </AddRecordButton>
    </div>
  );
}
