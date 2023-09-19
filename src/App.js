
import './App.css';
import CountryCreate from './CountryCreate';
import CountryDelete from './CountryDelete';
import CountryDetail from './CountryDetail';
import CountryEdit from './CountryEdit';
import CountryList from './CountryList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<CountryList />}> </Route>
          <Route  path="/create" element={<CountryCreate />}> </Route>
          <Route  path="/edit/:id" element={<CountryEdit />}> </Route>
          <Route  path="/delete/:id" element={<CountryDelete />}> </Route>
          <Route  path="/detail/:id" element={<CountryDetail />}> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
