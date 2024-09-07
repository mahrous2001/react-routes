import './App.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import "@fortawesome/fontawesome-free/css/all.min.css"
import Layout from './Layout/Layout'
import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import NotFound from './Notfound/NotFound'
import Portfolio from './Portfolio/Portfolio'

// createHashRouter
let routers = createHashRouter([
  {
    path: "/", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> }
    ]
  }
]);

function App() {

  return <RouterProvider router={routers}></RouterProvider>
}

export default App
