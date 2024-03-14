import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import "swiper/css";
// import { RouterProvider, createBrowserRouter} from "react-router-dom";

import Banner from "./pages/banner/Banner";
import Trend from "./pages/trend/Trend";
import Main from "./pages/main/Main";
import TopRated from "./pages/top rated/TopRated";





function App() {
  // const router= createBrowserRouter([
  //   {path: "/landingpage", element: <LandingPage/>},
    
  
  // ]);
  return (
    <>

<Banner />
<Trend />
<Main />
<TopRated />

   </>
  );
}

export default App;
