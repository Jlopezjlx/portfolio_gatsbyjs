import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>I can deliver the best QA analysis for your projects.</h1>
        <h4>I’m Jairo Lopez. QA Engineer & Web Developer!</h4>
        <Button as={AnchorLink} href="#contact">
          Tell me about your project!
        </Button>
      </Details>
      <Thumbnail>
        <img src={dev} alt="I’m Jairo Lopez and I’m a QA Engineer & Web Developer!" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
