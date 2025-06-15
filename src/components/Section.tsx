"use client";

import { getMovies } from "@/api/api";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
    title: string;
    path: string;
}

type Movie = {
    id: number;
    title?: string;
    name?: string;
    poster_path: string | null;
};

const imageBase = "https://image.tmdb.org/t/p/w500";

export function Section({ title, path }: Props) {

    const [movies, setMovies] = useState<Movie[]>([]);

    const fetchMovies = async (_path) => {
        try {
            const data = await getMovies(_path);
            console.log("Data: ", data);
            setMovies(data?.results);
        } catch (error) {
            console.log("fetchMovies error: ", error);
        }
    }

    useEffect(() => {
        fetchMovies(path);
    }, [path]);

    return (
        <div>
            <h1>
                {title}
            </h1>

            <div>
                {movies
                    .filter((movie) => movie.poster_path)
                    .map((movie) => (
                        <img
                            key={movie.id}
                            src={`${imageBase}${movie.poster_path}`}
                            alt={movie.title || movie.name || "Movie"}
                            className="h-40 w-auto"
                        />
                    ))}
            </div>
        </div>
    )
}