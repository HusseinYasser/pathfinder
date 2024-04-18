import { GiAmericanFootballBall } from "react-icons/gi";
import { GiAmericanFootballHelmet } from "react-icons/gi";
// eslint-disable-next-line react/prop-types
const Node = ({ row, col, start, end, wall, onMouseDown, onMouseEnter, onMouseUp, visited, isPath, animate }) => {

    let nodeColor = visited? 'bg-visited' : 'bg-white';
    nodeColor = isPath? 'bg-path' : nodeColor;
    nodeColor = wall? 'bg-wall' : nodeColor;

    let animations = '';
    if(isPath)
      animations = "animate-pathFill";
    else if(visited)
      animations = "animate-visitedFill";

    let icon = '';
    if(start || isPath)
    {
        icon = <GiAmericanFootballBall className={`${isPath&&!start ? "text-purple-800" : "text-lightgray"} w-full h-full`} />
    }
    if(end)
    {
      icon = <GiAmericanFootballHelmet className='w-full h-full text-lightgray' />
    }

  return (
    <div className = {`w-7 h-6 border border-solid border-blue-200 ${nodeColor} ${wall && "animate-fill"} ${animate && animations}  ` } 
        onMouseDown={(ev) => { ev.preventDefault(); onMouseDown(row, col); }}
        onMouseEnter={(ev) => {ev.preventDefault(); onMouseEnter(row, col);}}
        onMouseUp={(ev) => {ev.preventDefault(); onMouseUp();}}
    >
      {icon}
    </div>
  )
}

export default Node