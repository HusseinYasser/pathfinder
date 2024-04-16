

// eslint-disable-next-line react/prop-types
const Node = ({ row, col, start, end, wall, onMouseDown, onMouseEnter, onMouseUp, visited, isPath }) => {

    let nodeColor = visited? 'bg-orange-500' : 'bg-white';
    nodeColor = wall? 'bg-blue-500' : nodeColor;
    nodeColor = end ? 'bg-green-500' : nodeColor;
    nodeColor = start ? 'bg-red-700' : nodeColor;
    nodeColor = isPath ? 'bg-yellow-500' : nodeColor;

  return (
    <div className = {`w-7 h-6 border border-solid border-blue-200 ${nodeColor}`} 
        onMouseDown={(ev) => { ev.preventDefault(); onMouseDown(row, col); }}
        onMouseEnter={(ev) => {ev.preventDefault(); onMouseEnter(row, col);}}
        onMouseUp={(ev) => {ev.preventDefault(); onMouseUp();}}
    />
  )
}

export default Node