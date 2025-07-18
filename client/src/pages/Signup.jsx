import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/authcontext/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const Signup = () => {
  const { signup, googleLogin, stateData, error, setError, setUser } =
    use(AuthContext);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, name, url, ...rest } = Object.fromEntries(
      formData.entries()
    );

    if (!passwordRegex.test(password)) {
      setError(
        "Minimum password length needs to be 6, and should include atleast one Uppercase and one Lowercase alphabet"
      );
    } else {
      signup(email, password)
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url,
          }).then(() => {
            const user = {
              // so that i don't forget, it was done because initially firebase cant load the update profile version of name and other things. it needs to reload the page to show the updated things which i didn't want, so we had to store the info to state that initially the ux doesn't get harmed.
              ...auth.currentUser,
              displayName: name,
              photoURL: url,
            };

            const updateProfile = {
              email,
              name,
              url,
              ...rest,
              creationTime: user?.metadata?.creationTime,
              lastSignInTime: user?.metadata?.lastSignInTime,
            };

            fetch("https://recipe-book-app-eosin.vercel.app/users", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(updateProfile),
            })
              .then((res) => res.json())
              .then(() => {
                setUser(user);
                navigate(stateData ? stateData : "/");
              });
          });
        })
        .catch((error) => {
          if (error.message == "Firebase: Error (auth/email-already-in-use).") {
            setError(
              "Email Already in use! Please login or try registering with a different email."
            );
          } else {
            setError(error.message);
          }
        });
    }
  };
  useEffect(() => {
    setError(null);
  }, [location.pathname]);
  return (
    <div>
      <form onSubmit={handleSignup}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto dark:bg-slate-600 dark:text-white">
          <legend className="fieldset-legend text-2xl font-bold dark:text-white">
            SignUp
          </legend>

          <label className="label">Name</label>
          <input
            dark:text-black
            name="name"
            type="text"
            className="input dark:text-black"
            placeholder="Name"
            required
          />

          <label className="label">Email</label>
          <input
            dark:text-black
            name="email"
            type="email"
            className="input dark:text-black"
            placeholder="Email"
            required
          />

          <label className="label">PhotoURL</label>
          <input
            dark:text-black
            name="url"
            type="url"
            className="input dark:text-black"
            placeholder="PhotoURL"
          />

          <div className="relative">
            <label className="label ">Password</label>
            <input
              dark:text-black
              name="password"
              type={show ? "text" : "password"}
              className="input dark:text-black"
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
              {show ? (
                <FaEyeSlash className="dark:text-black" />
              ) : (
                <FaEye className="dark:text-black" />
              )}
            </div>
          </div>

          <button type="submit" className="btn btn-neutral mt-4">
            Sign Up
          </button>
          <button
            onClick={() => googleLogin().then(() => navigate("/"))}
            className="btn hover:border hover:border-black flex gap-2"
          >
            <FcGoogle size={20} />
            Sign Up With Google
          </button>
          <p className="text-center">
            Already Registered?{" "}
            <span className="hover:border-b hover:text-[#00684a] dark:hover:text-[#a6ffa6]">
              <Link to={"/signin"}>Sign In</Link>
            </span>
          </p>
          {error && (
            <div className="w-full text-center">
              <p className="p-2 border text-center rounded-sm bg-red-100 dark:bg-red-500 dark:border-white border-red-600">
                {error}
              </p>
            </div>
          )}
        </fieldset>
      </form>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/")}
          className="btn hover:bg-[#00ed64] hover:rounded-full hover:border hover:border-black  mt-5 btn-lg flex w-fit"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default Signup;
