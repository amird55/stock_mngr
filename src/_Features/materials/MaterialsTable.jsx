import React from 'react';
import style from "./MaterialsTable.module.css"
import {deleteMaterial} from "./MaterialApi.js";

function MaterialsTable({mData}) {
    return (
        <table className={style.materials_table}>
            <thead>
            <tr>
                <th>שם</th>
                <th>כמות</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {mData.map((item, index) => (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.Qty}</td>
                    <td>
                        <button onClick={() => {deleteMaterial(index)}}>
                            מחיקה
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default MaterialsTable;