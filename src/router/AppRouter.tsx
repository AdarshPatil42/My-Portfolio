import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "../pages/Portfolio";
import ResumeViewer from "../pages/ResumeViewer";

const Routes = [
  {
    path: "/",
    element: <Portfolio />,
  },
  {
    path: "/resume",
    element: <ResumeViewer />,
  },
];

const router = createBrowserRouter(Routes);
const AppRouter: React.FC = () => <RouterProvider router={router} />;

export default AppRouter;
