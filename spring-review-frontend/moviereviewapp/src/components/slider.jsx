import React, { useState, useEffect, useSelector } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";
function Slider() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const respone = await axios.get("/api/v1/movies");
      setMovies(respone.data);
    })();
  }, []);

  const imageURL = movies.poster;
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    if (currentImage < movies.length - 1) {
      setCurrentImage((preve) => preve + 1);
    }
  };
  const handleprevious = () => {
    if (currentImage > 0) {
      setCurrentImage((preve) => preve - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage < movies.length - 1) {
        handleNext();
      } else {
        setCurrentImage(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [movies, imageURL, currentImage]);

  // const movies = [
  //   {
  //     url: "https://wallpapercave.com/wp/wp11960764.jpg",
  //   },
  //   {
  //     url: "https://wallpapercave.com/wp/wp4770368.jpg",
  //   },
  //   {
  //     url: "https://wallpapercave.com/wp/wp13798797.jpg",
  //   }
  // ];

  // const name= [
  //   {
  //     title: "IronMan",
  //   },
  //   {
  //     title: "Avengers Endgame",
  //   },
  //   {
  //     title: "Thor",
  //   }
  // ];

  return (
    <>
      <div className="flex flex-row min-h-full h-[90.8vh] overflow-hidden">
        {movies.map((data, index) => (
          <div
            key={data.imdbId + "bannerHome" + index}
            className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group"
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            <div className="w-[100vw] h-[97vh]">
              <img src={data.poster} className="h-full w-full object-cover" />
            </div>

            {/***button next and previous image */}
            <div className="absolute top-0 w-full h-full flex items-center justify-between px-4">
              <button
                onClick={handleprevious}
                className="bg-white p-1 rounded-full text-xl z-10 text-black"
              >
                <FaAngleLeft />
              </button>
              <button
                onClick={handleNext}
                className="bg-white p-1 rounded-full text-xl z-10 text-black"
              >
                <FaAngleRight />
              </button>
            </div>

            <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>

            <div
              className="container mx-auto"
              style={{ position: "absolute", top: "70%", left: "5%" }}
            >
              <div className="w-full max-w-md px-3">
                <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl ">
                  {data?.title || data?.name}
                </h2>
                <p className="text-ellipsis line-clamp-3 my-2">
                  {data.overview}
                </p>

                <Link to={`${data.trailerLink}`}>
                  <button className="bg-white px-4 py-2 text-black font-bold rounded mt-4 hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105">
                    Trailer
                  </button>
                </Link>
                
                <Link to={`/player/${data.imdbId}`}>
                  <button className="bg-white px-4 py-2 text-black font-bold rounded mt-4 hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105 ml-5">
                    Review
                  </button>
                </Link>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Slider;
