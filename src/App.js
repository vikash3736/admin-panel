import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './App.css'
import Home from "./pages/Home/Home";
import FeaturedItems from "./pages/FeaturedItems/FeaturedItems";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        {/* <Home /> */}
        <FeaturedItems />
      </div>
    </div>
  );
}

export default App;
