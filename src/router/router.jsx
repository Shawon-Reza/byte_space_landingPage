import { createBrowserRouter } from "react-router";

import Test from "../features/Test";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import CreatorProfilePage from "../pages/creatorProfile/CreatorProfilePage";
import CreatorDirectoryPage from "../pages/creatorDirectory/CreatorDirectoryPage";
import SearchPage from "../pages/searchPage/SearchPage";
import CourseDetails from "../pages/courseDetails/CourseDetails";
import SignUpPage from "../pages/signUp/SignUpPage";
import SignInPage from "../pages/signIn/SignInPage";
import LandingPage from "../pages/landingPage/LandingPage";
import PageTransitionLayout from "../components/ui/PageTransitionLayout";

// import PageTransitionLayout from "../components/layout/PageTransitionLayout";

export const router = createBrowserRouter([
  {
    element: <PageTransitionLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },

      {
        path: "/courses",
        element: <SearchPage />,
      },

      {
        path: "/courses/:id",
        element: <CourseDetails />,
      },

      {
        path: "/creators",
        element: <CreatorDirectoryPage />,
      },

      {
        path: "/creators/:id",
        element: <CreatorProfilePage />,
      },

      {
        path: "/signIn",
        element: <SignInPage />,
      },

      {
        path: "/signUp",
        element: <SignUpPage />,
      },

      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);