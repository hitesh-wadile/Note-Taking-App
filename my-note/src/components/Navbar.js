import React from "react";
import Features from "./Features";
import Project from "./Project";
import SignUpInfo from "./SignUpInfo";

export default function Navbar(){
    return (
        <div className="flex flex-row w-screen h-screen bg-violet-50 p-1 font-sans font-medium text-es">

            {/* Navbar */}
            <div className="side-navbar flex flex-col bg-white w-1/6 border-r-1.5">

                {/* Sign Up Page */}
                
                <SignUpInfo />

                {/* Project Creation Button */}
                <Project />

                {/* All the Necessary elements of the projects are here */}
                <Features />

            </div>


        </div>
    )
}