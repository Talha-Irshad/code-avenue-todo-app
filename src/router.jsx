import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Todos from "./pages/Todos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/todos",
    element: <Todos />,
  },
]);

export default router;
