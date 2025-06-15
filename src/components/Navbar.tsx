"use client"

import React, { useEffect } from "react";
import "@/Nav.css";

export function Navbar() {
    const [show, setShow] = React.useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setShow(window.scrollY > 100);
        });
    }, []);

    return (
        <div className={`fixed top-0 flex justify-between w-full h-[30px] px-10 py-6 pb-14 z-10 ${show && "nav-container-black"}`}>
            <img
                className="fixed left-10 w-20 h-auto object-contain top-8"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix"
            ></img>

            <img
                className="fixed right-10 w-8 object-contain"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU"
                alt="Pasquadev"
            ></img>
        </div>
    );
}