import React from "react";
import InputWithTags from "../navigation/inputWithTags";
import styled from "styled-components/macro";

export default function Search({onChange}) {
  return (
		<InputWithTags 
			placeholder="Start typing to search..." 
			onTagUpdated={onChange} />
  );
}

const SearchWrapper = styled.input`
  margin: 0 20px;
`;
