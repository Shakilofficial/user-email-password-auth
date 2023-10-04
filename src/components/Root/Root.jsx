import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-4">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
