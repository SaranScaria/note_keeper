import {BrowserRouter, Route, Routes } from 'react-router-dom'
import AddNotePage from './Pages/AddNotePage/AddNotePage';
import Home from './Pages/Home';


function App() {
  return (
    <div>
      <BrowserRouter basename="/note_keeper">
      <Routes>
        <Route path="/note_keeper" element={<Home />} />
        <Route path="/add_notes" element={<AddNotePage/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App





