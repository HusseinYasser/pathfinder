
# Pathfinder Visualizer
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Algorithms and Data Structures](https://img.shields.io/badge/Algorithms%20&%20Data%20Structures-blue?style=for-the-badge)

<img src='https://bengavrilov.github.io/Path-Finding-Visualizer/slide2pic.png' style='width:400px' alt='Pathfinder Visualizer' />

Pathfinder Visualizer is a tool for visualizing the path between two nodes, namely the start and end nodes. The path can be found using multiple algorithms, and this tool visualizes how each of them works and finds the path from start to end.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Contributing](#contributing)
- [Credits](#credits)

## Installation

```bash
# Get the source code
$ git clone https://github.com/HusseinYasser/pathfinder.git

$ cd pathfinder

$ npm install

$ npm run dev
```

## Features
Visualization of multiple graph pathfinding algorithms.

- **Animation Speed:** The animation speed can be controlled by the user based on their preference.
- **Weighted Graph Algorithms:** Supports weights and weighted graph algorithms.
  - The user can add weights to the grid freely and choose any algorithm they like to visualize.
- **Auto Path Recalculation:** The path is recomputed automatically once the user drags any of the nodes.
  - Whenever the user drags any of the start or end nodes, the path is recomputed automatically for the user to examine the algorithm and the path created.

**Algorithms Supported**
- Breadth-First Search (BFS, unweighted shortest path algorithm)
- Depth-First Search (DFS)
- Dijkstra's Algorithm (weighted shortest path algorithm)
- A* Algorithm (weighted shortest path)
- Greedy Best First Search 
- Bidirectional Swarm Algorithm 

## Contributing 
Feel free to add your ideas, improvements, and suggestions either directly to me or through your own PR.

- Fork the repo to your account.
- Clone the repo to your workspace.
- Create a branch, make changes, commit, and push.
- Make your PR with described changes. :D

## Credits
This project is my own implementation of the Pathfinder Visualizer made by Clement Mihailescu, and I really enjoyed making my own version of it.