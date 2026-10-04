import { BrowserRouter, Routes, Route } from "react-router"
import UserSearch from './views/UserSearch'
import SignUp from './views/SignUp'
import UserDashboard from './views/UserDashboard'
import Admin from './views/Admin'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserSearch />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/user/:id" element={<UserDashboard />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
