import React from 'react';

function MaterialsTable({mData}) {
    return (
        <table>
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