import React, { useEffect, useState } from "react";

const ClientExperienceCards = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/client-experience")
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch(console.error);
  }, []);

  if (comments.length === 0) {
    return <p className="text-center mt-10">No feedback yet.</p>;
  }

  return (
    <section className="w-full max-w-6xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-2 text-center">What Our Clients Say</h2>
      <div className="carousel carousel-center bg-base-300 rounded-2xl w-11/12 space-x-4 p-4 mx-auto flex justify-center">
        {comments.map(({ _id, name, photoURL, comment, rating }) => (
          <div
            key={_id}
            className="carousel-item flex flex-col items-center bg-base-200 rounded-lg p-6 shadow-md w-72"
          >
            {/* Client photo */}
            <img
              src={photoURL || "https://i.pravatar.cc/150?u=" + _id}
              alt={name || "Client photo"}
              className="w-24 h-24 rounded-full mb-3 object-cover border-2 border-primary"
            />
            {/* Client name */}
            <h3 className="font-semibold text-lg mb-2">{name || "Anonymous"}</h3>
            {/* Stars */}
            <div className="mb-3">
              {[...Array(rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
              {[...Array(5 - rating)].map((_, i) => (
                <span key={i} className="text-gray-300 text-xl">★</span>
              ))}
            </div>
            {/* Comment */}
            <p className="text-center text-sm">{comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientExperienceCards;
