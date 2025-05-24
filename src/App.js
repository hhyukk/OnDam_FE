import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpHome from './routes/SignUpHome';
import SignUpClient from './routes/SignUpClient';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpHome />} />
        <Route path="/signup/client" element={<SignUpClient />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
