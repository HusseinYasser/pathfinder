import { GiAmericanFootballBall } from "react-icons/gi";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { FaWeightHanging } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const Node = ({ row, col, start, end, wall, onMouseDown, onMouseEnter, onMouseUp, visited, isPath, animate, weight }) => {

    let nodeColor = visited? 'bg-visited' : 'bg-white';
    nodeColor = isPath? 'bg-path' : nodeColor;
    nodeColor = wall? 'bg-wall' : nodeColor;

    let iconColor = wall? 'text-white' : 'text-lightgray';

    let animations = '';
    if(isPath)
      animations = "animate-pathFill";
    else if(visited)
      animations = "animate-visitedFill";

    //console.log(weight)
    let icon = '';
    if(start || isPath)
    {
        icon = <GiAmericanFootballBall className={`${isPath&&!start ? "text-purple-800" : iconColor} w-full h-full`} />
    }
    if(end)
    {
      icon = <GiAmericanFootballHelmet className={`w-full h-full ${iconColor}`} />
    }
    if(weight){
      icon = <FaWeightHanging className={`w-full h-full ${iconColor}`}></FaWeightHanging>
    }

  return (
    <div className = {`w-cell h-full border border-solid border-blue-200 ${nodeColor} ${(wall||weight) && "animate-fill"} ${animate && animations}  ` } 
        onMouseDown={(ev) => { ev.preventDefault(); onMouseDown(row, col); }}
        onMouseEnter={(ev) => {ev.preventDefault(); onMouseEnter(row, col);}}
        onMouseUp={(ev) => {ev.preventDefault(); onMouseUp();}}
    >
      {icon}
    </div>
  )
}

export default Node