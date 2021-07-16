import React, { useState } from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom'
import Header from './pages/Header'
import Body from './pages/Body'
import Tag from './components/Tag'
import Tab from './components/Tab'

const App = () => {

  const [isDark, setIsDark] = useState(false);

  const toggleClick = () =>{
    console.log(isDark ? '🌞':'🌜')
    setIsDark(!isDark)
  }

  return (
  <div id = 'container'>
    <Header toggleClick = {toggleClick} />
    <BrowserRouter>
    <Body/>
    <Switch>
      <Route exact path = '/'><Tag /></Route>
      <Route path = '/tab'><Tab /></Route>
    </Switch>
  </BrowserRouter>
  </div>
  )
}

export default App;