
import {useState} from 'react';

const Tutorial = () => {

  const next = () => {
    setCurrPage(Math.min(currPage + 1, menus.length-1));
  }
  const prev = () => {
    setCurrPage(Math.max(0, currPage-1));
  }

  const getTutorialPage = (title, body, explaination, extraText) => {
    return <div className = "w-full flex flex-col items-center space-y-10">
    <div className = "text-lightblue text-3xl font-semibold">{title}</div>
    <div className = "px-4 text-darkgray text-2xl font-small"> {body} </div>
    <div className = "px-4 text-darkgray text-lg font-small"> {extraText} </div>
    {explaination}
    <div className = "flex justify-between w-full">
      <button className={buttonStyle}>
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
  const intro = getTutorialPage("Welcome to the BallPasser Visualizer", "This tutorial will take you through the website very quickly, Enjoy", introExplain, "");


  const meetTheGridExplain =  <img src = "https://thefootballfaithful.com/wp-content/uploads/2022/04/Iniesta.png"></img>;
  const meetTheGrid = getTutorialPage("Meet the grid", `The grid has a ball and a player waiting fot the ball to be passed. 
  The ball can move on any cell on the grid except walls, and movement of the ball is considered as cost of 1 unit. 
  Moving on a weighted cell is considered as cost of 20 units in the path to the player.`, meetTheGridExplain, "");

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

  const menus = [intro, meetTheGrid, chooseAlgo, meetTheAlgo];

  const [currPage, setCurrPage] = useState(0);

  

  return (
    <div className = "p-5 w-1/2 left-1/4 top-32 z-20 absolute border-2 border-black bg-white rounded">
      {menus[currPage]}
    </div>
  )
}

 export default Tutorial;