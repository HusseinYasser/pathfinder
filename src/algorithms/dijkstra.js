import { isFoundIn } from '../utils/utils';
import { PathFinderStrategy } from './pathFinderStrategy';
import { PriorityQueue } from './priority_queue';

class Dijkstra extends PathFinderStrategy {
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
    pq.enqueue({ node: startNode, parent: undefined }, 0);
    let pathInOrder = {};
    let visitedInOrder = [];
    let dis = {};

    while (pq.size()) {
      let val = pq.dequeue();
      let currNode = val.node.node;
      if (Object.prototype.hasOwnProperty.call(dis, JSON.stringify(currNode))) continue;

      dis[JSON.stringify(currNode)] = val.priority;
      pathInOrder[JSON.stringify(currNode)] = val.node.parent;
      visitedInOrder.push(currNode);

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
          let edgeCost = isFoundIn(newX, newY, weights) ? 25 : 1;
          pq.enqueue({ node: newNode, parent: currNode }, dis[JSON.stringify(currNode)] + edgeCost);
        }
      });
    }

    return { visitedInOrder, pathInOrder };
  }
}

export { Dijkstra };
