import React from "react";

import { BiSearch } from 'react-icons/bi'
import { FiHome } from 'react-icons/fi'
import { AiOutlineFile } from 'react-icons/ai'
import { MdTaskAlt } from 'react-icons/md'

export default function Features(){
    return (
        <div className="m-2 border-b-1.5 ">
            <div className="px-3 py-1 flex  hover:bg-purple-100 hover:rounded-md"><BiSearch /> Search</div>
            <div className="px-3 py-1 flex  hover:bg-purple-100 hover:rounded-md"><FiHome /> Home</div>
            <div className="px-3 py-1 flex  hover:bg-purple-100 hover:rounded-md"><AiOutlineFile />Notes</div>
            <div className="px-3 py-1 flex  hover:bg-purple-100 hover:rounded-md"><MdTaskAlt /> Tasks</div>
        </div> 
    )
}