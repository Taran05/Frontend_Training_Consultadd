import './App.css';
import "antd/dist/antd.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Toggle from './toggle';
import Child from './child';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Toggle />} />
          <Route path="/data" element={<Child/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
