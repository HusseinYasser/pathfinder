
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

const visualizePath = ( visitedInOrder, pathInOrder, setVisitedNodes, setPath ) => {

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
}

const instantPath = ( visitedInOrder, pathInOrder, setVisitedNodes, setPath ) => {
    setVisitedNodes( visitedInOrder.map((v) => JSON.stringify(v) ) );
    setPath( pathInOrder.map((v) => JSON.stringify(v) ) );
}

export { visualizePath, getPath, instantPath };