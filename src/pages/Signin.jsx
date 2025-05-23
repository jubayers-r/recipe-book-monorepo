import React, { use, useState } from "react";
import { AuthContext } from "../context/authcontext/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Signin = () => {
  const { signin, googleLogin, error, stateData, setError, setUser } =
    use(AuthContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData.entries());
    signin(email, password)
      .then((res) => {
        setUser(res.user);
        const authInfo = {
          email,
          lastSignInTime: res.user?.metadata?.lastSignInTime,
        };
        fetch("https://recipe-book-app-eosin.vercel.app/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(authInfo),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(stateData ? stateData : "/");
          });
      })
      .catch((error) => setError(error.message));
  };
  const errorMessages = {
    "Firebase: Error (auth/invalid-credential).": {
      title: "Wrong credentials",
      message: "Invalid email or password",
    },
    "Firebase: Error (auth/missing-password).": {
      title: "Wrong credentials",
      message: "Invalid email or password",
    },
    "Firebase: Error (auth/invalid-email).": {
      title: "Wrong credentials",
      message: "Invalid email",
    },
  };
  const errorData = errorMessages[error];

  return (
    <div>
      <form onSubmit={handleSignin}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
          <legend className="fieldset-legend text-2xl font-bold">SignIn</legend>

          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
            required
          />

          <div className="relative">
            <label className="label ">Password</label>
            <input
              name="password"
              type={show ? "text" : "password"}
              className="input"
              placeholder="Password"
              required
            />
            <div
              onClick={(e) => {
                e.preventDefault();
                setShow(!show);
              }}
              className="absolute bottom-3 right-5 z-1"
            >
              {show ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
          <button
            onClick={() =>
              googleLogin().then(() =>
                navigate(stateData ? `${stateData}` : "/")
              )
            }
            className="btn hover:border hover:border-black flex gap-2"
          >
            <FcGoogle size={20} />
            Sign In With Google
          </button>

           <p className="text-center">
            Not Registered Yet?{" "}
            <span className="hover:border-b hover:text-[#00684a]">
              <Link to={"/signup"}>Sign Up Now</Link>
            </span>
          </p>
          {errorData && (
            <div className="p-2 border text-center rounded-sm bg-red-100 border-red-600">
              {errorData.title && (
                <p className="text-sm font-bold">{errorData.title}</p>
              )}
              <p>{errorData.message}</p>
            </div>
          )}
        </fieldset>
      </form>
    </div>
  );
};

export default Signin;
