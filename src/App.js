import './App.css';
import React, { useState } from 'react'
import IncomeModal from './IncomeModal';
import BudgetModal from './BudgetModal';
import Welcome from './Welcome';
import { Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav, Collapse, Row } from 'reactstrap'
import CombinedData from './CombinedData';
import { Route, Routes } from 'react-router-dom'



function App() {
  const [ navExpand, setNavExpand ] = useState(false)
  return (
    <div className="App">
          <Navbar
          color="light"
          expand="md"
          light
        >
         <NavbarBrand href="/">
          | Home |
         </NavbarBrand>
         <NavbarToggler
              className='me-2'
              onClick={() => setNavExpand(!navExpand)}
            />
            <Collapse navbar isOpen={ navExpand }>
        <Nav
          className="me-auto"
          navbar
        >
         <NavItem>
            <NavLink href="/monthdata">
              | Monthly Data | 
            </NavLink>
         </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
      <div>
      <Routes>
          <Route path='/monthdata' element={<CombinedData/>}/>
          <Route path='/' element={<Welcome/>}/>
        </Routes>
      </div>
    </div>

  );
}

export default App;
