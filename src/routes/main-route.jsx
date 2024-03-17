import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Register } from "../pages/register";
import { Login } from "../pages/login";
import { Announcement } from "../pages/announcement";

export const pages = [
  {
    id: 1,
    element: <Home />,
  },
  {
    id: 2,
    element: <About />,
    path: "/about",
  },
  {
    id: 3,
    element: <Register />,
    path: "/regis",
  },
  {
    id: 4,
    element: <Login />,
    path: "/login",
  },
  {
    id: 5,
    element: <Announcement />,
    path: "/announcement",
  },
];
