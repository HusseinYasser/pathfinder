const dirX = [-1, 1, 0, 0];
const dirY = [0, 0, -1, 1];

const isValid = (i, j, rows, cols) => {
    return i >= 0 && i < rows && j >= 0 && j < cols;
}

const bfs = (rows, cols, walls, startNode, endNode) => {
    let dis = {};
    dis[JSON.stringify(startNode)] = 0;
    let queue = [];
    queue.push(startNode);
    let visitedNodes = [];

    while(queue.length > 0)
    {
        let currNode = queue.shift();
        //this node is visited here
        visitedNodes.push(currNode);

        if(JSON.stringify(currNode) == JSON.stringify(endNode))
            break;

        dirX.forEach((val, idx) => {
            let newX = currNode.row + val;
            let newY = currNode.col + dirY[idx];
            let newNode = {'row': newX, 'col': newY};
            if(isValid(newX, newY, rows, cols) && !Object.prototype.hasOwnProperty.call(dis, JSON.stringify(newNode)) )
            {
                //new node has to be added
                queue.push(newNode);
                dis[JSON.stringify(newNode)] = dis[currNode] + 1;
            }
        })
    }
    return visitedNodes;
};

console.log(bfs(50, 50, {}, {'row': 10, 'col': 10}, {'row': 11, 'col' : 11}));

export default bfs;