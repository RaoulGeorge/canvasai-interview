import React from "react";
import { getFormattedDate } from '../utils/date'
import styled from "styled-components/macro";

export default function Project({name, template, target, createdByUser, createdDate}) {
  return (
    <Wrapper>
      <Header>
        <h1 className="project__name">{name}</h1>
        <h4 className="project__template">{template}</h4>
      </Header>
      <Main>
        <p>Target: {target}</p>
        <hr />
      </Main>
      <Footer>
        <h4>
          CREATED: {createdByUser} &middot; { getFormattedDate(createdDate)}
        </h4>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid black;
  margin: 12px;
  padding: 12px;
`;

const Header = styled.header`
  display: flex;

  h1, h2 {
    flex: 1;
  }

  .project__name {
    text-align: left;
  }

  .project__template {
    text-align: right;
  }
`;

const Main = styled.main`
  text-align: left;
`;

const Footer = styled.footer`
  h4 {
    color: grey;
    text-align: right;
  }
`;



