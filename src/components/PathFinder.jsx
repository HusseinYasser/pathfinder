import { useState } from 'react';
import Grid from './Grid';
import Navbar from './Navbar'; 
import { PathFinderContext } from '../algorithms/pathFinderStrategy';
import { BFS } from '../algorithms/bfs';
import { mapSpeed } from '../utils/utils';  

const PathFinder = () => {
    
    const [walls, setWalls] = useState(new Set());
    const [visitedNodes, setVisitedNodes] = useState([]);
    const [path, setPath] = useState([]); 
    const [appliedFinder, setAppliedFinder] = useState(false);
    const[speed, setSpeed] = useState('Fast');

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
        console.log('MOVING ' + appliedFinder );
        //update the path instantly
        if(visitedNodes.length)
            visualize(true);
    }

    const visualize = ( updating ) => {
        const pathFinder = new PathFinderContext(new BFS(), setVisitedNodes, setPath, updating, mapSpeed(speed));
        const delayTime = pathFinder.findPath(30, 45, walls, startNode, endNode);
        if(!updating) {
            setAppliedFinder(true);
            setLockGrid(true);
            setTimeout(() => setLockGrid(false), delayTime * mapSpeed(speed));
            setTimeout(() => setAppliedFinder(false), delayTime * mapSpeed(speed))
        }
    }

    const clearPath = () => {
        setPath([]);
        setVisitedNodes([]);
    }

    const clearWalls = () => {
        setWalls(new Set());
    }

    const clearBoard = () => {
        clearPath();
        clearWalls();
        setStartNode({
            'row': 10, 
            'col': 5
        });
        setEndNode({
            'row': 10, 
            'col': 40
        });
    }

    
  return (
    <>
        <Navbar visualize={() => visualize(false)} findingPath={appliedFinder} clearBoard = {clearBoard} clearPath = {clearPath} clearWalls = {clearWalls}
        speed={speed} setSpeed = {setSpeed} />
        <Grid walls = {walls} setWalls = {setWalls} 
            startNode={startNode} endNode={endNode} setStartNode={(nwNode) => {dragTerminalNodes(nwNode, true)}} setEndNode={(nwNdode) => {dragTerminalNodes(nwNdode, false)}}
            visitedNodes = {new Set(visitedNodes)}
            path = {new Set(path)}
            locked = {lockGrid} />
    </>
  )
}

export default PathFinder;