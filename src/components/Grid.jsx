import Node from './Node.jsx';

const Grid = () => {

    let grid = [];
    for(let i = 0; i < 30; ++i)
    {
        let row = [];
        for(let j = 9; j < 50; ++j)
        {
            row.push(<Node row={i} col = {j}></Node>)
        }
        grid.push(<div className='flex'>
            {row}
        </div>
        );
    }

  return (
    <div className='flex'>
        <div className='m-auto flex-col'>
            { grid }
        </div>
    </div>
  )
}

export default Grid