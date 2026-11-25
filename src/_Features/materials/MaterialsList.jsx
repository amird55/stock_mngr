import React,{useState} from 'react';
import materials from "./MaterialData.js";
import MaterialsTable from "./MaterialsTable.jsx";
import MaterialsGrid from "./MaterialsGrid.jsx";
import ViewModeChooser from "./ViewModeChooser.jsx";

function MaterialsList() {
    let initVal=localStorage.getItem('viewMode');
    initVal=initVal? JSON.parse(initVal):true;
    const [mData,setMData]=useState(materials);
    const [isTableView, setIsTableView] = useState(initVal);
    const ToggleView = () => {
        localStorage.setItem('viewMode', JSON.stringify(!isTableView));
        setIsTableView(!isTableView);
    }
    
    const deleteMaterial = (row)=>{
        let newState=[...mData]
        newState.splice(row,1);
        setMData(newState);
    }
    return (
        <>
            <h1>
                רשימת חומרים
            </h1>
            <ViewModeChooser 
                isTableView={isTableView}
                ToggleFunc={ToggleView}
                />
            {!isTableView && <MaterialsGrid mData={mData}  deleteFunc={deleteMaterial} />}
            { isTableView && <MaterialsTable mData={mData} deleteFunc={deleteMaterial} />}
        </>
    );
}

export default MaterialsList;