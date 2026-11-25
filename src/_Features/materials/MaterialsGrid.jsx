import React from 'react';
import style  from './MaterialsGrid.module.css'
import {FaTrash} from "react-icons/fa"; 

function MaterialsGrid({mData,deleteFunc}) {
    return (
        <div className={style.materials_grid}>
            {mData.map((item, index) => (
                <div key={index}>
                    <h2>{item.name}</h2>
                    <p>כמות: {item.Qty}</p>
                    <FaTrash className={style.top_left} onClick={() => {deleteFunc(index)}}/>
                </div>
            ))}

        </div>
    );
}

export default MaterialsGrid;