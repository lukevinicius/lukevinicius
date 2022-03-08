import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Container } from './styles';

export function Footer() {
  const size = 30;

  return (
    <Container>
      <a href="https://github.com/lukevinicius">
        <FaGithub size={size} />
      </a>
      <a href="https://instagram.com/lukevinicius_">
        <FaInstagram size={size} />
      </a>
      <a href="https://linkedin.com/in/lukevinicius/">
        <FaLinkedin size={size} />
      </a>
    </Container>
  );
}
