import Nav from './components/Nav'
import Card from './components/Card'
import Store from './components/Store'
import {Globalstyle} from './Globalstyle'
import {Route,Routes} from 'react-router-dom'
import {Providercart} from './components/CartContext'
function App() {
  return (
    <>
    <Providercart>
      <Globalstyle/>
      <Nav/>
    <Routes>
      <Route path='/' element={ <Card/>}/>
      <Route path='/store' element={ <Store/>}/>
     
    </Routes>
    </Providercart>
    </>
  );
}

export default App;
