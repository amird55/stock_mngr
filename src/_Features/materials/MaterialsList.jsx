import React,{useState} from 'react';
import materials from "./MaterialData.js";
import MaterialsTable from "./MaterialsTable.jsx";
import MaterialsGrid from "./MaterialsGrid.jsx";

function MaterialsList() {
    const [isTableView, setIsTableView] = useState(true);
    const GridView = () => {
        setIsTableView(false);
    }
    const TableView = () => {
        setIsTableView(true);
    }
    
    return (
        <>
            <h1>
                רשימת חומרים
            </h1>
            <button onClick={GridView}>גלריה</button>
            <button onClick={TableView}>טבלה</button>
            {
            /*
            VV  קליטת נתוני החומרים מהקובץ הכללי
            כפתור בחירה בין שתי תצורות תצוגה:
            טבלה - הנתונים מוצגים בטבלה, שורה עבור על פריט
            גריד - הנתונים מוצגים כגלריה, כל פריט יהיה כותרת של שם ומתחת כמות
            התוכנה עולה עם תצורת התצוגה שנבחרה בפעם הקודמת
            ברירת המחדל היא הטבלה
            VV להוסיף עיצוב לשתי התצוגות
            */
            }
            {!isTableView && <MaterialsGrid mData={materials}/>}
            { isTableView && <MaterialsTable mData={materials}/>}
        </>
    );
}

export default MaterialsList;