import React from 'react';
import image from "../navy_blue_bg.jpg";

export default function Home() {
    return (
        <main>
            <div>
            {/* <img src={image} alt="blueBackground" className="absolute object-cover w-full h-full backgroundEffects"></img> */}
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-pink-300 font-bold cursive leading-none lg:leading-snug home-name">Hi! I'm Nele.</h1>
            </section>
            </div>
        </main>
    )
}