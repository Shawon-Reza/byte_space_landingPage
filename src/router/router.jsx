import { createBrowserRouter } from "react-router";
import Test from "../features/Test";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import CreatorProfilePage from './../pages/creatorProfile/CreatorProfilePage';
import SearchPage from "../pages/searchPage/SearchPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
  },
  {
    path: "/courses",
    element: <SearchPage/>,
  },
  {
    path: "/creator_profile_test",
    element: <CreatorProfilePage/>,
  },




  {
    path: "*",
    element: <NotFoundPage/>,
  }
]);