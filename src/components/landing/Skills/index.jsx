import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Jairo Lopez and I’m a QA Engineer & Web Developer!" />
      </Thumbnail>
      <Details>
        <h1>About Me</h1>
        <p>
          I’m a QA Engineer focused on automating the testing process. I have 1+ years of experience on the testing
          field, within this time I have gained knowledge in tools such as: Python, Selenium, Appium, Oxygen HQ,
          Automation processes, testing processes, differents kind of testing methods, Jenkins, Docker, among others.
        </p>
        <p>
          Perhaps, you feel weird that I said “I’m a web developer”, yes, I am, I love to create things, not just
          automation process, So, I have developed my skills on another field and that is web development, I have
          knowledge in Javascript, ReactJs, HTML, CSS, UI frameworks, Ajax, axios.
        </p>
        <p>
          Besides tech, I love to play basketball, go to the gym and read. I’d be in the gym or in front my pc than in
          movie theater or something like that.
        </p>
        <p>Want to contact me or work with me? Scroll down to find out how to do it.</p>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
