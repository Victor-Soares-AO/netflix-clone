"use client";

import { getMovies } from "@/api/api";
import { useEffect, useState } from "react";

type Props = {
    title: string;
    path: string;
};

type Movie = {
    id: number;
    title?: string;
    name?: string;
    poster_path: string | null;
};

interface MovieResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

const imageBase = "https://image.tmdb.org/t/p/w500";

export function Section({ title, path }: Props) {
    const [movies, setMovies] = useState<Movie[]>([]);

    const fetchMovies = async (_path: string) => {
        try {
            const data: MovieResponse = await getMovies(_path);
            console.log(data)
            setMovies(data?.results || []);
        } catch (error) {
            console.log("fetchMovies error: ", error);
        }
    };

    useEffect(() => {
        fetchMovies(path);
    }, [path]);

    return (
        <div className="space-y-8 mb-8 bg-[#111]">
            <h1 className="text-xl font-bold text-white pl-10">
                {title}
            </h1>

            <div className="flex gap-5 overflow-x-scroll overflow-y-hidden no-scrollbar px-10 ">
                {movies
                    .filter((movie) => movie.poster_path)
                    .map((movie) => (
                        <img
                            key={movie.id}
                            src={`${imageBase}${movie.poster_path}`}
                            alt={movie.title || movie.name || "Movie"}
                            className="h-56 w-auto hover:scale-110 hover:cursor-pointer"
                        />
                    ))}
            </div>
        </div>
    );
}
