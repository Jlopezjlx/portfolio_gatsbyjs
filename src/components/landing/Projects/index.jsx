import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card } from 'components/common';
import { Wrapper, Grid, Item, Content, Stats, Details } from './styles';
import projects from './projects.json';

export const Projects = () => (
  <Wrapper as={Container} id="projects">
    <h2>Projects</h2>
    <Grid>
      {projects.map(({ title, description, url }) => (
        <Item key="" as="a" href={url} target="_blank" rel="noopener noreferrer">
          <Card>
            <Content>
              <h4>{title}</h4>
              <p>{description.details || ''}</p>
              <br />
              <p>{description.stack || ''}</p>
            </Content>
          </Card>
        </Item>
      ))}
    </Grid>
  </Wrapper>
);
