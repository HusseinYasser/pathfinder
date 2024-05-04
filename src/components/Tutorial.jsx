
const Tutorial = () => {

  const buttonStyle = "bg-lightblue  py-2 px-5 rounded font-normal text-black";
  const intro = <>
  <div className = "w-full flex flex-col items-center space-y-4">
    <div className = "text-lightblue text-3xl font-semibold">Welcome the the BallPasser Visualizer</div>
    <div className = "text-darkgray text-xl font-medium"> This tutorial will take you through the website very quickly, Enjoy </div>   

    <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvfwXg_xBEnONjFCZezry3sFsE0IktZuhiQjiH84MuEg&s' />

    <div className = "flex justify-between w-full">
      <button className={buttonStyle}>
        Skip tutorial
      </button>
      <div className = "flex justify-around space-x-2">
        <button className = {buttonStyle}>Previous</button>
        <button className = {buttonStyle}>Next</button>
      </div>
    </div> 
  </div>
  </>;

  return (
    <div className = "p-5 w-1/2 left-1/4 top-1/4 z-20 absolute border-2 border-black bg-white rounded">
      {intro}
    </div>
  )
}

 export default Tutorial;