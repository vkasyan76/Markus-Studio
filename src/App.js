import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Title from './comps/Title'
import UploadForm from './comps/UploadForm'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Title />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
