import ParticlesBg from 'particles-bg';

import { About } from './About';
import { Portfolio } from './Portfolio';
import { Container } from './styles';

export function Home() {
  return (
    <>
      <Container>
        <ParticlesBg type="cobweb" color="#ffffff" bg />
        <h2>
          Olá eu sou Lucas vinicius um DESENVOLVEDOR FULLSTACK, crio sites e
          aplicações em React, Vuejs e Nodejs.
        </h2>
      </Container>
      <About />
      <Portfolio />
    </>
  );
}
