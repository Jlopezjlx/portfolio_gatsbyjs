import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import gmail from 'assets/illustrations/icons8-gmail.svg';
import linkedin from 'assets/illustrations/icons8-linkedin-2.svg';
import github from 'assets/illustrations/github.svg';
import { Wrapper, Details, Thumbnail, ContactContainer } from './styles';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h1>Let's work Together!</h1>
      <p>
        You can contact me anywhere in the world, but to keep it simple and fast, I will let this options for you 🙌:
      </p>
      <ContactContainer>
        <a key="gmail" href="mailto:contact@jairolopez.tech" target="_blank" rel="noopener noreferrer">
          <img width="50" src={gmail} alt="gmail" />
        </a>
        <a
          key="linkedin"
          href="https://www.linkedin.com/in/jairo-lopez-058a08181/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width="40" src={linkedin} alt="linkedin" />
        </a>
        <a key="github" href="https://github.com/Jlopezjlx" target="_blank" rel="noopener noreferrer">
          <img width="38" src={github} alt="github" />
        </a>
      </ContactContainer>
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m John and I’m a Backend & Devops engineer!" />
    </Thumbnail>
  </Wrapper>
);
