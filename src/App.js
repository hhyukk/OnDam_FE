import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './routes/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
