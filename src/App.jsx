import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Paste from './components/paste';
import ViewPaste from './components/ViewPaste';

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div>
        <Navbar />
        <Home />
      </div>
  },
  {
    path: '/pastes',
    element:
      <div>
        <Navbar />
        <Paste />
      </div>
  },
  {
    path: "/pastes/:id",
    element:
      <div>
        <Navbar />
        <ViewPaste />
      </div>
  },
]);

function App() {



  return (
    <div>
      <RouterProvider router={router} />
      <h1></h1>
      </div>

  )
}

export default App
