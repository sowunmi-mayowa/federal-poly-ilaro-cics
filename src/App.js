import Login from './admin/login';
import { Route, Routes } from "react-router-dom";
import Admin from './admin/admin'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/admin" element={ <Admin /> } />
        </Routes>
    </div>
  );
}

export default App;
