import { createBrowserRouter } from "react-router-dom";
import SignUpPage from "../page/sign-up";
import SignInPage from "../page/sign-in";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUpPage />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
]);

export default router;
