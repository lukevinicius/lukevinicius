import { Col, Row } from 'react-bootstrap';
import { Border, Div, DivTech } from './styles';

import me from '../../../assets/images/me.jpeg';
import netlify from '../../../assets/icons/netlify.png';

export function About() {
  return (
    <Div id="about">
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
            Sou formado em Análise e desenvolvimento de sistemas. Eu crio sites
            sites responsáveis e aplicações mobile em JavaScript com Bootstrap,
            Material design, utilizando frameworks como React e Vuejs.
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
            <Col style={{ textAlign: 'center', margin: '15px' }}>
              <img
                alt="Lucas-HTML"
                height="50"
                width="50"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
              />
              <p style={{ color: 'var(--background)' }}>
                <b>HTML</b>
              </p>
            </Col>
            <Col style={{ textAlign: 'center', margin: '15px' }}>
              <img
                alt="Lucas-CSS"
                height="50"
                width="50"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
              />
              <p style={{ color: 'var(--background)' }}>
                <b>CSS</b>
              </p>
            </Col>
            <Col
              style={{
                textAlign: 'center',
                marginTop: '15px',
              }}
            >
              <img
                alt="Lucas-Js"
                height="50"
                width="50"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
              />
              <p style={{ color: 'var(--background)' }}>
                <b>JavaScript</b>
              </p>
            </Col>
            <Col style={{ textAlign: 'center', marginTop: '15px' }}>
              <img
                alt="Lucas-typescript"
                height="50"
                width="50"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              />
              <p style={{ color: 'var(--background)' }}>
                <b>Typescript</b>
              </p>
            </Col>
            <Col style={{ textAlign: 'center', marginTop: '15px' }}>
              <img
                alt="Lucas-postgresql"
                height="50"
                width="50"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              />
              <p style={{ color: 'var(--background)' }}>
                <b>PostgreSQL</b>
              </p>
            </Col>
            <Col style={{ textAlign: 'center', marginTop: '15px' }}>
              <img
                alt="Lucas-mongodb"
                height="50"
                width="50"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              />
              <p style={{ color: 'var(--background)' }}>
                <b>MongoDB</b>
              </p>
            </Col>
          </Row>
          <b style={{ color: 'var(--shape)', fontSize: '28px' }}>
            Frameworks & Ferramentas
          </b>
          <Row>
            <Col style={{ textAlign: 'center', margin: '15px' }}>
              <img
                alt="Lucas-React"
                height="50"
                width="50"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              />
              <p style={{ color: 'var(--background)' }}>
                <b>React</b>
              </p>
            </Col>
            <Col style={{ textAlign: 'center', margin: '15px' }}>
              <img
                alt="Lucas-Vuejs"
                height="50"
                width="50"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
              />
              <p style={{ color: 'var(--background)' }}>
                <b>VueJS</b>
              </p>
            </Col>
            <Col style={{ textAlign: 'center', margin: '15px' }}>
              <img
                alt="Lucas-Nodejs"
                height="50"
                width="50"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              />
              <p style={{ color: 'var(--background)' }}>
                <b>Nodejs</b>
              </p>
            </Col>
            <Col style={{ textAlign: 'center', margin: '15px' }}>
              <img
                alt="Lucas-AWS"
                height="50"
                width="50"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
              />
              <p style={{ color: 'var(--background)' }}>
                <b>AWS</b>
              </p>
            </Col>
            <Col style={{ textAlign: 'center', margin: '15px' }}>
              <img
                alt="Lucas-Heroku"
                height="50"
                width="50"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg"
              />
              <p style={{ color: 'var(--background)' }}>
                <b>Heroku</b>
              </p>
            </Col>
            <Col style={{ textAlign: 'center', margin: '15px' }}>
              <img src={netlify} alt="javascript" width="50" height="50" />
              <p style={{ color: 'var(--background)' }}>
                <b>Netlify</b>
              </p>
            </Col>
            <Col style={{ textAlign: 'center', margin: '15px' }}>
              <img
                alt="Lucas-Docker"
                height="50"
                width="50"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
              />
              <p style={{ color: 'var(--background)' }}>
                <b>Docker</b>
              </p>
            </Col>
            <Col style={{ textAlign: 'center', margin: '15px' }}>
              <img
                alt="Lucas-Git"
                height="50"
                width="50"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              />
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
