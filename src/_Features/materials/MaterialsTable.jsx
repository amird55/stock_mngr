import React from 'react';
import style from "./MaterialsTable.module.css"
import { FaTrash } from "react-icons/fa";

function MaterialsTable({mData,deleteFunc}) {
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
                        <FaTrash onClick={() => {deleteFunc(index)}}/>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default MaterialsTable;