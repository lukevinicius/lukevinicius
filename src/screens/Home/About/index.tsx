import { Container } from './styles';

import { AboutMe } from './AboutMe';
import { Technologies } from './Technologies';

export function About() {
  return (
    <Container id="about">
      <h2>Sobre Mim</h2>
      <AboutMe />
      <Technologies />
    </Container>
  );
}
