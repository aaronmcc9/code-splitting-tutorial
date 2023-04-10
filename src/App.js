import './App.css';
import { useState } from 'react';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';

function App() {

  const [route, setRoute] = useState('page1');

  const onRouteChange = (route) => {
    setRoute(route);
  }

  console.log(route);
  if (route == "page1")
    return <Page1 onRouteChange={onRouteChange} />

  if (route == "page2")
    return <Page2 onRouteChange={onRouteChange} />

  if (route == "page3")
    return <Page3 onRouteChange={onRouteChange} />

}

export default App;
