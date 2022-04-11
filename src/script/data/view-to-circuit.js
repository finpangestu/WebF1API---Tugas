import circuits from "./circuits";
import "../component/prev-circuit.js";
import axios from 'axios';

const circuitListElement = document.querySelector("#circuitList");

const viewToCircuit = () => {
    const renderCircuit = {
        method: 'get',
        url: 'http://ergast.com/api/f1/2022/circuits.json',
        headers: { }
    };

    axios(renderCircuit)
    .then(response => response.data)
    .then(results => {
        const resultsFilter = results.MRData.CircuitTable.Circuits;
        circuitListElement.innerHTML = "";
        resultsFilter.forEach(data => {
            const name = data.circuitName;
            const country = data.Location.country;
            const flag = data.circuitId; 
            const photo = data.circuitId;

            let flagURL = "";
            circuits.find(id => {
                if(id.circuitId.includes(flag)){
                    flagURL = id.flag;
                }
            });

            let photoURL = "";
            circuits.find(id => {
                if(id.circuitId.includes(photo)){
                    photoURL = id.photo;
                }
            });
            
            const circuitElement = document.createElement("div");
            circuitElement.setAttribute("class", "circuit-list");
            circuitElement.innerHTML = `
                <img src="${photoURL}" class="circuit-img" alt="Circuit Image">
                <div class="circuit-description">
                    <div class="circuit-country">
                        <img src="${flagURL}" class="flag" alt="Flag">
                        <p class="country">${country}</p>
                    </div>
                <div class="row-secondary"></div>
                <p class="circuit-name">${name}</p>
            </div>`;
        circuitListElement.appendChild(circuitElement);
        });
    })
    .catch(error => {
        console.log(error);
    });
};

export default viewToCircuit;