import { createBrowserRouter } from "react-router-dom";
import SignUpPage from "../page/sign-up";
import SignInPage from "../page/sign-in";
import HomePage from "../page/home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUpPage />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

export default router;
