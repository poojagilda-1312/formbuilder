import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./components/Form";
// Import the component for the new form page
import CreateForms from "./components/CreateForms";
const appRoutes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Form />,
      },
      {
        path: "/CreateForm",
        element: <CreateForms />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={appRoutes}></RouterProvider>;

export default App;
