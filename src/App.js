import {BrowserRouter, Route, Routes } from 'react-router-dom'
import AddNotePage from './Pages/AddNotePage/AddNotePage';
import Home from './Pages/Home';


function App() {
  return (
    <div>
      <BrowserRouter>
    <Home/>
      <Routes>
        
        <Route path="/add_notes" element={<AddNotePage/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App





