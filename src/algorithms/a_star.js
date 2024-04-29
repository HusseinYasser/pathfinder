import { PathFinderStrategy } from './pathFinderStrategy';
import { PriorityQueue } from './priority_queue';
import { isFoundIn } from '../utils/utils';

class AStar extends PathFinderStrategy {
  dirX = [-1, 1, 0, 0];
  dirY = [0, 0, -1, 1];

  constructor() {
    super();
  }

  isValid(i, j, rows, cols) {
    return i >= 0 && i < rows && j >= 0 && j < cols;
  }

  visualizePath(rows, cols, walls, weights, startNode, endNode) {
    let pq = new PriorityQueue();

    pq.enqueue({ node: startNode, parent: undefined, pathVal: 0 }, 0);
    let pathInOrder = {};
    let visitedInOrder = [];
    let dis = {};

    while (pq.size() > 0) {
      let curr = pq.dequeue();
      let currNode = curr.node.node;
      let currPathSoFar = curr.node.pathVal;

      if (Object.prototype.hasOwnProperty.call(dis, JSON.stringify(currNode))) continue;

      dis[JSON.stringify(currNode)] = curr.priority;
      visitedInOrder.push(currNode);
      pathInOrder[JSON.stringify(currNode)] = curr.node.parent;

      if (JSON.stringify(currNode) == JSON.stringify(endNode)) {
        break;
      }

      this.dirX.forEach((val, idx) => {
        let newX = currNode.row + val;
        let newY = currNode.col + this.dirY[idx];
        let newNode = { row: newX, col: newY };
        if (
          this.isValid(newX, newY, rows, cols) &&
          !Object.prototype.hasOwnProperty.call(dis, JSON.stringify(newNode)) &&
          !isFoundIn(newX, newY, walls)
        ) {
          pq.enqueue(
            { node: newNode, parent: currNode, pathVal: currPathSoFar + this.getActualCost(newX, newY, weights) },
            this.getTotalCost(newX, newY, weights, endNode)
          );
        }
      });
    }

    return { visitedInOrder, pathInOrder };
  }

  getTotalCost(newX, newY, weights, endNode) {
    let edgeCost = this.getActualCost(newX, newY, weights);
    let heuristicCost = Math.abs(endNode.row - newX) + Math.abs(endNode.col - newY);
    return edgeCost + heuristicCost;
  }

  getActualCost(newX, newY, weights) {
    return isFoundIn(newX, newY, weights) ? 25 : 1;
  }
}

export { AStar };
