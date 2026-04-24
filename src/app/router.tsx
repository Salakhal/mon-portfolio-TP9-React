import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";

// Import des pages (nous allons les créer juste après)
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Certifications from "../pages/Certifications";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/experience", element: <Experience /> },
      { path: "/education", element: <Education /> },
      { path: "/certifications", element: <Certifications /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);