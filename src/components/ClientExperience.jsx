import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthContext";


const ClientExperience = () => {
  const { user } = useContext(AuthContext);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comment.trim()) {
      toast.error("Please leave a comment.");
      return;
    }

    // Prepare data including logged-in user's name and photoURL
    const payload = {
      comment,
      rating,
      name: user?.displayName || "Anonymous",
      photoURL: user?.photoURL || "",
    };

    try {
      const res = await fetch("http://localhost:3000/client-experience", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (res.ok) {
        toast.success("Thank you for your feedback!");
        setComment("");
        setRating(5);
      } else {
        toast.error(data.error || "Failed to submit comment.");
      }
    } catch (error) {
      toast.error("Network error: " + error.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-base-300 rounded-lg shadow-lg mt-20 mb-2">
      <h2 className="text-2xl font-semibold mb-4">Leave Your Experience</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="textarea textarea-bordered w-full mb-4"
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your experience here..."
          required
        />

        <label className="block mb-2 font-medium">Rating</label>
        <select
          className="select select-bordered w-full max-w-xs mb-6"
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value, 10))}
        >
          {[5, 4, 3, 2, 1].map((num) => (
            <option key={num} value={num}>
              {num} Star{num > 1 ? "s" : ""}
            </option>
          ))}
        </select>
        <button className="btn btn-primary flex" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ClientExperience;
