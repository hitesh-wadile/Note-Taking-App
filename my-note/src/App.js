import { BiSearch } from 'react-icons/bi'
import { FiHome } from 'react-icons/fi'
import { AiOutlineFile } from 'react-icons/ai'
import { MdTaskAlt } from 'react-icons/md'

export default function App() {
  return (
    <div className="flex flex-row w-screen h-screen bg-violet-50 p-1 font-sans font-medium text-es">

        {/* Navbar */}
      <div className="side-navbar flex flex-col bg-white w-1/6 border-r-1.5">
            
            {/* Sign Up Page */}
        <div className="flex border-b-1.5 border-gray-200">
                {/* <div className="img bg-black w-8 h-8 rounded-full"></div> */}
                <div className=" p-2 ">
                    <h3 className="text-slate-900 ">Hitesh Wadile</h3>
                    <p className="text-gray-500 text-es">hiteshwadile2003@gmail.com</p>
                </div>
        </div>

            {/* Project Creation Button */}

        <div className="my-2 mx-2 py-1 px-2 bg-purple-600 text-center rounded-sm">
            <h4 className="text-white text-sm">+ New Project</h4>
        </div>

        {/* All the Necessary elements of the projects are here */}

        <div className="m-2 border-b-1.5 ">
            <div className="px-3 py-1 flex  hover:bg-purple-100 hover:rounded-md"><BiSearch/> Search</div>
            <div className="px-3 py-1 flex  hover:bg-purple-100 hover:rounded-md"><FiHome/> Home</div>
            <div className="px-3 py-1 flex  hover:bg-purple-100 hover:rounded-md"><AiOutlineFile />Notes</div>
          <div className="px-3 py-1 flex  hover:bg-purple-100 hover:rounded-md"><MdTaskAlt/> Tasks</div>
        </div> 

      </div>


    </div>
  )
}