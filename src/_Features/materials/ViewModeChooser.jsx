import React from 'react';

function ViewModeChooser({isTableView,ToggleFunc}) {
    return (
        <>
            { isTableView && <button onClick={ToggleFunc}>הצג בגלריה</button> }
            {!isTableView && <button onClick={ToggleFunc}>הצג בטבלה</button> }
        </>
    );
}

export default ViewModeChooser;