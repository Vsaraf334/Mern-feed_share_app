import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NewPlace from "./places/pages/NewPlace";
import RootLayout from "./shared/pages/RootLayout";
import UserPlaces from "./places/pages/UserPlaces";
import Users from "./user/pages/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Users /> },
      { path: "/:userId/places", element: <UserPlaces /> },
      {
        path: "/places/new",
        element: <NewPlace />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
