import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import "swiper/css";
import Banner from "./pages/banner/Banner";
import Trend from "./pages/trend/Trend";
import Main from './pages/main/Main';
import Header from "./pages/header/Header";
import Details from "./components/Details";

function App() {
  return (
    <>
    <Header />
    <Banner />
    <Main />
    <Trend />
    <Details />

    


    </>
  );
}

export default App;
