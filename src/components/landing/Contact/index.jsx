import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';
// import icon from '../../../../static/icons/icons8-gmail.sgv';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h1>Contact Me</h1>
      <p>Building it</p>
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m John and I’m a Backend & Devops engineer!" />
    </Thumbnail>
  </Wrapper>
);
