import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Review from "./Review";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/review/:id" element={<Review />} />
      </Routes>
    </>
  );
}

export default App;
