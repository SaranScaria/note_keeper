import {HashRouter, Route, Routes } from 'react-router-dom'
import AddNotePage from './Pages/AddNotePage/AddNotePage';
import Home from './Pages/Home';


function App() {
  return (
    <div>
      <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add_notes" element={<AddNotePage/>} />
    </Routes>
    </HashRouter>
    </div>
  )
}

export default App





