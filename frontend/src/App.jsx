import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";

const App = () => {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black">
        <Outlet />
      </div>
    </>
  );
};

export default App;
