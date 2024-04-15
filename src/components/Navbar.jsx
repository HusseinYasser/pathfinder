

const Navbar = ({visualize}) => {
  return (
    <>
        <div className="flex">
            <div>
                PathFinder Visualizer
            </div>

            <button onClick={visualize}>
                Start visualizer
            </button>
        </div>
        <div>

        </div>
    </>
  )
}

export default Navbar