"use client";

import React, { useEffect } from "react";
import categories, { getMovies } from "@/api/api";
//import "./Banner.css";

export function Banner() {
    const [movie, setMovie] = React.useState({});

    const fetchRandomMovie = async () => {
        try {
            const netflixOriginalsCategory = categories.find(
                (category) => category.name === "netflixOriginals"
            );
            const data = await getMovies(netflixOriginalsCategory.path);
            const movies = data?.results;
            const randomIndex = Math.floor(Math.random() * movies.length);
            setMovie(movies[randomIndex]);
        } catch (error) {
            console.log("Banner fetchRandomMovie error: ", error);
        }
    };

    useEffect(() => {
        fetchRandomMovie();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substring(0, n - 1) + "..." : str;
    }

    return (
        <header
            className="text-white object-contain h-[448px] mb-8"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                roundPosition: "center-center",
                
            }}
        >
            <div className="ml-10 pt-[140px] h-[190px]">
                <h1 className="text-7xl font-extrabold mb-6">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="flex items-center">
                    <button className="flex items-center justify-center cursor-pointer text-black outline-none border-none font-bold h-14 w-40 bg-white">
                        Assistir
                    </button>

                    <button className="flex items-center justify-center cursor-pointer text-white outline-none border-none font-bold h-14 w-40 ml-6 bg-[#333]">
                        Minha Lista
                    </button>
                </div>

                <div className="w-[45rem] pt-4 max-w-[396px] h-[80px]">
                    <h2 className="text-sm font-semibold">
                        {truncate(movie?.overview, 150)}
                    </h2>
                </div>
            </div>
        </header>
    );
}

{/* <div className="ml-10 pt-[140px] h-[190px] bg-none bg-red-400"></div> */}

// .banner-button {
//   margin-left: 2rem;
//   padding-top: 0.5rem;
//   background-color: rgba(51, 51, 51, 0.5);
//   padding-bottom: 0.5rem;
// }

// .banner-button:hover {
//   color: #000;
//   background-color: #e6e6e6;
//   transition: all 0.2s;
// }