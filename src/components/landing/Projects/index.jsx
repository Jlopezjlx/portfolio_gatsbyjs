import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card } from 'components/common';
import starIcon from 'assets/icons/star.svg';
import forkIcon from 'assets/icons/fork.svg';
import { Wrapper, Grid, Item, Content, Stats, Details } from './styles';

export const Projects = () => (
  <Wrapper as={Container} id="projects">
    <Details>
      <h2>Projects</h2>
      <p>Building it</p>
    </Details>
  </Wrapper>
);
