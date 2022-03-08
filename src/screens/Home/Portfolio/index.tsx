import { Container, Grid } from './styles';

import palpiteiroImg from '../../../assets/images/palpiteiro.png';

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>Portfolio</h2>
      <Grid>
        <div>
          <a href="https://www.opalpiteirovip.com/">
            <img src={palpiteiroImg} alt="opalpiteiro" />
          </a>
          <p>
            O projeto Palpiteiro é uma landing page para venda de um grupo vip
            de dicas de apostas esportivas. O projeto foi desenvolvido para O
            Palpiteiro |{' '}
            <a href="https://www.opalpiteirovip.com/">@opalpiteiro</a>
          </p>
        </div>
        <div>
          <h2>Memoirs</h2>
          <p>Em desenvolvimento</p>
        </div>
        <div>
          <h2>Igreja 365</h2>
          <p>Em desenvolvimento</p>
        </div>
      </Grid>
    </Container>
  );
}
