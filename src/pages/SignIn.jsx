import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import Spinner from "../components/Spinner";
import Swal from "sweetalert2";

const SignIn = () => {
const {signInUser, signInWithGoogle, loading} = useContext(AuthContext);
const navigate = useNavigate();

const handleSignIn=(e)=>{
  e.preventDefault()
  const form = e.target;
  const formData = new FormData(form)
  const {email, password} = Object.fromEntries(formData.entries())

  

//call the signIN function
signInUser(email, password)
.then((result)=>{
  console.log(result.user);
    Swal.fire({
            position: "center",
            icon: "success",
            title: "SignIn successful",
            showConfirmButton: false,
            timer: 1500,
          });
  navigate('/')
})
.catch((error)=>{
    Swal.fire({
            position: "top-end",
            icon: "error",
            title: "SignUp failed",
            text: error.message,
          });
})


}

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
          position: "center",
          icon: "error",
          title: "SignIn failed",
          text: error.message,
        });
      });
  };


  return (
    <div className="my-10">
      {
        loading && <Spinner></Spinner>
      }
      <form onSubmit={handleSignIn}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <h2 className="fieldset-legend text-xl mx-auto">Login Here!!</h2>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button className="btn btn-neutral mt-4">Login</button>
        <div className="space-y-3">
          <button onClick={handleGoogleSignIn} type="button" className="btn bg-base-100 btn-outline w-full">
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
      </form>
    </div>
  );
};

export default SignIn;
