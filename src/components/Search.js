import React from "react";
import InputWithTags from "./InputWithTags";
import styled from "styled-components/macro";

export default function Search({onChange}) {
  return (
		<InputWithTags 
			onTagUpdated={onChange} />
  );
}

const SearchWrapper = styled.input`
  margin: 0 20px;
`;
