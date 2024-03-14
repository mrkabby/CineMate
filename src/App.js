import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import "swiper/css";
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";




function App() {
  const router= createBrowserRouter([
    {path: "/landingpage", element: <LandingPage/>},
    
  
  ]);
  return (
    <>


   <Trend />
    

    



    </>
  );
}

export default App;
