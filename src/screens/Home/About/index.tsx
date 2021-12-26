import { Col, Row } from 'react-bootstrap';
import { Border, Div, DivTech } from './styles';

import me from '../../../assets/images/me.jpeg';
import html from '../../../assets/icons/html.png';
import css from '../../../assets/icons/css.png';
import javascript from '../../../assets/icons/javascript.png';
import typescript from '../../../assets/icons/typescript.png';
import postgresql from '../../../assets/icons/postgresql.png';
import mongodb from '../../../assets/icons/mongodb.png';
import react from '../../../assets/icons/react.png';
import vuejs from '../../../assets/icons/vuejs.png';
import nodejs from '../../../assets/icons/nodejs.png';
import docker from '../../../assets/icons/docker.png';
/* import aws from '../../../assets/icons/aws.png'; */
import heroku from '../../../assets/icons/heroku.png';
import netlify from '../../../assets/icons/netlify.png';
import git from '../../../assets/icons/git.png';

export function About() {
  return (
    <Div>
      <h2
        style={{ color: 'var(--shape)', textAlign: 'center', margin: '25px' }}
      >
        Sobre Mim
      </h2>
      <Row>
        <Col md={4}>
          <img src={me} alt="me" width="300" height="350" />
        </Col>
        <Col md={8}>
          <p style={{ color: 'var(--background)' }}>
            Olá meu nome é Lucas e eu sou um Desenvolvedor FullStack.
          </p>
          <p style={{ color: 'var(--background)' }}>
            Eu crio sites sites responsáveis e aplicações mobile em JavaScript
            com Bootstrap, Material design, utilizando frameworks como React e
            Vuejs.
          </p>
          <p style={{ color: 'var(--background)' }}>
            Desenvolvo diversos tipos de aplicações, sempre focando em otimizar
            processos, sem comprometer a qualidade final.
          </p>
        </Col>
      </Row>
      <DivTech>
        <Border>
          <b style={{ color: 'var(--shape)', fontSize: '28px' }}>Linguagens</b>
          <Row>
            <Col style={{ textAlign: 'center', margin: '25px' }}>
              <img src={html} alt="html" width="50" height="50" />
              <p style={{ color: 'var(--background)' }}>
                <b>HTML</b>
              </p>
            </Col>
            <Col style={{ textAlign: 'center', margin: '25px' }}>
              <img src={css} alt="css" width="50" height="50" />
              <p style={{ color: 'var(--background)' }}>
                <b>CSS</b>
              </p>
            </Col>
            <Col
              style={{
                textAlign: 'center',
                margin: '25px',
              }}
            >
              <img src={javascript} alt="javascript" width="50" height="50" />
              <p style={{ color: 'var(--background)' }}>
                <b>JavaScript</b>
              </p>
            </Col>
            <Col style={{ textAlign: 'center', margin: '25px' }}>
              <img src={typescript} alt="javascript" width="50" height="50" />
              <p style={{ color: 'var(--background)' }}>
                <b>Typescript</b>
              </p>
            </Col>
            <Col style={{ textAlign: 'center', margin: '25px' }}>
              <img src={postgresql} alt="javascript" width="50" height="50" />
              <p style={{ color: 'var(--background)' }}>
                <b>PostgreSQL</b>
              </p>
            </Col>
            <Col style={{ textAlign: 'center', margin: '25px' }}>
              <img src={mongodb} alt="javascript" width="50" height="50" />
              <p style={{ color: 'var(--background)' }}>
                <b>MongoDB</b>
              </p>
            </Col>
          </Row>
          <b style={{ color: 'var(--shape)', fontSize: '28px' }}>
            Frameworks & Ferramentas
          </b>
          <Row>
            <Col style={{ textAlign: 'center', margin: '25px' }}>
              <img src={react} alt="javascript" width="60" height="50" />
              <p style={{ color: 'var(--background)' }}>
                <b>React</b>
              </p>
            </Col>
            <Col style={{ textAlign: 'center', margin: '25px' }}>
              <img src={vuejs} alt="javascript" width="50" height="50" />
              <p style={{ color: 'var(--background)' }}>
                <b>VueJS</b>
              </p>
            </Col>
            <Col style={{ textAlign: 'center', margin: '25px' }}>
              <img src={nodejs} alt="javascript" width="50" height="50" />
              <p style={{ color: 'var(--background)' }}>
                <b>Nodejs</b>
              </p>
            </Col>
            {/* <Col style={{ textAlign: 'center', margin: '25px' }}>
              <img src={aws} alt="aws" width="100" height="80" />
              <p style={{ color: 'var(--background)' }}>
                <b>AWS</b>
              </p>
            </Col> */}
            <Col style={{ textAlign: 'center', margin: '25px' }}>
              <img src={heroku} alt="javascript" width="50" height="50" />
              <p style={{ color: 'var(--background)' }}>
                <b>Heroku</b>
              </p>
            </Col>
            <Col style={{ textAlign: 'center', margin: '25px' }}>
              <img src={netlify} alt="javascript" width="50" height="50" />
              <p style={{ color: 'var(--background)' }}>
                <b>Netlify</b>
              </p>
            </Col>
            <Col style={{ textAlign: 'center', margin: '25px' }}>
              <img src={docker} alt="docker" width="70" height="70" />
              {/* <p style={{ color: 'var(--background)' }}>
                <b>Docker</b>
              </p> */}
            </Col>
            <Col style={{ textAlign: 'center', margin: '25px' }}>
              <img src={git} alt="git" width="50" height="50" />
              <p style={{ color: 'var(--background)' }}>
                <b>Git</b>
              </p>
            </Col>
          </Row>
        </Border>
      </DivTech>
    </Div>
  );
}
