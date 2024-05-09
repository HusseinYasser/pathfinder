
import {useState} from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Tutorial = ( { handler } ) => {

  const next = () => {
    if(currPage == menus.length-1)
    {
      finishTutorial();
    }
    else
      setCurrPage(currPage + 1);
  }
  const prev = () => {
    setCurrPage(Math.max(0, currPage-1));
  }

  const finishTutorial = () => {
    handler(false);
  }

  const getTutorialPage = (title, body, explaination, extraText) => {
    return <div className = "w-full flex flex-col items-center space-y-5">
    <div className = "text-lightblue text-3xl font-bold">{title}</div>
    <div className = "px-4 text-darkgray text-xl font-semibold"> {body} </div>
    <div className = "px-4 text-darkgray text-lg font-samll"> {extraText} </div>
    {explaination}
    <div className = "flex justify-between w-full">
      <button className={buttonStyle} onClick={finishTutorial}>
        Skip tutorial
      </button>
      <div className = "flex justify-around space-x-2">
        <button className = {buttonStyle} onClick={prev}>Previous</button>
        <button className = {buttonStyle} onClick = {next}>Next</button>
      </div>
    </div> 
  </div>
  }

  const buttonStyle = "bg-lightblue  py-2 px-5 rounded font-normal text-white";
  
  const introExplain = <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvfwXg_xBEnONjFCZezry3sFsE0IktZuhiQjiH84MuEg&s' />;
  const intro = getTutorialPage("Welcome to the BallPasser Visualizer", "This tutorial will take you through the website very quickly, Enjoy", introExplain, 'If you want to dive right in, feel free to press the "Skip Tutorial" button below. Otherwise, press "Next"!');


  const meetTheGridExplain =  <img src = "https://thefootballfaithful.com/wp-content/uploads/2022/04/Iniesta.png"></img>;
  const meetTheGrid = getTutorialPage("Meet the grid", `The tool aims to find differnet paths between the ball and player using different algorithms`, meetTheGridExplain, `The grid has a ball and a player waiting fot the ball to be passed. 
  The ball can move on any cell on the grid except walls, and movement of the ball is considered as cost of 1 unit. 
  Moving on a weighted cell is considered as cost of 20 units in the path to the player.`);

  const chooseAlgoExplain = <img src = "/algos.png"></img>
  const chooseAlgo = getTutorialPage("Choose your Algorithm", `You can choose your algorithm from the drop down menu named Algorithms, there are multiple algorithms to visualize 
  and each of them is working differently.`, chooseAlgoExplain, <>Note that some algorithms are unweighted, while others are weighted. <span className="font-bold">Unweighted</span> algorithms do not take turns or weight nodes into account, whereas <span className="font-bold">weighted</span> ones do. Additionally, not all algorithms guarantee the shortest path.</>);

  const algos = <div className = "space-y-4">
    <div>
      <span className = "font-medium">Dijkstra&apos;s Algorithm</span> (weighted): the father of pathfinding algorithms; guarantees the shortest path 
    </div>

    <div>
      <span className = "font-medium">A* Search</span> (weighted): arguably the best pathfinding algorithm; uses heuristics to guarantee the shortest path much faster than Dijkstra&apos;s Algorithm
    </div>

    <div>
      <span className = "font-medium">Greedy Best-first Search</span> (weighted): a faster, more heuristic-heavy version of A*; does not guarantee the shortest path
    </div>

    <div>
      <span className = "font-medium">Bidirectional Swarm Algorithm</span> (unweighted): bfs from both sides; does guarantee the shortest path
    </div>

    <div>
      <span className = "font-medium">Breath-first Search</span>  (unweighted): a great algorithm; guarantees the shortest path
    </div>

    <div>
      <span className = "font-medium">Depth-first Search</span>  (unweighted): a very bad algorithm for pathfinding; does not guarantee the shortest path
    </div>
  </div>;
  const meetTheAlgo = getTutorialPage("Meet the algorithms", `Not all algorithms are created equal.`, <></>, algos )

  const wallsAndWeightsPage = getTutorialPage("Adding walls and weights", `Click on the grid to add a wall. Click on the grid while pressing W to add a weight. Generate mazes and patterns from the "Mazes & Patterns" drop-down menu.`, 
    <img src = "drawing walls.gif" />,
    `Walls are impenetrable, meaning that a path cannot cross through them. Weights, however, are not impassable. They are simply more "costly" to move through. In this application, moving through a weight node has a "cost" of 15.`
  );


  const draggingNodesPage = getTutorialPage("Dragging nodes", "Click and drag the start, bomb, and target nodes to move them.", 
  <img src = "dragging nodes.gif" />, "Note that you can drag nodes even after an algorithm has finished running. This will allow you to instantly see different paths.");

  const outro = getTutorialPage("Enjoy!", "I hope you have just as much fun playing around with this visualization tool!", <img src = 'https://a1.eestatic.com/cronicaglobal/2015/01/12/culemania/palco/palco_2759862_321710_1706x960.jpg' />,
 <div className='flex items-center'>You can checkout my &nbsp; <a href = "https://github.com/HusseinYasser"><FaGithub /></a>
 &nbsp; <a href="https://www.linkedin.com/in/hussein-ebrahim-044613206/"> <FaLinkedin /> </a>
 &nbsp; <a href = "https://my-portfolio-hussein-yasser-ebrahims-projects.vercel.app/"> <FaChrome /> </a>
  </div>);

  const menus = [intro, meetTheGrid, chooseAlgo, meetTheAlgo, wallsAndWeightsPage, draggingNodesPage, outro];

  const [currPage, setCurrPage] = useState(0);

  return (
    <div className = "p-5 w-1/2 left-1/4 h-fit top-32 z-20 absolute border-2 border-black bg-white rounded">
      {menus[currPage]}
    </div>
  )
}


export default Tutorial;