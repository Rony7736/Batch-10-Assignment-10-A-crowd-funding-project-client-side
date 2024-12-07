import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import AllCampaign from "../Pages/AllCampaign";
import AddCampaign from "../Pages/AddCampaign";
import MyCampaign from "../Pages/MyCampaign";
import MyDonations from "../Pages/MyDonations";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import UpdateCampaign from "../Components/UpdateCampaign";
import CampaignDetails from "../Components/CampaignDetails";
// import Login from "../Components/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/allcampaign",
                element: <AllCampaign></AllCampaign>,
                loader: () => fetch("http://localhost:5000/addcampaign")
            },
            {
                path: "/addcampaign",
                element: <AddCampaign></AddCampaign>,
            },
            {
                path: "/updatecampaign",
                element: <UpdateCampaign></UpdateCampaign>,
            },
            {
                path: "/mycampaign",
                element: <MyCampaign></MyCampaign>,
                loader: () => fetch("http://localhost:5000/addcampaign")
            },
            {
                path: "/mydonations",
                element: <MyDonations></MyDonations>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/details",
                element: <CampaignDetails></CampaignDetails>,
                loader: () => fetch("http://localhost:5000/addcampaign")
            },
        ]
    },
]);

export default router