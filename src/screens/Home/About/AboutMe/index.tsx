import me from '../../../../assets/images/me.jpeg';
import { Container } from './styles';

export function AboutMe() {
  return (
    <Container>
      <div className="item1">
        <img src={me} alt="me" width="300" height="350" />
      </div>
      <div className="item2">
        <p style={{ color: 'var(--background)' }}>
          Olá meu nome é Lucas e eu sou um Desenvolvedor FullStack.
        </p>
        <p style={{ color: 'var(--background)' }}>
          Sou formado em Análise e desenvolvimento de sistemas. Eu crio sites
          sites responsáveis e aplicações mobile em JavaScript com Bootstrap,
          Material design, utilizando React.
        </p>
        <p style={{ color: 'var(--background)' }}>
          Desenvolvo diversos tipos de aplicações, sempre focando em otimizar
          processos, sem comprometer a qualidade final.
        </p>
      </div>
    </Container>
  );
}
