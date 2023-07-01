import React from "react";
import { AiOutlineFolder } from "react-icons/ai";
import Project from "./Project";
import Note from "./Note";
// import FolderImg from "../images/Folder.png"

export default function Main(){
    return (
        <div className="ml-4">
            <h1 className="text-3xl">Welcome back, Hitesh!</h1>
            <div className="pt-4">
                <div className="flex items-center"><AiOutlineFolder /><h1 className="px-3">My Projects</h1></div> 
                    <div className="grid grid-cols-3">    
                        <Project />
                        <Project />
                        <Project />
                        <Project />
                        <Project />
                        <Project />
                    </div>
                <div className="flex items-center"><AiOutlineFolder /><h1 className="px-3">My Notes</h1></div> 
                    <div className="grid grid-cols-2 ">
                        <Note />
                        <Note />
                    </div>
            </div>
        </div>
    )
}