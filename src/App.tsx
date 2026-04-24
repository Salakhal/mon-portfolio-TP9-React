import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
// 1. On importe le composant Contact
import Contact from "./pages/Contact"; 
import Education from './pages/Education'

import Experience from './pages/Experience'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      // 2. On déclare la route ici pour que React Router la reconnaisse
      { path: "contact", element: <Contact /> }, 
      { path: "education", element: <Education /> },
      { path: "experience", element: <Experience /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}