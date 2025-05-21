import React, { use } from "react";
import { AuthContext } from "../context/authcontext/AuthContext";

const Signin = () => {
    const {signin} = use(AuthContext);
    const handleSignin = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        
    }
  return (
    <div>
      <form onSubmit={handleSignin}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
          <legend className="fieldset-legend">SignIn</legend>

          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />

          <button type="submit" className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Signin;
