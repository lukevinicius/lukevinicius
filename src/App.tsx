import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from './styles/global';

import { Home } from './screens/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <Footer />
    </>
  );
}

export default App;
