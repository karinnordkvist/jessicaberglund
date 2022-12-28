import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import Nav from './components/Nav';
import Main from './pages/Main.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CookieConsent
          location="bottom"
          buttonText="Acceptera Cookies"
          cookieName="cookieName"
          style={{ background: '#2B373B', fontSize: '14px' }}
          buttonStyle={{ background: '#fff', fontSize: '13px', color: '#000' }}
          expires={150}
        >
          Den här webbplatsen använder nödvändiga cookies för att den ska
          fungera på ett bra sätt för dig.
        </CookieConsent>

        <Nav />

        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/nyheter" element={<NewsPage />} />
          <Route path="/kalender" element={<CalendarPage />} />
          <Route path="/dokument" element={<DocumentsPage />} />
          <Route path="/kontakt" element={<ContactPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
