"use client";

import categories from "@/api/api";
import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";

export default function Home() {
    return (
        <div className="bg-[#111]">
            <Navbar />
            <Banner />

            {categories.map((category) => (
                <Section 
                    key={category.name}
                    title={category.title}
                    path={category.path}
                />
            ))}
        </div>
    );
}
