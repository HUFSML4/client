import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./pages/landing";
import Loading from "./pages/loading";
import Result from "./pages/result";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`/`} element={<Landing />}></Route>
        <Route path={`/loading/:selectedMovie`} element={<Loading />}></Route>
        <Route path={`/result`} element={<Result />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
