import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  // { number: 16, text: 'Months of experience'},
  // { number: 1, text: 'BSc (Hons) in Data Science and Business Analytics'},
  // { number: 3, text: 'Months in Kolesa Group(top tech company in Kz) '},
  // { number: 4, text: 'Projects'}

  { text: '15+ Months of Experience'},
  { text: 'BSc (Hons) in Data Science and Business Analytics'},
  { text: '2+ Months in Kolesa Group (top tech company in Kz) '},
  { text: '5+ Personal Projects'}
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.text}`}</BoxNum>
          {/* <BoxText>{card.text}</BoxText> */}
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
