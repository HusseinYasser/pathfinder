

import { useState } from 'react';

import Grid from './Grid';

import Navbar from './Navbar';

import bfs from '../algorithms/bfs';   

const PathFinder = () => {
    
    const [walls, setWalls] = useState(new Set());
    const [visitedNodes, setVisitedNodes] = useState([]);
    const [startNode, setStartNode] = useState({
        'row': 10, 
        'col': 5
    });

    const [endNode, setEndNode] = useState({
        'row': 10, 
        'col': 40
    });

    const visualize = () => {
        let visitedInOrder = bfs(30, 45, walls, startNode, endNode);
        for(let i = 0; i < visitedInOrder.length; ++i)
        {
            setTimeout(() => {
                setVisitedNodes(prev => [...prev, JSON.stringify(visitedInOrder[i]) ]);
            }, 50*i);
        }

    }
    
  return (
    <>
        <Navbar visualize={visualize} />
        <Grid walls = {walls} setWalls = {setWalls} 
            startNode={startNode} endNode={endNode} setStartNode={setStartNode} setEndNode={setEndNode}
            visitedNodes = {new Set(visitedNodes)} />
    </>
  )
}

export default PathFinder