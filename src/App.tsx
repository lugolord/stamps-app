import { BrowserRouter, Routes, Route } from "react-router"
import Login from './views/Login'
import SignUp from './views/SignUp'
import UserDashboard from './views/UserDashboard'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/user/:id" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
