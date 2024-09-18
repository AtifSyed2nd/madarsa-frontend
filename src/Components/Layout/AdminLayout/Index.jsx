import { Outlet } from "react-router-dom";
import AdminPanel from "../AdminPanel/index";

function Index({ Children }) {
  return (
    <div>
      <AdminPanel />
      <div className="main-container transition-all duration-500 ease-in-out max-tablet:pr-0 ">
        {Children}
      </div>
      <Outlet />
    </div>
  );
}

export default Index;
