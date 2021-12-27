import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from './styles/global';

import { Home } from './screens/Home';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
