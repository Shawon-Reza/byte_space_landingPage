import { createBrowserRouter } from "react-router";
import Test from "../features/Test";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import CreatorProfilePage from './../pages/creatorProfile/CreatorProfilePage';
import SearchPage from "../pages/searchPage/SearchPage";
import CourseDetails from './../pages/courseDetails/CourseDetails';
import SignUpPage from "../pages/signUp/SignUpPage";
import SignInPage from "../pages/signIn/SignInPage";
import LandingPage from './../pages/landingPage/LandingPage';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
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
    path: "/signIn",
    element: <SignInPage/>,
  },
  {
    path: "/signUp",
    element: <SignUpPage />,
  },


  {
    path: "*",
    element: <NotFoundPage />,
  }
]);