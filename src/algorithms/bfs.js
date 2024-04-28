import { isFoundIn } from '../utils/utils';
import { PathFinderStrategy }  from './pathFinderStrategy';

class BFS extends PathFinderStrategy
{
    dirX = [-1, 1, 0, 0];
    dirY = [0, 0, -1, 1];

    constructor() { 
        super(); 
    }

    isValid(i, j, rows, cols) {
        return i >= 0 && i < rows && j >= 0 && j < cols;
    }

    visualizePath(rows, cols, walls, startNode, endNode) {
        let dis = {};
        dis[JSON.stringify(startNode)] = 0;
        let queue = [];
        queue.push(startNode);
        let visitedInOrder = [];
        let pathInOrder = {};
        while(queue.length > 0)
        {
            let currNode = queue.shift();
            //this node is visited here
            visitedInOrder.push(currNode);
    
            if(JSON.stringify(currNode) == JSON.stringify(endNode))
                break;
    
            this.dirX.forEach((val, idx) => {
                let newX = currNode.row + val;
                let newY = currNode.col + this.dirY[idx];
                let newNode = {'row': newX, 'col': newY};
                if(this.isValid(newX, newY, rows, cols) && !Object.prototype.hasOwnProperty.call(dis, JSON.stringify(newNode)) 
            && !isFoundIn(newX, newY, walls))
                {
                    //new node has to be added
                    queue.push(newNode);
                    dis[JSON.stringify(newNode)] = dis[currNode] + 1;
                    pathInOrder[JSON.stringify(newNode)] = currNode;
                }
            })
        }
        return { visitedInOrder, pathInOrder };
    }
}

export { BFS };