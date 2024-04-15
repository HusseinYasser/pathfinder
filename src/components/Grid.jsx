import Node from './Node.jsx';

import { useState } from 'react';

const isTargetNode = (targetNode, i, j) => {
    return i == targetNode.row && j == targetNode.col;
}

const isWall = (i, j, walls) => {
    return walls.has(JSON.stringify({i, j}));
}

const Grid = () => {

    const nodeOnMouseDown = (i, j) => {
        if(isTargetNode(startNode, i, j))
            setDragStart(true);
        else if(isTargetNode(endNode, i, j))
            setDragEnd(true);
        else
            setDragWall(true);
    }

    const nodeOnMouseEnter = (i, j) => {
        if(dragStart){
            setStartNode({'row': i, 'col': j});
        }
        else if(dragEnd)
        {
            setEndNode({'row': i, 'col': j});
        }
        else if(dragWall)
        {
            walls.add(JSON.stringify({i, j}));
            setWalls(new Set(walls));
        }
    }

    const nodeOnMouseUp = () => {
        if(dragEnd)
            setDragEnd(false);
        else if(dragStart)
            setDragStart(false);
        else if(dragWall)
            setDragWall(false);
    }

    let grid = [];

    const [startNode, setStartNode] = useState({
        'row': 10, 
        'col': 5
    });

    const [endNode, setEndNode] = useState({
        'row': 10, 
        'col': 40
    });
    
    const [dragStart, setDragStart] = useState(false);
    const [dragEnd, setDragEnd] = useState(false);
    const [dragWall, setDragWall] = useState(false);
    const [walls, setWalls] = useState(new Set());

    /* Creating the Grid */
    for(let i = 0; i < 30; ++i)
    {
        let row = [];
        for(let j = 0; j < 45; ++j)
        {
            console.log(isWall(i, j, walls));
            row.push(<Node row={i} col = {j} 
                start = {isTargetNode(startNode, i, j)}
                end = {isTargetNode(endNode, i, j)}
                wall = {isWall(i, j, walls)}
                onMouseDown={nodeOnMouseDown}
                onMouseEnter= {nodeOnMouseEnter}
                onMouseUp = {nodeOnMouseUp}
                />)
        }
        grid.push(<div className='flex'>
            {row}
        </div>
        );
    }

  return (
    <div className='flex'>
        <div className='m-auto flex-col'>
            { grid }
        </div>
    </div>
  )
}

export default Grid