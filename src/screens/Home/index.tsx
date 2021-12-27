import ParticlesBg from 'particles-bg';

import { About } from './About';
import { Contact } from './Contact';
import { Portfolio } from './Portfolio';
import { Div } from './styles';

export function Home() {
  return (
    <>
      <Div>
        <ParticlesBg type="cobweb" color="#ffffff" bg />
        <div
          style={{
            position: 'absolute',
            top: '50%',
          }}
        >
          <h2 style={{ color: 'white' }}>
            Eu sou um DESENVOLVEDOR FULLSTACK, crio sites e aplicações em React,
            Vuejs e Nodejs.
          </h2>
        </div>
      </Div>
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}
