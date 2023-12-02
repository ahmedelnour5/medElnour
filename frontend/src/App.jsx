import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import "./index.css";
const App = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-full font-poppins bg-gradient-to-br from-gray-700 via-gray-900 to-black text-white items-center">
      <Header />
      <>
        <Outlet />
      </>
    </div>
  );
};

export default App;
