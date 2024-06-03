import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "swiper/css";
import LandingPage from "./pages/landingPage/LandingPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/Home";
import SearchResults from "./pages/searchresults/SearchResults";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/landing", element: <LandingPage /> },
    { path: "/search-results", element: <SearchResults /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
