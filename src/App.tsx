import { BrowserRouter, Routes, Route } from "react-router";
import Login from './views/Login'
import SignUp from './views/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
