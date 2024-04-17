
class PathFinderStrategy 
{
    constructor(){}
    visualizePath(_rows, _cols, _walls, _startNode, _endNode) {}
}

class PathFinderContext 
{
    constructor(strategy, setVisitedNodes, setPath, isInstantVis, speed)
    {
        this.strategy = strategy;
        this.isInstantVis = isInstantVis;
        this.setPath = setPath;
        this.setVisitedNodes = setVisitedNodes;
        this.speed = speed;
    }

    findPath(rows, cols, walls, startNode, endNode)
    {
        let { visitedInOrder, pathInOrder } = this.strategy.visualizePath(rows, cols, walls, startNode, endNode);
        pathInOrder = this.getPath(startNode, endNode, pathInOrder);
        this.setVisitedNodes([]);
        this.setPath([]);
        if(this.isInstantVis)
        {
            this.instantVisualization(visitedInOrder, pathInOrder);
        }
        else{
            this.normalVisualization(visitedInOrder, pathInOrder);
        }

        //to be able to update the locking mechanism in the grid at the PathFinder component
        return pathInOrder.length + visitedInOrder.length;

    }

    getPath = (startNode, endNode, path) => {
        let pathOrder = [];
        while(path[JSON.stringify(endNode)])
        {
            endNode = path[JSON.stringify(endNode)];
            if(JSON.stringify(endNode) == JSON.stringify(startNode)) break;
            pathOrder = [endNode, ...pathOrder];
        }
        return pathOrder;
    };
    

    normalVisualization = ( visitedInOrder, pathInOrder ) => {

        for(let i = 0; i < visitedInOrder.length; ++i)
        {
            setTimeout(() => {
                this.setVisitedNodes(prev => [...prev, JSON.stringify(visitedInOrder[i]) ]);
            }, this.speed*i);
        }
    
        for(let i = 0; i < pathInOrder.length; ++i)
        {
            setTimeout(() => {
                this.setPath(prev => [...prev, JSON.stringify(pathInOrder[i]) ]);
            }, this.speed*(i+visitedInOrder.length));
        }
    }
    
    instantVisualization = ( visitedInOrder, pathInOrder ) => {
        this.setVisitedNodes( visitedInOrder.map((v) => JSON.stringify(v) ) );
        this.setPath( pathInOrder.map((v) => JSON.stringify(v) ) );
    }
}

export { PathFinderContext, PathFinderStrategy };
