

import { useState } from 'react';

import Grid from './Grid';

const PathFinder = () => {
    
    const [walls, setWalls] = useState(new Set());

  return (
    <>
        <Grid walls = {walls} setWalls = {setWalls}/>
    </>
  )
}

export default PathFinder