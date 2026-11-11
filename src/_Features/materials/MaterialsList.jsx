import React from 'react';
import materials from "./MaterialData.js";
import MaterialsTable from "./MaterialsTable.jsx";

function MaterialsList() {
    return (
        <>
            <h1>
                רשימת חומרים
            </h1>
            {
            /*
            קליטת נתוני החומרים מהקובץ הכללי
            כפתור בחירה בין שתי תצורות תצוגה:
            טבלה - הנתונים מוצגים בטבלה, שורה עבור על פריט
            גריד - הנתונים מוצגים כגלריה, כל פריט יהיה כותרת של שם ומתחת כמות
            התוכנה עולה עם תצורת התצוגה שנבחרה בפעם הקודמת
            ברירת המחדל היא הטבלה
            להוסיף עיצוב לשתי התצוגות
            */
            }
            <MaterialsTable mData={materials} />
        </>
    );
}

export default MaterialsList;