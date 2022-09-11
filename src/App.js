import {BrowserRouter, Route, Routes } from 'react-router-dom'
import AddNotePage from './Pages/AddNotePage/AddNotePage';
import Home from './Pages/Home';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add_notes" element={<AddNotePage/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App





