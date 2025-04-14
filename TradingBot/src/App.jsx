import AuthForm from './components/AuthForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      
  <Routes>
        <Route path="/" element={
          <AuthForm />
          } />
      </Routes>
      </Router>
      );
}

export default App;