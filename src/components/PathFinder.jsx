import { useState } from 'react';
import Grid from './Grid';
import Navbar from './Navbar';
import bfs from '../algorithms/bfs';  
import { getPath } from '../utils/utils';

const PathFinder = () => {
    
    const [walls, setWalls] = useState(new Set());
    const [visitedNodes, setVisitedNodes] = useState([]);
    const [path, setPath] = useState([]);

    //to lock the behavior of playing woth the grid while generating the path
    const [lockGrid, setLockGrid] = useState(false);

    const [startNode, setStartNode] = useState({
        'row': 10, 
        'col': 5
    });

    const [endNode, setEndNode] = useState({
        'row': 10, 
        'col': 40
    });

    const visualize = () => {
        let { visitedInOrder, pathInOrder } = bfs(30, 45, walls, startNode, endNode);
        pathInOrder = getPath(startNode, endNode, pathInOrder);
        setLockGrid(true);
        setVisitedNodes([]);
        setPath([]);
        for(let i = 0; i < visitedInOrder.length; ++i)
        {
            setTimeout(() => {
                setVisitedNodes(prev => [...prev, JSON.stringify(visitedInOrder[i]) ]);
            }, 50*i);
        }

        for(let i = 0; i < pathInOrder.length; ++i)
        {
            setTimeout(() => {
                setPath(prev => [...prev, JSON.stringify(pathInOrder[i]) ]);
            }, 50*(i+visitedInOrder.length));
        }
        setTimeout(() => setLockGrid(false), (pathInOrder.length  + visitedInOrder.length) * 50);
    }

    
  return (
    <>
        <Navbar visualize={visualize} />
        <Grid walls = {walls} setWalls = {setWalls} 
            startNode={startNode} endNode={endNode} setStartNode={setStartNode} setEndNode={setEndNode}
            visitedNodes = {new Set(visitedNodes)}
            path = {new Set(path)}
            locked = {lockGrid} />
    </>
  )
}

export default PathFinder;