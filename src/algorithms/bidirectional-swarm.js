import { isFoundIn } from '../utils/utils';
import { PathFinderStrategy } from './pathFinderStrategy';

class BiDirectionalSwarm extends PathFinderStrategy {
  dirX = [-1, 1, 0, 0];
  dirY = [0, 0, -1, 1];

  dirX2 = [-1, 1, 0, 0];
  dirY2 = [0, 0, 1, -1];

  constructor() {
    super();
  }

  isValid(i, j, rows, cols) {
    return i >= 0 && i < rows && j >= 0 && j < cols;
  }

  visualizePath(rows, cols, walls, _, startNode, endNode) {
    let queueLeft = [];
    let queueRight = [];
    let dis1 = {};
    let dis2 = {};
    dis1[JSON.stringify(startNode)] = 0;
    dis2[JSON.stringify(endNode)] = 0;

    queueLeft.push(startNode);
    queueRight.push(endNode);

    let visitedInOrder = [];
    let pathInOrderLeft = {};
    let pathInOrderRight = {};
    pathInOrderLeft[JSON.stringify(startNode)] = null;
    pathInOrderRight[JSON.stringify(endNode)] = null;
    let intersection = startNode;

    while (queueLeft.length > 0 && queueRight.length > 0) {
      let currLeft = queueLeft.shift();
      let currRight = queueRight.shift();
      visitedInOrder.push(currLeft);
      visitedInOrder.push(currRight);

      if (Object.prototype.hasOwnProperty.call(dis1, JSON.stringify(currRight))) {
        intersection = currRight;
        break;
      }

      for (let idx = 0; idx < 4; ++idx) {
        this.checkForAddingToQueue(
          currLeft,
          this.dirX[idx],
          this.dirY[idx],
          rows,
          cols,
          walls,
          queueLeft,
          pathInOrderLeft,
          dis1
        );
        this.checkForAddingToQueue(
          currRight,
          this.dirX2[idx],
          this.dirY2[idx],
          rows,
          cols,
          walls,
          queueRight,
          pathInOrderRight,
          dis2
        );
      }
    }
    let pathInOrder = this.mergePaths(pathInOrderLeft, pathInOrderRight, intersection);
    return { visitedInOrder, pathInOrder };
  }

  checkForAddingToQueue(currNode, val, idx, rows, cols, walls, queue, pathInOrder, dis) {
    let newX = currNode.row + val;
    let newY = currNode.col + idx;
    let newNode = { row: newX, col: newY };
    if (
      this.isValid(newX, newY, rows, cols) &&
      !Object.prototype.hasOwnProperty.call(dis, JSON.stringify(newNode)) &&
      !isFoundIn(newX, newY, walls)
    ) {
      //new node has to be added
      queue.push(newNode);
      pathInOrder[JSON.stringify(newNode)] = currNode;
      dis[JSON.stringify(newNode)] = dis[JSON.stringify(currNode)] + 1;
    }
    return newNode;
  }

  mergePaths(pathInOrderLeft, pathInOrderRight, intersectionNode) {
    while (pathInOrderRight[JSON.stringify(intersectionNode)]) {
      let nwIntersection = pathInOrderRight[JSON.stringify(intersectionNode)];
      pathInOrderLeft[JSON.stringify(nwIntersection)] = intersectionNode;
      intersectionNode = nwIntersection;
    }
    return pathInOrderLeft;
  }
}

export { BiDirectionalSwarm };
