import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import "swiper/css";
// import { RouterProvider, createBrowserRouter} from "react-router-dom";

import Banner from "./pages/banner/Banner";
import Trend from "./pages/trend/Trend";
import Main from "./pages/main/Main";
import TopRated from "./pages/top rated/TopRated";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import LandingPage from "./pages/landingPage/LandingPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Schedule from "./pages/schedule/Schedule";
import { Home } from "./pages/home/Home";
import SearchResults from "./pages/searchresults/SearchResults";





function App() {
  const router = createBrowserRouter ([
    {path: "/", element: <Home/>},
    {path:"/landing", element:<LandingPage/>},
    {path:"/schedule", element: <Schedule/>},
    {path:"/trend", element: <Trend/>},
    {path:"/toprated", element:<TopRated/>},
    // {path:"/search", element: <SearchResults/>}

  ])
  // const router= createBrowserRouter([
  //   {path: "/landingpage", element: <LandingPage/>},
    
  
  // ]);
  return (
    <>
    <RouterProvider router={router}/>

   </>
  );
}

export default App;
