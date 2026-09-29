import { createBrowserRouter } from "react-router";
import Test from "../features/Test";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import CreatorProfilePage from './../pages/creatorProfile/CreatorProfilePage';
import SearchPage from "../pages/searchPage/SearchPage";
import CourseDetails from './../pages/courseDetails/CourseDetails';
import SignUpPage from "../pages/signUp/SignUpPage";
import SignInPage from "../pages/signIn/SignInPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
  },
  {
    path: "/courses",
    element: <SearchPage />,
  },
  {
    path: "/courses/:id",
    element: <CourseDetails/>,
  },


  {
    path: "/creators/:id",
    element: <CreatorProfilePage />,
  },



  {
    path: "/sign_In",
    element: <SignInPage/>,
  },
  {
    path: "/sign_up",
    element: <SignUpPage />,
  },


  {
    path: "*",
    element: <NotFoundPage />,
  }
]);