import React,{useState} from 'react';
import materials from "./MaterialData.js";
import MaterialsTable from "./MaterialsTable.jsx";
import MaterialsGrid from "./MaterialsGrid.jsx";
import ViewModeChooser from "./ViewModeChooser.jsx";

function MaterialsList() {
    const [isTableView, setIsTableView] = useState(true);
    const ToggleView = () => {
        setIsTableView(!isTableView);
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
            {
            /*
            VV  קליטת נתוני החומרים מהקובץ הכללי
            VV כפתור בחירה בין שתי תצורות תצוגה:
            VV טבלה - הנתונים מוצגים בטבלה, שורה עבור על פריט
            VV גריד - הנתונים מוצגים כגלריה, כל פריט יהיה כותרת של שם ומתחת כמות
            התוכנה עולה עם תצורת התצוגה שנבחרה בפעם הקודמת
            VV ברירת המחדל היא הטבלה
            VV להוסיף עיצוב לשתי התצוגות
            */
            }
            {!isTableView && <MaterialsGrid mData={materials}/>}
            { isTableView && <MaterialsTable mData={materials}/>}
        </>
    );
}

export default MaterialsList;