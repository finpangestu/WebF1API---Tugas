import "../component/mini-standing.js";
import axios from 'axios';

const driverListElement = document.querySelector("#driverRanking");
const viewToStanding = () => {
    const renderDriver = {
        method: 'get',
        url: 'http://ergast.com/api/f1/2022/driverStandings.json',
        headers: { }
    };

    axios(renderDriver)
    .then(response => response.data)
    .then(results => {
        const resultsFilter = results.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        driverListElement.innerHTML="";
        resultsFilter.forEach(data => {
            const position = data.position;
            const familyName = data.Driver.familyName;
            const givenName = data.Driver.givenName;
            const points = data.points;

            const driverElement = document.createElement("div");
            driverElement.setAttribute("class", "driver-standing");
            driverElement.innerHTML = `
                <div class="grid">
                    <p class="position">${position}</p>
                    <p class="name">${givenName} ${familyName}</p>
                    <p class="point">${points}</p>
                </div>`;
            driverListElement.appendChild(driverElement);
        });
    })
    .catch(error => {
        console.log(error);
    });
};

export default viewToStanding;