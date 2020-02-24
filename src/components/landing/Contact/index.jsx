import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import gmail from 'assets/illustrations/icons8-gmail.svg';
import linkedin from 'assets/illustrations/icons8-linkedin.svg';
import github from 'assets/illustrations/icons8-github.svg';
import { Wrapper, Details, Thumbnail, ContactContainer } from './styles';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h1>Contact Me</h1>
      <p>You can contact me by multiples vias, here you have a few links, just click on the one you prefer the most:</p>
      <ContactContainer>
        <a key="gmail" href="mailto:jairolopez0072@gmail.com" target="_blank" rel="noopener noreferrer">
          <img width="40" src={gmail} alt="gmail" />
        </a>
        <a key="linkedin" href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <img width="40" src={linkedin} alt="linkedin" />
        </a>
        <a key="github" href="https://github.com/Jlopezjlx" target="_blank" rel="noopener noreferrer">
          <img width="40" src={github} alt="github" />
        </a>
      </ContactContainer>
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m John and I’m a Backend & Devops engineer!" />
    </Thumbnail>
  </Wrapper>
);
