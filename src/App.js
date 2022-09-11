import {HashRouter, Route, Routes } from 'react-router-dom'
import AddNotePage from './Pages/AddNotePage/AddNotePage';
import Home from './Pages/Home';


function App() {
  return (
    <div>
      <HashRouter basename="/note_keeper">
      <Routes>
        <Route path="/note_keeper" element={<Home />} />
        <Route path="/add_notes" element={<AddNotePage/>} />
    </Routes>
    </HashRouter>
    </div>
  )
}

export default App





