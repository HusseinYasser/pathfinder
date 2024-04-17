

const Navbar = ({visualize}) => {
  return (
    <div className = 'flex space-x-20 bg-primary text-poppins text-white h-16 items-center font-semibold cursor-pointer'>
        <div className="text-lg ml-8 font-bold hover:text-secondary">
          Pathfinding Visualizer
        </div>

        <div className="hover:text-secondary">
          Algorithms
        </div>

        <div className="hover:text-secondary">
          Mazes & Patterns
        </div>

        <button className="bg-secondary py-2 px-4 rounded font-normal">
          Visualize BFS
        </button>

        <div className="hover:text-secondary">
          Clear Board
        </div>

        <div className="hover:text-secondary">
          Clear Walls & Weights
        </div>

        <div className="hover:text-secondary">
          Clear Path
        </div>

        <div className="hover:text-secondary">
          Speed
        </div>

    </div>
  )
}

export default Navbar