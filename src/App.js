import './App.css';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import AboutScreen from './Screens/AboutScreen/AboutScreen';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "/about",
      element: <AboutScreen />,
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
