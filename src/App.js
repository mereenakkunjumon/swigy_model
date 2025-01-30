import React,{lazy, Suspense} from 'react';
import './App.css';
// import About from './components/About';
import Contactus from './components/Contactus';
import Landing from './components/Landing'
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Body from './components/Body';
import Cart from './components/Cart';
// import Restaurentmenu from './components/Restaurentmenu';
// import Grocery from './components/Grocery';
const Grocery=lazy(()=>import("./components/Grocery"));
const Restaurentmenu=lazy(()=>import("./components/Restaurentmenu"))
const About=lazy(()=>import("./components/About"))
const appRouter=createBrowserRouter([
 { path:"/",
 element:<Landing/>,
 children:[
  {
    path:"/",
    element:<Body/>
  },
  {
    path:"/about",
    element:<Suspense fallback={<h1>Loading</h1>}><About/>,</Suspense>
  },
  {
    path:"/contact",
    element:<Contactus/>
  },
  {
    path:"/restaurent/:resId",
    element:<Suspense fallback={<h1>Loaing....</h1>}><Restaurentmenu/></Suspense>
  },
  {
    path:"/grocery",
    element:<Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>
  },
  {
    path:"/cart",
    element:<Cart/>
  },
  ],
},


]);


const App=()=> {

  return (
    <RouterProvider router={appRouter} />
  );
};

export default App;
