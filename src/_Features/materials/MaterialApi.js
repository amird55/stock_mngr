import materials from "./MaterialData.js";

function deleteMaterial(row){
    materials.splice(row,1);
    localStorage.setItem('materialsDataList', JSON.stringify(materials));

}

export {
    deleteMaterial,
}

