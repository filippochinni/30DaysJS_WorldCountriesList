/* DEFINIZIONE DI ELEMENTI */

const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];


const header = document.querySelector("header");

const subtitle = document.querySelector("#subtitle");
subtitle.firstElementChild.textContent = `${countries.length}`;


const inputDiv = document.querySelector("#inputDiv");

const searchBar = document.querySelector("#searchBar");

const bottoneStringaIniziale = document.querySelector("#bottoneStringaIniziale");
const bottoneSottoStringa = document.querySelector("#bottoneSottoStringa");
const bottoneSorting = document.querySelector("#bottoneSorting");

const statoSwitch = {
    'STRINGA INZIALE': true,
    'SOTTOSTRINGA': false,
    'A-Z': false,
};

const searchButton = document.querySelector("#searchButton");
const searchImage = document.createElement("img");
searchImage.id = "searchImage";
searchImage.src = "./images/search-Button.png";
searchButton.appendChild(searchImage);


const resultInfo = document.querySelector("#resultInfo");


const outputDiv = document.querySelector("#outputDiv");




/* FUNZIONI */

function creaCountryBox(reverse=false, countriesArray=countries) {
    outputDiv.innerHTML = "";

    for(const country of (reverse ? [...countriesArray].reverse() : countriesArray)) {
        const countryP = document.createElement("p");
        countryP.classList.add("countryP");
        countryP.textContent = country.toUpperCase();
        outputDiv.appendChild(countryP);
    }
}

function paesiStringaIniziale(stringaIniziale, reverse=false, countriesArray=countries) {
    let resArr = countriesArray.filter(elem => elem.toLowerCase().startsWith(stringaIniziale.toLowerCase()));
    if(reverse)     resArr.reverse();

    resultInfo.innerHTML = resultInfo.innerHTML = `I Paesi che iniziano con <span id="stringaCercata">${stringaIniziale}</span> sono <span id="numeroOccorrenze">${resArr.length ? resArr.length : 0}</span>`;

    console.log(resArr);      //TESTING
    creaCountryBox(undefined, resArr);
}

function paesiSottoStringa(sottoStringa, reverse=false, countriesArray=countries) {
    let resArr = countriesArray.filter(elem => elem.toLowerCase().includes(sottoStringa.toLowerCase()));
    if(reverse)     resArr.reverse();

    resultInfo.innerHTML = resultInfo.innerHTML = `I Paesi che contengono <span id="stringaCercata">${sottoStringa}</span> sono <span id="numeroOccorrenze">${resArr.length ? resArr.length : 0}</span>`;

    console.log(resArr);      //TESTING
    creaCountryBox(undefined, resArr);
}

function attivaOpzione(opzione) {
    statoSwitch[opzione] = !statoSwitch[opzione];

    switch(opzione) {
        case "STRINGA INZIALE":
            bottoneStringaIniziale.classList.toggle("active", statoSwitch[opzione]);
            break;
        case "SOTTOSTRINGA":
            bottoneSottoStringa.classList.toggle("active", statoSwitch[opzione]);
            break;
        case "A-Z":
            bottoneSorting.classList.toggle("active", statoSwitch[opzione]);
            break;
        default:
            console.error("Errore Inaspettato");
    }

    switch(true) {
        case (opzione === "STRINGA INZIALE" && statoSwitch[opzione]):
            statoSwitch["SOTTOSTRINGA"] = false;
            bottoneSottoStringa.classList.toggle("active", false);
            funzioneMaster();
            break;
        case (opzione === 'SOTTOSTRINGA' && statoSwitch[opzione]):
            statoSwitch["STRINGA INZIALE"] = false;
            bottoneStringaIniziale.classList.toggle("active", false);
            funzioneMaster();
            break;
        case (opzione === 'A-Z' && statoSwitch[opzione]):
            funzioneMaster();
            break;
        case (opzione === 'A-Z' && !statoSwitch[opzione]):
            funzioneMaster();
            break;
        default:
            creaCountryBox();
    }
}

function funzioneMaster() {
    const stringaCercata = document.querySelector("#searchBar").value;

    const sortStatus = statoSwitch["A-Z"];

    if(!stringaCercata) {
        resultInfo.textContent = "";
        //alert("Inserire qualcosa nella Barra di Ricerca per cercare!");
        creaCountryBox(sortStatus);
        return;
    }

    if(statoSwitch["STRINGA INZIALE"]) {
        paesiStringaIniziale(stringaCercata, sortStatus);
    }
    else if(statoSwitch["SOTTOSTRINGA"]) {
        paesiSottoStringa(stringaCercata, sortStatus);
    }
}




/* ESECUZIONE */

bottoneStringaIniziale.classList.toggle("active", true);

searchBar.addEventListener("input", funzioneMaster);

bottoneStringaIniziale.addEventListener("click", () => { attivaOpzione(bottoneStringaIniziale.textContent) });
bottoneSottoStringa.addEventListener("click", () => { attivaOpzione(bottoneSottoStringa.textContent) });
bottoneSorting.addEventListener("click", () => { attivaOpzione(bottoneSorting.textContent) });

creaCountryBox(false, countries);






  