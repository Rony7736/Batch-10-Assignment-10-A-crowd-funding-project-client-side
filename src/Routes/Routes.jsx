import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import AllCampaign from "../Pages/AllCampaign";
import AddCampaign from "../Pages/AddCampaign";
import MyCampaign from "../Pages/MyCampaign";
import MyDonations from "../Pages/MyDonations";

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
            },
            {
                path: "/addcampaign",
                element: <AddCampaign></AddCampaign>,
            },
            {
                path: "/mycampaign",
                element: <MyCampaign></MyCampaign>,
            },
            {
                path: "/mydonations",
                element: <MyDonations></MyDonations>,
            },
        ]
    },
]);

export default router