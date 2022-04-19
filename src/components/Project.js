import React from "react";
import styled from "styled-components/macro";

export default function Project({data}) {
  return (
    <Wrapper>
      {data.name}
    </Wrapper>
  );
}

const Wrapper = styled.div`
	border: 1px solid red;
`;

