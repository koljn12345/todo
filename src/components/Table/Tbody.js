import React from 'react';
import TbodyRow from './TbodyRow';

// import { FixedSizeList } from 'react-window';
// import AutoSizer from "react-virtualized-auto-sizer";


//!!!!!!   Virtualized !!!!!!!!!!
// const Row = ({ data,index, style }) => (
//   <tr style={style}>
//      <TbodyRow key={data.data.data[index].id} data={data.data.data[index]} activeColumns={data.activeColumns} />
//   </tr>
// );    

function Tbody(props) {
//    const items = props.data.data
    return (
                // <FixedSizeList
                //     height={500}
                //     width={1000}
                //     itemSize={50}
                //     itemCount={items.length}
                //     itemData={props}
                // >
                //     {Row}
                // </FixedSizeList>
        <tbody>
            {props.data.data.map((el, indx) => (
                <TbodyRow key={el.id} data={el} activeColumns={props.activeColumns} />
            ))}
        </tbody>
    )
}

export default Tbody;