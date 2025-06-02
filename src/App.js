import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpHome from './routes/SignUpHome';
import SignUpClient from './routes/SignUpClient';
import SignUpCounselor from './routes/SignUpCounselor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpHome />} />
        <Route path="/signup/client" element={<SignUpClient />}></Route>
        <Route path="/signup/counselor" element={<SignUpCounselor />} />
      </Routes>
    </Router>
  );
}

export default App;
