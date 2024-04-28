import { isFoundIn } from '../utils/utils';
import { PathFinderStrategy }  from './pathFinderStrategy';

class DFS extends PathFinderStrategy
{
    dirX = [1, -1, 0, 0];
    dirY = [0, 0, 1, -1];

    isValid(i, j, rows, cols) {
        return i >= 0 && i < rows && j >= 0 && j < cols;
    }

    dfs(currNode, rows, cols, endNode, vis, visitedInOrder, pathInOrder, walls)
    {
        vis[JSON.stringify(currNode)] = true;
        visitedInOrder.push(currNode);
        if(JSON.stringify(visitedInOrder[visitedInOrder.length-1]) == JSON.stringify(endNode))
            return;
        this.dirX.forEach((val, idx) => {
            let newX = currNode.row + val;
            let newY = currNode.col + this.dirY[idx];
            let newNode = {'row': newX, 'col': newY};
            if(this.isValid(newX, newY, rows, cols) && !Object.prototype.hasOwnProperty.call(vis, JSON.stringify(newNode)) 
                && !isFoundIn(newX, newY, walls))
            {
                if(JSON.stringify(visitedInOrder[visitedInOrder.length-1]) == JSON.stringify(endNode))
                    return;
                //new node has to be added
                this.dfs(newNode, rows, cols, endNode, vis, visitedInOrder, pathInOrder, walls)
                pathInOrder[JSON.stringify(newNode)] = currNode;
            }
        });
    }

    visualizePath(rows, cols, walls, startNode, endNode)
    {
        let visitedInOrder = [];
        let pathInOrder = {};
        let vis = {};
        this.dfs(startNode, rows, cols, endNode, vis, visitedInOrder, pathInOrder, walls)

        return { visitedInOrder, pathInOrder };

    }
}

export { DFS };