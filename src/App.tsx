import './App.css'
import { createHashRouter, RouterProvider } from 'react-router'
import Layout from './pages/Layout';
import Public from './pages/Public';
import Admin from './pages/Admin';
import UjTermek from './pages/UjTermek';
import Kosar from './pages/Kosar';
import AdottTermek from './pages/AdottTermek';
import NoPage from './pages/NoPage';

const router = createHashRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {index: true, element: <Public/>},
      {path: "admin", element: <Admin/>},
      {path: "admin/uj-termekek", element: <UjTermek/>},
      {path: "kosar", element: <Kosar/>},
      {path: "termek/:id", element: <AdottTermek/>},
      {path: "*", element: <NoPage/>},
    ],
  },
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App
