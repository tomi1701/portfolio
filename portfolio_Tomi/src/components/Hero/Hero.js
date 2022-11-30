import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Portfolio <br/>
        My name is Tomiris
      </SectionTitle>
      <SectionText>
        I am software engineer and will be more than happy to help with your websites, here you will be able to find information about what I can do 😊
      </SectionText>
      <div className="download" style={{display: "inline-block"}}>
        {/* <Button onclick={()=> window.location = 'https://google.com'}>My Resume (English) </Button>
        <Button onclick={()=> window.location = 'https://google.com'}>My Resume (Russian) </Button> */}
      </div>
    </LeftSection>
  </Section>
);

export default Hero;