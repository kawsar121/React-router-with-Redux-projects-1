import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layouts from "../Components/Layouts/Layouts";
import TodoApps from "../Pages/TodoApps/TodoApps";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/todoapps",
            element: <TodoApps></TodoApps>
        }
    ]
  },
]);

export default Router
