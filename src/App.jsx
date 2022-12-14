import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Title from './comps/Title'
import UploadFormGroupForm from './comps/UploadFormGroupForm'
import Header from './comps/Header'
import Footer from './comps/Footer'
import Login from './pages/Login'
import Search from './pages/Search'
import Gallery from './pages/Gallery'
import Signup from './pages/Signup'
import NavBar from './comps/NavBar/NavBar'

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <NavBar />
        {/* flex flex-col justify-between h-screen */}
        {/* <Header /> */}
        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={<Title />} />
            <Route path="/upload" element={<UploadFormGroupForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/search" element={<Search />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* <Route path="/search/:keyword" element={<Title />} exact /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
