import React from "react";
import { getFormattedDate } from '../utils/date'
import styled from "styled-components/macro";

export default function Project({name, template, target, createdByUser, createdDate}) {
  return (
    <Wrapper>
      <Header>
        <ProjectName>{name}</ProjectName>
        <ProjectTemplate>{template}</ProjectTemplate>
      </Header>
      <Main>
        <ProjectTarget>Target: {target}</ProjectTarget>
        <hr />
      </Main>
      <Footer>
        <ProjectDate>
          CREATED: {createdByUser} &middot; { getFormattedDate(createdDate)}
        </ProjectDate>
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
  margin-bottom: 8px;
`;

const ProjectName = styled.h1`
  flex: 1;
  text-align: left;
`;

const ProjectTemplate = styled.h2`
  flex: 1;
  text-align: right;
`;

const ProjectTarget = styled.p``;

const ProjectDate = styled.h4`
  color: grey;
  text-align: right;
`;

const Main = styled.main`
  text-align: left;
`;

const Footer = styled.footer`
`;



