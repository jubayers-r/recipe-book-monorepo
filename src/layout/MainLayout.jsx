// import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";
// import { Outlet, useLocation } from "react-router";
// import { ToastContainer } from "react-toastify";

const MainLayout = () => {
//   const location = useLocation();

//   useEffect(() => {
//     const path = location.pathname;
//     if (path === "/") {
//       document.title = "TusharPay - Home";
//     } else if (path === "/bills") {
//       document.title = "TusharPay - Bills";
//     } else if (path === "/profile") {
//       document.title = "TusharPay - My Profile";
//     } else if (path === "/edit") {
//       document.title = "Update Profile";
//     } else if (path.startsWith("/bill/")) {
//       document.title = "TusharPay - Pay Bill";
//     }
//   }, [location]);
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <hr className="text-gray-200" />
      <main className="flex-grow flex flex-col justify-center mb-15 mt-4 w-9/11">
        <Outlet />
      </main>
      {/* <ToastContainer /> */}
      <Footer />
    </div>
  );
};

export default MainLayout;