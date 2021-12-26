import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Button, Div } from './styles';

export function Footer() {
  return (
    <Div>
      <Button>
        <a href="https://github.com/lukevinicius">
          <FaGithub size={30} style={{ color: 'var(--shape)' }} />
        </a>
      </Button>
      <Button>
        <a href="https://instagram.com/lukevinicius_">
          <FaInstagram size={30} style={{ color: 'var(--shape)' }} />
        </a>
      </Button>
      <Button>
        <a href="https://linkedin.com/in/lukevinicius/">
          <FaLinkedin size={30} style={{ color: 'var(--shape)' }} />
        </a>
      </Button>
    </Div>
  );
}
