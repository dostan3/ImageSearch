import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import SavedPucksPage from "./pages/SavedPuckspage";
import HomePage from "./pages/HomePage";


export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />
      },
      
        {
          path: "/savedpucks",
          element: <SavedPucksPage />,
          errorElement: <ErrorPage />
        }
      ],
    
  

);