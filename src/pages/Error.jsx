import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5">
      <img src="/error.png" className="w-fit" />
      <h3 className="font-bold text-3xl">PAGE NOT FOUND</h3>
      <Link to="/">
        <button className="btn">GO BACK TO HOME</button>
      </Link>
    </div>
  );
};

export default Error;
