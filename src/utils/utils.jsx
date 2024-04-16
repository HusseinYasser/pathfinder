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

const generateGridUI = ((grid) => {
    /* Creating the Grid UI */
    let gridUI = []
    for(let i = 0; i < 30; ++i)
    {
        let row = [];
        for(let j = 0; j < 45; ++j)
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
            />);
        }
        gridUI.push(<div className='flex' key = {i}>
            {row}
        </div>
        );
    }
    return gridUI;
});

const getPath = (startNode, endNode, path) => {
    let pathOrder = [];
    while(path[JSON.stringify(endNode)])
    {
        endNode = path[JSON.stringify(endNode)];
        if(JSON.stringify(endNode) == JSON.stringify(startNode)) break;
        pathOrder = [endNode, ...pathOrder];
    }
    return pathOrder;
};

export { generateGridUI, isWall, isTargetNode, isVisited, getPath };