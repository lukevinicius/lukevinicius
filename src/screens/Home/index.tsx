import ParticlesBg from 'particles-bg';

import { About } from './About';
import { Portfolio } from './Portfolio';
import { Div } from './styles';

export function Home() {
  return (
    <>
      <Div>
        <ParticlesBg type="cobweb" color="#ffffff" bg />
        <h2>
          Olá eu sou Lucas vinicius um DESENVOLVEDOR FULLSTACK, crio sites e
          aplicações em React, Vuejs e Nodejs.
        </h2>
      </Div>
      <About />
      <Portfolio />
    </>
  );
}
