import Node from '../components/Node';

const isTargetNode = (targetNode, i, j) => {
    return i == targetNode.row && j == targetNode.col;
}

const isWall = (i, j, walls) => {
    return walls.has(JSON.stringify({i, j}));
}

const isVisited = (i, j, visited) => {
    return visited.has(JSON.stringify({'row': i, 'col': j}));
}

const generateGridUI = ((grid, animate) => {
    /* Creating the Grid UI */
    let gridUI = []
    for(let i = 0; i < 28; ++i)
    {
        let row = [];
        for(let j = 0; j < 50; ++j)
        {
            let node = grid[i][j];
            row.push(<Node 
                row={node.row}
                col={node.col}
                key={`${i}-${j}`}
                start={node.isStart}
                end={node.isEnd}
                wall={node.isWall}
                onMouseDown={node.onMouseDown}
                onMouseEnter={node.onMouseEnter}
                onMouseUp={node.onMouseUp}
                visited={node.isVisited}
                isPath={node.isPath}
                animate = {animate}
            />);
        }
        gridUI.push(<div className='flex w-full' key = {i}>
            {row}
        </div>
        );
    }
    return gridUI;
});

const mapSpeed = (speed) => {
    if(speed == 'Slow') return 100;
    else if(speed == 'Medium') return 50;
    else return 20;
}


export { generateGridUI, isWall, isTargetNode, isVisited, mapSpeed };