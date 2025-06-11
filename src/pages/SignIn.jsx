import React from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router";

const SignIn = () => {
  return (
    <div className="my-10">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <h2 className="fieldset-legend text-xl mx-auto">Login Here!!</h2>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button className="btn btn-neutral mt-4">Login</button>
        <div className="space-y-3">
          <button type="button" className="btn bg-base-100 btn-outline w-full">
            <FcGoogle size={24} /> Login with Google
          </button>
          <p className="font-semibold text-center">
            Don't Have An Account?{" "}
            <NavLink className="text-blue-700 hover:underline" to="/signup">
              SignUp
            </NavLink>
          </p>
        </div>
      </fieldset>
    </div>
  );
};

export default SignIn;
