import React, { useState } from "react";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("http://localhost:3000/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        toast.success("Thanks for subscribing!");
      } else {
        setStatus("error");
        toast.error("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="w-11/12 mx-auto my-10 p-6 bg-base-300 rounded-2xl shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
      <p className="text-gray-600 mb-6">
        Get updates on new packages, promotions, and travel tips directly to your inbox!
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center justify-center gap-3"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input input-bordered w-full sm:w-auto"
        />
        <button type="submit" className="btn btn-primary">
          Subscribe
        </button>
      </form>

      {status === "loading" && <p className="mt-3 text-gray-500">Subscribing...</p>}
    </section>
  );
};

export default Newsletter;
