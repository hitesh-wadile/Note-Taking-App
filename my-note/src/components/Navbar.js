import React from "react";
import Features from "./Features";
import CreateProject from "./CreateProject";
import SignUpInfo from "./SignUpInfo";
import Main from "./Main";
import Tasks from "./Tasks";

export default function Navbar(){
    return (
        <div className="flex flex-row w-screen h-screen bg-violet-50 p-1 font-sans font-medium text-es">

            {/* Navbar */}
            <div className="side-navbar flex flex-col bg-white w-1/6 border-r-1.5">

                {/* Sign Up Page */}
                
                <SignUpInfo />

                {/* Project Creation Button */}
                <CreateProject />

                {/* All the Necessary elements of the projects are here */}
                <Features />

            </div>
            <div className="w-2/5">
                <Main />
            </div>
            <div className="w-1/3">
                <div className="mt-8 mx-2 border border-2 bg-white w-60 h-48">
                    <Tasks />
                    <Tasks />
                    <Tasks />
                    <Tasks />
                </div>
            </div>


        </div>
    )
}