import React from "react";
import { projects } from "../data";
import Project from './Project';
import styled from "styled-components/macro";


export default function Projects() {
  return (
    <Wrapper $area="content">
      <Title $area="title">Projects</Title>
      <Search $area="search" placeholder="Start typing to search..." />
      {/* TODO: Use ProjectsList to host Project components OR create your own container */}
      <ProjectsList $area="projects">
        {
          projects.map(project => {
            return <Project data={project} />
          })
        }
      </ProjectsList>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  grid-area: ${({ $area }) => $area};
  display: grid;
  grid-template-areas:
    "title"
    "search"
    "projects";
  grid-template-rows: 70px 30px auto;
`;

const Title = styled.h1`
  grid-area: ${({ $area }) => $area};
`;

const Search = styled.input`
  grid-area: ${({ $area }) => $area};
  margin: 0 20px;
`;

const ProjectsList = styled.div`
`;
