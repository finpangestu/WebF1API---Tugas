import "../component/constructor-list.js";
import constructors from "./constructors.js";
import axios from 'axios';

const constructorListElement = document.querySelector("#constructorList");
    
const viewToConstructor = () => {
    const renderConstructor = {
        method: 'get',
        url: 'http://ergast.com/api/f1/2022/constructors.json',
        headers: { }
    };

    axios(renderConstructor)
    .then(response => response.data)
    .then(results => {
        const resultsFilter = results.MRData.ConstructorTable.Constructors;
        constructorListElement.innerHTML = "";
        resultsFilter.forEach(data => {
            const logo = data.constructorId;
            const name = data.name;
            
            let logoURL = "";
            constructors.find(id => {
                if(id.constructorId.includes(logo)){
                    logoURL = id.logo;
                }
            });

            const constructorElement = document.createElement("div");
            constructorElement.setAttribute("class", "constructor-preview-item");
            constructorElement.innerHTML = `
                <div class="constructor-info">
                    <img src="${logoURL}" alt="Constructor Logo">
                    <p>${name}</p>
                </div>`;
            constructorListElement.appendChild(constructorElement);
        });
    })
    .catch(error => {
        console.log(error);
    });
};

export default viewToConstructor;