/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import {generateGridUI, isTargetNode, isVisited, isFoundIn} from '../utils/utils.jsx';

const Grid = ({ walls, setWalls, weights, setWeights, startNode, setStartNode, endNode, setEndNode, visitedNodes, path, locked, animate }) => {

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
            if(JSON.stringify(endNode) == JSON.stringify({'row': i, 'col': j})
                || JSON.stringify(startNode) == JSON.stringify({'row': i, 'col': j})
                || isFoundIn(i, j, walls) || isFoundIn(i, j, weights))
                    return;
            if(addingWeights){
                weights.add(JSON.stringify({i, j}));
                setWeights(new Set(weights));
            }
            else
            {
                walls.add(JSON.stringify({i, j}));
                setWalls(new Set(walls));
            }
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
    for(let i = 0; i < 27; ++i)
    {
        let row = [];
        for(let j = 0; j < 50; ++j)
        {
            row.push({
                'row': i,
                'col': j,
                'isStart': isTargetNode(startNode, i, j),
                'isEnd': isTargetNode(endNode, i, j),
                'isWall': isFoundIn(i, j, walls),
                'isWeight': isFoundIn(i, j, weights),
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
    const [addingWeights, setAddingWeights] = useState(false);
    

    const startAddingWeights = (event) => {
        if(event.key == 'w'){
            setAddingWeights(true);
            console.log('A5eram')
        }
    }

    const finishAddingWeights = (event) => {
        if(event.key == 'w')
            setAddingWeights(false);
    }

    useEffect(() => {
        document.addEventListener("keydown", startAddingWeights);
        document.addEventListener("keyup", finishAddingWeights);
    }, []);

    return (
        <div className='flex w-full'>
            <div className='m-auto flex-col w-full' >
                { generateGridUI(grid, animate) }
            </div>
        </div>
    )
}

export default Grid;