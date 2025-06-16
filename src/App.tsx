import { Route,Routes } from 'react-router'
import './App.css'
import {Home} from './components/Home/Home'
import { Menu } from './components/Menu/Menu'
import { AboutUs } from './components/AboutUs/Aboutus'
import { Contacts } from './components/Contacts/Contacts'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/menu" element={<Menu />} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contacts" element={<Contacts/>} />
      </Routes>
    </div>
  )
}

export default App
