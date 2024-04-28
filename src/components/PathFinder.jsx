import { useState, useEffect } from 'react';
import Grid from './Grid';
import Navbar from './Navbar'; 
import { PathFinderContext } from '../algorithms/pathFinderStrategy';
import { BFS } from '../algorithms/bfs';
import { DFS } from '../algorithms/dfs';
import { BiDirectionalSwarm } from '../algorithms/bidirectional-swarm';
import { mapSpeed } from '../utils/utils';  
import InformationBanner from './InformationBanner';

const PathFinder = () => {
    
    const [walls, setWalls] = useState(new Set());
    const [weights, setWeights] = useState(new Set());
    const [visitedNodes, setVisitedNodes] = useState([]);
    const [path, setPath] = useState([]); 
    const [appliedFinder, setAppliedFinder] = useState(false);
    const[speed, setSpeed] = useState('Fast');
    const [algo, setAlgo] = useState('');

    //to lock the behavior of playing woth the grid while generating the paths
    const [lockGrid, setLockGrid] = useState(false);

    const [startNode, setStartNode] = useState({
        'row': 10, 
        'col': 5
    });

    const [endNode, setEndNode] = useState({
        'row': 10, 
        'col': 35
    });

    useEffect(() => {
        // This effect runs after startNode or endNode has been updated so we update the path instantly
        if (visitedNodes.length > 0) {
            visualize(true);
        }
      }, [startNode, endNode]);
    
    const dragTerminalNodes = ( newNode, isStartNode ) => {
        isStartNode? setStartNode(newNode) : setEndNode(newNode);
    }

    const visualize = ( updating ) => {
        const pathFinder = new PathFinderContext(eval(`new ${algo}()`), setVisitedNodes, setPath, updating, mapSpeed(speed));
        const delayTime = pathFinder.findPath(27, 50, walls, startNode, endNode);
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
        setWeights(new Set());
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
        speed={speed} setSpeed = {setSpeed} setAlgo={setAlgo} algo={algo} />
        <InformationBanner />
        <Grid walls = {walls} setWalls = {setWalls} 
            weights = {weights} setWeights = {setWeights}
            startNode={startNode} endNode={endNode} setStartNode={(nwNode) => {dragTerminalNodes(nwNode, true)}} setEndNode={(nwNdode) => {dragTerminalNodes(nwNdode, false)}}
            visitedNodes = {new Set(visitedNodes)}
            path = {new Set(path)}
            locked = {lockGrid}
            animate={appliedFinder} />
    </>
  )
}

export default PathFinder;