import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import {Auth} from "./pages/auth/index";
import { ExpenseTracker } from './pages/expense-tracker';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path= "/" excat element={<Auth/>} />;
          <Route path= "/expense-tracker" excat element={<ExpenseTracker/>} />;
        </Routes>
      </Router>
    </div>
  );
}

export default App; 
