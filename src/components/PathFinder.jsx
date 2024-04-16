import { useState } from 'react';
import Grid from './Grid';
import Navbar from './Navbar';
import bfs from '../algorithms/bfs';  
import { visualizePath, getPath, instantPath } from '../utils/path_functions';

const PathFinder = () => {
    
    const [walls, setWalls] = useState(new Set());
    const [visitedNodes, setVisitedNodes] = useState([]);
    const [path, setPath] = useState([]); 
    const [appliedFinder, setAppliedFinder] = useState(false);
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

    const dragTerminalNodes = ( newNode, isStartNode ) => {
        isStartNode? setStartNode(newNode) : setEndNode(newNode);
        
        //update the path instantly
        if(appliedFinder)
            find_path(true);
    }

    const find_path = ( updating ) => {
        let { visitedInOrder, pathInOrder } = bfs(30, 45, walls, startNode, endNode);
        pathInOrder = getPath(startNode, endNode, pathInOrder);
        setLockGrid(true);
        setVisitedNodes([]);
        setPath([]);
        if(updating)
        {
            instantPath(visitedInOrder, pathInOrder, setVisitedNodes, setPath);
            setLockGrid(false);
        }
        else{
            setAppliedFinder(true);
            visualizePath(visitedInOrder, pathInOrder, setVisitedNodes, setPath, setLockGrid);
            setTimeout(() => setLockGrid(false), (pathInOrder.length  + visitedInOrder.length) * 50);
        }
    }

    
  return (
    <>
        <Navbar visualize={() => find_path(false)} />
        <Grid walls = {walls} setWalls = {setWalls} 
            startNode={startNode} endNode={endNode} setStartNode={(nwNode) => {dragTerminalNodes(nwNode, true)}} setEndNode={(nwNdode) => {dragTerminalNodes(nwNdode, false)}}
            visitedNodes = {new Set(visitedNodes)}
            path = {new Set(path)}
            locked = {lockGrid} />
    </>
  )
}

export default PathFinder;