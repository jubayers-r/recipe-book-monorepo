import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../context/authcontext/AuthContext";
import { links } from "../../layout/Footer";
import { NavLink, Outlet } from "react-router";

const Dashboard = () => {
  const data = useLoaderData();
  const { user } = use(AuthContext);
  const myData = data.filter((lol) => lol.email === user.email).length;

  return (
    <div className="grid md:grid-cols-2 gap-5 mx-auto my-5">
      {/* total items */}
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Total Recipes</h2>
          <p>{data.length}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      {/* my added items */}
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">My Added Recipes</h2>
          <p>{myData}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      {/* current user */}
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Logged In User</h2>
          <p>Email: {user.email}</p>
          <p>Name: {user.displayName}</p>
        </div>
      </div>
      {/* Quick Links*/}
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Out Of Dashboard Links</h2>
          <div className=" flex  flex-wrap gap-3">{links}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
