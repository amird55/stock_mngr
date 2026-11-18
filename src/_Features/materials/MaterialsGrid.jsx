import React from 'react';
import style  from './MaterialsGrid.module.css' 

function MaterialsGrid({mData}) {
    return (
        <div className={style.materials_grid}>
            {mData.map((item, index) => (
                <div key={index}>
                    <h2>{item.name}</h2>
                    <p>כמות: {item.Qty}</p>
                </div>
            ))}

        </div>
    );
}

export default MaterialsGrid;