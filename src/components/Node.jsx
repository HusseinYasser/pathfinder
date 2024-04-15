

const Node = ({ row, col, start, end, wall, onMouseDown, onMouseEnter, onMouseUp }) => {

    let nodeColor = start ? 'bg-red-500' : 'bg-white';
    nodeColor = end ? 'bg-green-500' : nodeColor;
    nodeColor = wall ? 'bg-blue-700' : nodeColor;

  return (
    <div className = {`w-7 h-6 border border-solid border-blue-200 ${nodeColor}`} 
        onMouseDown={(ev) => { ev.preventDefault(); onMouseDown(row, col); }}
        onMouseEnter={(ev) => {ev.preventDefault(); onMouseEnter(row, col);}}
        onMouseUp={(ev) => {ev.preventDefault(); onMouseUp();}}
    />
  )
}

export default Node