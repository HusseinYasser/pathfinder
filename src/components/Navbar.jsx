import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Navbar = ({ visualize, findingPath, clearBoard, clearWalls, clearPath }) => {

  const tabsClass = "hover:text-lightblue cursor-pointer flex items-center space select-none";
  const iconClass = "text-xl mt-1.5";

  const dropDownItemClass = `${findingPath? "hover:bg-gray-400":"hover:bg-lightblue"} text-white text-poppins text-sm rounded p-3 cursor-pointer select-none`;

  const [showAlgoMenus, setShowAlgoMenus] = useState(false);

  const algorithmsMenus = (<div className = 'flex-col bg-darkblue absolute top-18 rounded py-3 px-2'>
      <div className = {dropDownItemClass} disabled={findingPath} onClick={()=> {
        if(!findingPath) console.log("BFFFSS"); 
      }}> Breadth-first search </div>
      <div className = {dropDownItemClass} > Depth-first search </div>
      <div className = {dropDownItemClass} > Disjesktra algorithm </div>
      <div className = {dropDownItemClass} > A* algorithm </div>
      <div className = {dropDownItemClass} > Greedy best-first search </div>
  </div>);

  return (
    <div className = 'flex justify-around bg-darkblue text-poppins text-white h-16 items-center font-semibold'>
        <div className="text-xl font-bold hover:text-lightblue cursor-pointer select-none">
          Pathfinding Visualizer
        </div>

        <div>
          <div className={tabsClass} onClick={() => setShowAlgoMenus(prev => !prev)}> Algorithms <IoMdArrowDropdown className = {iconClass} /> </div>
          { showAlgoMenus && algorithmsMenus }
        </div>

        <div className={tabsClass}>
          Mazes & Patterns <IoMdArrowDropdown className = {iconClass} />
        </div>

        <button className={`${findingPath? "bg-gray-400":"bg-lightblue"} py-2 px-5 rounded font-normal ${findingPath && "text-black"}`} onClick={visualize} disabled={findingPath} >
          Visualize BFS
        </button>

        <div className={tabsClass + " " + `${findingPath? "hover:text-red-500":"hover:text-lightblue"}`} onClick = { () => {if(!findingPath) clearBoard()} }>
          Clear Board
        </div>

        <div className={tabsClass + " " + `${findingPath? "hover:text-red-500":"hover:text-lightblue"}`} onClick = { () => {if(!findingPath) clearWalls()} } >
          Clear Walls & Weights
        </div>

        <div className={tabsClass + " " + `${findingPath? "hover:text-red-500":"hover:text-lightblue"}`} onClick = { () => {if(!findingPath) clearPath()} } >
          Clear Path
        </div>

        <div className={tabsClass}>
          Speed <IoMdArrowDropdown className = {iconClass} />
        </div>

    </div>
  )
}

export default Navbar