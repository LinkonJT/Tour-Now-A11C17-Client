import {
  createBrowserRouter
} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllPackages from "../pages/AllPackages";
import AboutUs from "../pages/AboutUs";
import AddPackage from "../pages/AddPackage";
import ManageMyPackages from "../pages/ManageMyPackages";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/all-packages",
        element: <AllPackages></AllPackages>
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/add-package",
        element: <AddPackage></AddPackage>
      },
      {
        path: "/manage-all-Packages",
        element: <ManageMyPackages></ManageMyPackages>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      }
    ]
  }
]);
