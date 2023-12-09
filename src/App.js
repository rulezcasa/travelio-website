import Section1 from './components/cover/cover';
import Section2 from './components/maincontent/maincontent';
import Section3 from './components/waitlist/waitlist';
import Contact from './components/contactus/contact';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Section1 />
              <Section2 />
              <Section3 />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
