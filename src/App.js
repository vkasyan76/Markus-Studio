import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Title from './comps/Title'
import UploadFormGroupForm from './comps/UploadFormGroupForm'
import Header from './comps/Header'
import Footer from './comps/Footer'
import Profile from './pages/Profile'
import Search from './pages/Search'
import Gallery from './pages/Gallery'

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Header />
        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={<Title />} />{' '}
            <Route path="/upload" element={<UploadFormGroupForm />} />{' '}
            <Route path="/profile" element={<Profile />} />{' '}
            <Route path="/search" element={<Search />} />{' '}
            <Route path="/gallery" element={<Gallery />} />{' '}
          </Routes>{' '}
        </main>{' '}
        <Footer />
      </div>{' '}
    </Router>
  )
}

export default App
