import React from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router";

const SignUp = () => {
  return (
    <div className="my-10 mx-auto">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <h2 className="text-xl">SignUp Here!!!</h2>
        {/* name */}
        <label className="label">Name</label>
        <input type="text" className="input" name="name" placeholder="name" />
        {/* email */}
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
        />

        {/* photo URL */}
        <label className="label">Photo URL</label>
        <input
          type="text"
          className="input"
          name="photoURL"
          placeholder="Photo URL"
          required
        />
        {/* Password */}
        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Password"
        />
        <button className="btn btn-neutral mt-4">SignUp</button>
        <div className="space-y-3">
          <button type="button" className="btn bg-base-100 btn-outline w-full">
            <FcGoogle size={24} /> Login with Google
          </button>
          <p className="font-semibold text-center">
            Already Have An Account?{" "}
            <NavLink className="text-blue-700 hover:underline" to="/signin">
              SignIn
            </NavLink>
          </p>
        </div>
      </fieldset>
    </div>
  );
};

export default SignUp;
