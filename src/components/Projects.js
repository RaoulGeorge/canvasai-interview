import React, { useState } from "react";
import { projects } from "../data";
import Project from './Project';
import Search from './Search';
import styled from "styled-components/macro";


export default function Projects() {

  const [searchTerm, setSearchTerm] = useState('');

  const onSearchTermChanged = (event) => {
    setSearchTerm(event.target.value);
  }

  const filteredProjects = projects.filter(project => (
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  ));

  return (
    <Wrapper $area="content" >
      <Title $area="title">Projects</Title>
      <Search onChange={onSearchTermChanged}/>
      <ProjectsList $area="projects">
        {
          filteredProjects.length > 0 ? 
          filteredProjects.map(project => (
             <Project 
                name={project.name} 
                template={project.template}
                target={project.target}
                createdByUser={project.createdByUser}
                createdDate={project.createdDate}
                key={project.id} // assuming project.id is unique
              />
          )) : <div>No Projects found</div>
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

const ProjectsList = styled.div`
`;
