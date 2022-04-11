const circuits = [
    {
        circuitId: "bahrain",
        flag: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/bahrain-flag.png.transform/1col/image.png",
        photo: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit.png.transform/5col/image.png"
    },
    {
        circuitId: "jeddah",
        flag: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/saudi-arabia-flag.png.transform/1col/image.png",
        photo: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Saudi_Arabia_Circuit.png.transform/5col/image.png"
    },
    {
        circuitId: "albert_park",
        flag: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/australia-flag.png.transform/1col/image.png",
        photo: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Australia_Circuit.png.transform/5col/image.png"
    },
    {
        circuitId: "imola",
        flag: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/italy-flag.png.transform/1col/image.png",
        photo: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Emilia_Romagna_Circuit.png.transform/5col/image.png"
    },
    {
        circuitId: "miami",
        flag: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/united-states-of-america-flag.png.transform/1col/image.png",
        photo: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Miami_Circuit.png.transform/5col/image.png"
    },
    {
        circuitId: "catalunya",
        flag: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/spain-flag.png.transform/1col/image.png",
        photo: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Spain_Circuit.png.transform/5col/image.png"
    },
    {
        circuitId: "monaco",
        flag: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/monaco-flag.png.transform/1col/image.png",
        photo: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monoco_Circuit.png.transform/5col/image.png"
    },
    {
        circuitId: "BAK",
        flag: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/azerbaijan-flag.png.transform/1col/image.png",
        photo: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Baku_Circuit.png.transform/5col/image.png"
    },
    {
        circuitId: "villeneuve",
        flag: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/canada-flag.png.transform/1col/image.png",
        photo: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Canada_Circuit.png.transform/5col/image.png"
    },
    {
        circuitId: "silverstone",
        flag: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/united-kingdom-flag.png.transform/1col/image.png",
        photo: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit.png.transform/5col/image.png"
    },
    {
        circuitId: "red_bull_ring",
        flag: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/austria-flag.png.transform/1col/image.png",
        photo: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Austria_Circuit.png.transform/5col/image.png"
    },
    {
        circuitId: "ricard",
        flag: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/france-flag.png.transform/1col/image.png",
        photo: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/France_Circuit.png.transform/5col/image.png"
    },
    {
        circuitId: "hungaroring",
        flag: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/hungary-flag.png.transform/1col/image.png",
        photo: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Hungary_Circuit.png.transform/5col/image.png"
    },
    {
        circuitId: "spa",
        flag: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/belgium-flag.png.transform/1col/image.png",
        photo: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Belgium_Circuit.png.transform/5col/image.png"
    },
    {
        circuitId: "zandvoort",
        flag: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/netherlands-flag.png.transform/1col/image.png",
        photo: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Netherlands_Circuit.png.transform/5col/image.png"
    },
    {
        circuitId: "monza",
        flag: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/italy-flag.png.transform/1col/image.png",
        photo: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Italy_Circuit.png.transform/5col/image.png"
    },
    {
        circuitId: "marina_bay",
        flag: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/singapore-flag.png.transform/1col/image.png",
        photo: "https://www.formula1.com/content/dam/fom-website/manual/races/Singapore/singapore_track.png.transform/5col/image.png"
    },
    {
        circuitId: "suzuka",
        flag: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/japan-flag.png.transform/1col/image.png",
        photo: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Japan_Circuit.png.transform/5col/image.png"
    },
    {
        circuitId: "americas",
        flag: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/united-states-of-america-flag.png.transform/1col/image.png",
        photo: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/USA_Circuit.png.transform/5col/image.png"
    },
    {
        circuitId: "rodriguez",
        flag: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/mexico-flag.png.transform/1col/image.png",
        photo: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Mexico_Circuit.png.transform/5col/image.png"
    },
    {
        circuitId: "interlagos",
        flag: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/brazil-flag.png.transform/1col/image.png",
        photo: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Brazil_Circuit.png.transform/5col/image.png"
    },
    {
        circuitId: "yas_marina",
        flag: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/united-arab-emirates-flag.png.transform/1col/image.png",
        photo: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Abu_Dhabi_Circuit.png.transform/5col/image.png"
    },
];

export default circuits;