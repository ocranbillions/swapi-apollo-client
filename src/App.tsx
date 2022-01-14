import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PeoplePage from './pages/people-page';
import PersonPage from './pages/person-page';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PeoplePage />} />
        <Route path='/:person' element={<PersonPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;