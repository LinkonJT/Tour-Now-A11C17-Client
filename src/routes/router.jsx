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
import NotFound404 from "../pages/NotFound404";
import MyBookings from "../pages/MyBookings";
import PackageDetails from "../pages/PackageDetails";
import PrivateRoute from "./PrivateRoute";
import UpdatePackage from "../components/UpdatePackage";
import BookingForm from "../components/BookingForm";

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
        element: <PrivateRoute>
           <AddPackage></AddPackage>
        </PrivateRoute>
      },
      {
        path: "/manage-my-packages",
        element: <PrivateRoute>
          <ManageMyPackages></ManageMyPackages>
        </PrivateRoute>
      },
      {
        path: "/manage-my-packages/:email",
        element: <PrivateRoute>
          <ManageMyPackages></ManageMyPackages>
        </PrivateRoute>
      },
      {
        path: "/update-package/:id",
        loader:({params})=> fetch(`http://localhost:3000/update-package/${params.id}`),
        element: <PrivateRoute>
          <UpdatePackage></UpdatePackage>
        </PrivateRoute>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/my-bookings",
        element: <PrivateRoute>
          <MyBookings></MyBookings>
        </PrivateRoute>
      },
      {
        path: "/pkg-details/:id",
        element: 
        <PrivateRoute>
          <PackageDetails></PackageDetails>
        </PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:3000/pkg-details/${params.id}`)

      },
        {
        path: "/booking-form/:id",
        // loader: ({params})=> fetch(`http://localhost:3000/booking-form/${params.id}`)
          loader: ({ params }) => fetch(`http://localhost:3000/tours/${params.id}`),
        element: <PrivateRoute>
          <BookingForm></BookingForm>
        </PrivateRoute>,
        
      },
    ]
  },
    {
    path: '*',
    element: <NotFound404></NotFound404>
  },
]);
