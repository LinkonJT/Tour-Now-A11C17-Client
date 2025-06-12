import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Form, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import Spinner from "../components/Spinner";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, signInWithGoogle, loading } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, name, photoURL } = Object.fromEntries(
      formData.entries()
    );

/**Password validation */

const upperCase = /[A-Z]/.test(password)
const lowerCase = /[a-z]/.test(password)
const passwordLength= password.length>=6 

if (!upperCase || !lowerCase|| !passwordLength){
  Swal.fire({
      icon: "error",
      title: "Weak Password",
       html: "Password must contain at least:<br>- One uppercase letter<br>- One lowercase letter<br>- Minimum 6 characters",
       
    });
    return;
}


    /******signup and create user in firebase */
    //call createuser

    createUser(email, password)
      .then((result) => {
        // console.log (result)
        return updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL,
        });
      })
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/')
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "SignUp failed",
          text: error.message,
        });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "SignUp successful",
          showConfirmButton: false,
          timer: 1500,
        });
navigate('/')
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "SignUp failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="my-10 mx-auto">
      {loading && <Spinner></Spinner>}
      <form onSubmit={handleSignUp}>
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
            <button onClick={handleGoogleSignIn}
              type="button"
              className="btn bg-base-100 btn-outline w-full">
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
      </form>
    </div>
  );
};

export default SignUp;
