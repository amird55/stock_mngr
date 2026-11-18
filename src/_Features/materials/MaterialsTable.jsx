import React from 'react';
import style from "./MaterialsTable.module.css"

function MaterialsTable({mData}) {
    return (
        <table className={style.materials_table}>
            <thead>
            <tr>
                <th>שם</th>
                <th>כמות</th>
            </tr>
            </thead>
            <tbody>
            {mData.map((item, index) => (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.Qty}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default MaterialsTable;