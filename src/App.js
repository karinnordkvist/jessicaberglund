import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import CookieConsent from 'react-cookie-consent';

// COMPONENTS
import Nav from './components/Nav';

// PAGES
import Home from './pages/Home.js';
import Foto from './pages/Foto.js';
import Flora from './pages/Flora.js';
import Samarbeten from './pages/Samarbeten.js';
import Priser from './pages/Priser.js';
import Kontakt from './pages/Kontakt.js';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Wrapper>
          <CookieConsent
            location="bottom"
            buttonText="Acceptera Cookies"
            cookieName="cookieName"
            style={{ background: '#7d7066', fontSize: '14px' }}
            buttonStyle={{
              background: '#fff',
              fontSize: '13px',
              color: '#000',
            }}
            expires={150}
          >
            Den här webbplatsen använder nödvändiga cookies för att den ska
            fungera på ett bra sätt för dig.
          </CookieConsent>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/foto" element={<Foto />} />
            <Route path="/flora" element={<Flora />} />
            <Route path="/samarbeten" element={<Samarbeten />} />
            <Route path="/priser" element={<Priser />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </div>
  );
};

export default App;
