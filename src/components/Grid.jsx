/* eslint-disable react/prop-types */
import { useState } from 'react';
import {generateGridUI, isWall, isTargetNode, isVisited} from '../utils/utils.jsx';

const Grid = ({ walls, setWalls, startNode, setStartNode, endNode, setEndNode, visitedNodes, path, locked, animate }) => {

    const nodeOnMouseDown = (i, j) => {
        if(locked)
            return;
        if(isTargetNode(startNode, i, j))
            setDragStart(true);
        else if(isTargetNode(endNode, i, j))
            setDragEnd(true);
        else
            setDragWall(true);
    }

    const nodeOnMouseEnter = (i, j) => {
        if(locked)
            return;
        if(dragStart && JSON.stringify(endNode) != JSON.stringify({'row': i, 'col': j})){
            setStartNode({'row': i, 'col': j});
        }
        else if(dragEnd && JSON.stringify(startNode) != JSON.stringify({'row': i, 'col': j}))
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
        if(locked)
            return;
        if(dragEnd)
            setDragEnd(false);
        else if(dragStart)
            setDragStart(false);
        else if(dragWall)
            setDragWall(false);
    }

    /* Generating the Grid */
    let grid = [];
    for(let i = 0; i < 30; ++i)
    {
        let row = [];
        for(let j = 0; j < 45; ++j)
        {
            row.push({
                'row': i,
                'col': j,
                'isStart': isTargetNode(startNode, i, j),
                'isEnd': isTargetNode(endNode, i, j),
                'isWall': isWall(i, j, walls),
                'onMouseDown': nodeOnMouseDown,
                'onMouseEnter': nodeOnMouseEnter,
                'onMouseUp': nodeOnMouseUp,
                'isVisited': isVisited(i, j, visitedNodes),
                'isPath': isVisited(i, j, path)
            } ) ;
        }
        grid.push(row);
    }
    const [dragStart, setDragStart] = useState(false);
    const [dragEnd, setDragEnd] = useState(false);
    const [dragWall, setDragWall] = useState(false);
    return (
        <div className='flex'>
            <div className='m-auto flex-col'>
                { generateGridUI(grid, animate) }
            </div>
        </div>
    )
}

export default Grid;