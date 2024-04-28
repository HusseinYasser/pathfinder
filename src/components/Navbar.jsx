/* eslint-disable react/prop-types */
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from 'react';
import { RiCloseLine } from "react-icons/ri";
import { BFS } from '../algorithms/bfs';
import { DFS } from '../algorithms/dfs';

// eslint-disable-next-line react/prop-types
const Navbar = ({ visualize, findingPath, clearBoard, clearWalls, clearPath, speed, setSpeed, 
                algo, setAlgo }) => {

  const tabsClass = "hover:text-lightblue cursor-pointer flex items-center space select-none";
  const iconClass = "text-xl mt-1.5";

  const dropDownItemClass = `${findingPath? "hover:bg-gray-400":"hover:bg-lightblue"} text-white text-poppins text-sm rounded p-3 cursor-pointer select-none`;

  const [showAlgoMenus, setShowAlgoMenus] = useState(false);
  const [showSpeedMenus, setShowSpeedMenus] = useState(false);

  const algorithmsMenus = (
    <div className = 'flex-col bg-darkblue absolute top-18 rounded py-3 px-2 z-10'>
        <div className="w-100 flex justify-end"> 
          <RiCloseLine className="cursor-pointer hover:text-lightblue"
            onClick={() => setShowAlgoMenus(false)}
          /> 
        </div>
        <div className = {dropDownItemClass} disabled={findingPath} onClick={ () => changeAlgo(BFS.name)}> Breadth-first search </div>
        <div className = {dropDownItemClass} onClick={ () => changeAlgo(DFS.name)} > Depth-first search </div>
        <div className = {dropDownItemClass} > Disjesktra algorithm </div>
        <div className = {dropDownItemClass} > A* algorithm </div>
        <div className = {dropDownItemClass} > Greedy best-first search </div>
    </div>
  );

  const speedMenus = (
    <div className = 'flex-col bg-darkblue absolute top-18 rounded py-3 px-2 z-10'>
        <div className="w-100 flex justify-end"> 
          <RiCloseLine className="cursor-pointer hover:text-lightblue"
            onClick={() => setShowSpeedMenus(false)}
          /> 
        </div>
        <div className = {dropDownItemClass} onClick={()=>changeSpeed('Slow')}> Slow </div>
        <div className = {dropDownItemClass} onClick={()=>changeSpeed('Medium')} > Medium </div>
        <div className = {dropDownItemClass} onClick={()=>changeSpeed('Fast')} > Fast </div>
    </div>
  );

  const changeAlgo = (chosenAlgo) => {
      setAlgo(chosenAlgo);
      setShowAlgoMenus(false);
  }
  
  const changeSpeed = (chosenSpeed) => {
      if(findingPath)
        return;
      setSpeed(chosenSpeed);
      setShowSpeedMenus(false);
  }

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
          {algo == ''? 'Pick your algorithm': 'Visualize ' + algo}
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

        <div>
          <div className={tabsClass} onClick={() => setShowSpeedMenus(prev => !prev)}> Speed: {speed} <IoMdArrowDropdown className = {iconClass} /> </div>
          { showSpeedMenus && speedMenus }
        </div>

    </div>
  )
}

export default Navbar