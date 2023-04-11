import './App.css';
import { React, Suspense, useState } from 'react';
import Page1 from './components/page1';

// Async method
// import AsyncComponent from './components/AsyncComponent';

//Lazy Method
const Page2Lazy = React.lazy(() => import('./components/page2'))
const Page3Lazy = React.lazy(() => import('./components/page3'))


function App() {

  const [route, setRoute] = useState('page1');


  const onRouteChange = (route) => {
    setRoute(route);


    /// Part Two way
    // if (route === "page1")
    //   setRoute(route);
    // else if (route === "page2") {
    //   //import only when needed
    //   //this is async, returns a promise
    //   import('./components/page2').then((Page2) => {
    //     console.log(Page2)
    //     setRoute(route)
    //     setComponent(Page2.default)
    //   });

    // }
    // else if (route === "page3") {
    //   import('./components/page3').then((Page3) => {
    //     setRoute(route)
    //     setComponent(Page3.default)
    //   });
    // }
  }

  // ASYNC WAY
  // if (route === "page1")
  //   return <Page1 onRouteChange={onRouteChange} />

  // if (route === "page2") {
  //   const AsyncPage2 = AsyncComponent(() => import('./components/page2'))
  //   return <AsyncPage2 onRouteChange={onRouteChange} />
  // }

  // if (route === "page3") {
  //   const AsyncPage3 = AsyncComponent(() => import('./components/page3'))
  //   return <AsyncPage3 onRouteChange={onRouteChange} />
  // }

  // LAZY WAY
  if (route === "page1")
    return <Page1 onRouteChange={onRouteChange} />

  if (route === "page2") {
    return (
      <Suspense fallback={<div>Loading....</div>}>
        <Page2Lazy onRouteChange={onRouteChange} />
      </Suspense>
    )
  }

  if (route === "page3") {
    return (
      <Suspense fallback={<div>Loading....</div>}>
        <Page3Lazy onRouteChange={onRouteChange} />
      </Suspense>
    )
  }
}

export default App;
