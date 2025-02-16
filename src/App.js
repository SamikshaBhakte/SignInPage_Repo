import logo from "./logo.svg";
import "./App.css";
import Signup from "./signup/Signup";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./login/Login";
import ForgotPassword from "./forgotPassword/ForgotPassword";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgotPassword",
      element: <ForgotPassword />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
