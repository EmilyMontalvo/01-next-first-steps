import type { Metadata } from "next";

//
export const metadata : Metadata = { // agrego el Metadata para que me permita escribir más metatags
 title: 'About page',
 description: 'About page',
 keywords: [
    "About page", "Emily Montalvo"
 ]
};

export default function AboutPage(){
    return(
        <>
        <span className="text-7xl ">About Page</span>
        </>
        
    )
}