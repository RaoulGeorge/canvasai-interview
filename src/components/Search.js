import React from "react";
import styled from "styled-components/macro";

export default function Search({onChange}) {
  return (
		<SearchWrapper 
			placeholder="Start typing to search..." 
			onChange={onChange} />
  );
}

const SearchWrapper = styled.input`
  margin: 0 20px;
`;
