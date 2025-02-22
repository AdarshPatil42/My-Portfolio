import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "../pages/SharedLayout";
import Portfolio from "../pages/Portfolio";
import ResumeViewer from "../pages/ResumeViewer";

const Routes = [
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <Portfolio />,
      },
      {
        path: "/resume",
        element: <ResumeViewer />,
      },
    ],
  },
];

const router = createBrowserRouter(Routes);
const AppRouter: React.FC = () => <RouterProvider router={router} />;

export default AppRouter;
