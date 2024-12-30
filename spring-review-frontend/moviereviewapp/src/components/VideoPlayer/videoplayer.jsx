import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import { useParams } from "react-router-dom";

function VideoPlayer() {
  const { imdbId } = useParams();
  const [movie, setMovie] = useState(null); // Initialize as null since movie is an object
  const [reviewBodies, setReviewBodies] = useState([]); // To store review bodies
  const [newReview, setNewReview] = useState(""); // To store the new review input

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`/api/v1/movies/${imdbId}`);
        setMovie(response.data);
        setReviewBodies(
          response.data.reviewIds?.map((review) => review.body) || []
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovie();
  }, [imdbId]);

  const addReview = async () => {
    if (!newReview.trim()) {
      alert("Review cannot be empty!");
      return;
    }

    const reviewData = {
      reviewBody: newReview,
      imdbId: imdbId,
    };

    try {
      const response = await axios.post("/api/v1/reviews", reviewData);
      console.log("Review added:", response.data);
      setReviewBodies((prevReviews) => [...prevReviews, newReview]); // Update the reviews list
      setNewReview(""); // Clear the input field
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="react-player-container h-[100vh]">
        <ReactPlayer
          controls={true}
          playing={true}
          url={movie.trailerLink}
          width="100%"
          height="80%"
        />

        {/* Add Review Section */}
        <div className="add-review mt-4 relative m-7">
          <h3 className="font-bold ml-1 text-1xl">Add a Review</h3>
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write your review here..."
            className="w-[89%] p-2 border rounded-md mb-2"
          ></textarea>
          <button
            onClick={addReview}
            className="bg-black text-white px-4 py-2 rounded hover:bg-slate-800 absolute"
            style={{ top: "30%", left: "90%" }}
          >
            Submit Review
          </button>
        </div>

        {reviewBodies && reviewBodies.length > 0 && (
          <div className="reviews m-7">
            <h3 className="font-bold mb-1">Reviews</h3>
            <div className="flex flex-col gap-2">
              {reviewBodies.map((reviewBody, index) => (
                <div
                  key={index}
                  className="review font-semibold bg-gray-100 p-3 rounded shadow-md border border-gray-400 mb-1"
                >
                  <p>{reviewBody}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default VideoPlayer;
