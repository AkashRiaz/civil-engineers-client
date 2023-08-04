import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import EngineerProfile from "../pages/EngineerProfile/EngineerProfile";
import AllEngineers from "../pages/AllEngineers/AllEngineers";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'engineers',
        element:<AllEngineers></AllEngineers>
      },
      {
        path:'engineers/:id',
        element:<EngineerProfile></EngineerProfile>,
        loader:({params})=>fetch(`http://localhost:5000/engineers/${params.id}`)
      }
    ]
    },
  ]);

  export default router;