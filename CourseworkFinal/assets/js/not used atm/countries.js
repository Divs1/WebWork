﻿var countries = {
    "AD": "Africa",
    "A2": "Egype",
    "AE": "Morocco",
    "AF": "Senegal",
    "AG": "Tunisia",
    "AI": "Indian Ocean",
    "AL": "Maldives",
    "AM": "Mauritius",
    "AN": "Caribbean",
    "AO": "The Bahamas",
    "AQ": "Dominican Republic",
    "AR": "Guadeloupe",
    "AS": "Martinique",
    "AT": "Turks and Caicos",
    "AU": "The Alps",
    "AW": "France - The Alps",
    "AX": "Italy - The Alps",
    "AZ": "Switzerland",
    "BA": "Europe",
    "BB": "France - Europe",
    "BD": "Greece",
    "BE": "Italy - Europe",
    "BF": "Portugal",
    "BG": "Sicily",
    "BH": "Turkey",
    "BI": "North & Central America",
    "BJ": "USA",
    "BL": "Mexico",
    "BM": "South America",
    "BN": "Brazil",
    "BO": "Asia",
    "BQ": "China",
    "BR": "Indonesia",
    "BS": "Japan",
    "BT": "Malaysia",
    "BV": "Thailand",
    "BW": "Spa",
    "BY": "Spa Holidays",
    "BZ": "Golf",
    "CA": "Golf Holidays",
    "CC": "Horse",
    "CD": "Horse Riding",
    "CF": "Horse Riding Holidays",
    "CG": "Tennis",
    "CH": "Tennis Holidays",
    "CI": "Ski",
    "CK": "Ski Holidays",
    "CL": "Scuba",
    "CM": "Scuba Diving",
    "CN": "Scuba Diving Holidays",
    "CO": "Sailing",
    "CR": "Sailing Holidays",
    "CS": "Hike",
    "CT": "Hiking",
    "CU": "Hiking Holidays",
    "CV": "Standard",
    "CX": "Three Star",
    "CY": "Premium",
    "CZ": "Four Star",
    
    // "DD": "Luxury",
    // "DE": "Five Star",
    // "DJ": "Djibouti",
    // "DK": "Denmark",
    // "DM": "Dominica",
    // "DO": "Dominican Republic",
    // "DZ": "Algeria",
    // "EC": "Ecuador",
    // "EE": "Estonia",
    // "EG": "Egypt",
    // "EH": "Western Sahara",
    // "ER": "Eritrea",
    // "ES": "Spain",
    // "ET": "Ethiopia",
    // "FI": "Finland",
    // "FJ": "Fiji",
    // "FK": "Falkland Islands",
    // "FM": "Micronesia",
    // "FO": "Faroe Islands",
    // "FQ": "French Southern and Antarctic Territories",
    // "FR": "France",
    // "FX": "Metropolitan France",
    // "GA": "Gabon",
    // "GB": "United Kingdom",
    // "GD": "Grenada",
    // "GE": "Georgia",
    // "GF": "French Guiana",
    // "GG": "Guernsey",
    // "GH": "Ghana",
    // "GI": "Gibraltar",
    // "GL": "Greenland",
    // "GM": "Gambia",
    // "GN": "Guinea",
    // "GP": "Guadeloupe",
    // "GQ": "Equatorial Guinea",
    // "GR": "Greece",
    // "GS": "South Georgia and the South Sandwich Islands",
    // "GT": "Guatemala",
    // "GU": "Guam",
    // "GW": "Guinea-Bissau",
    // "GY": "Guyana",
    // "HK": "Hong Kong SAR China",
    // "HM": "Heard Island and McDonald Islands",
    // "HN": "Honduras",
    // "HR": "Croatia",
    // "HT": "Haiti",
    // "HU": "Hungary",
    // "ID": "Indonesia",
    // "IE": "Ireland",
    // "IL": "Israel",
    // "IM": "Isle of Man",
    // "IN": "India",
    // "IO": "British Indian Ocean Territory",
    // "IQ": "Iraq",
    // "IR": "Iran",
    // "IS": "Iceland",
    // "IT": "Italy",
    // "JE": "Jersey",
    // "JM": "Jamaica",
    // "JO": "Jordan",
    // "JP": "Japan",
    // "JT": "Johnston Island",
    // "KE": "Kenya",
    // "KG": "Kyrgyzstan",
    // "KH": "Cambodia",
    // "KI": "Kiribati",
    // "KM": "Comoros",
    // "KN": "Saint Kitts and Nevis",
    // "KP": "North Korea",
    // "KR": "South Korea",
    // "KW": "Kuwait",
    // "KY": "Cayman Islands",
    // "KZ": "Kazakhstan",
    // "LA": "Laos",
    // "LB": "Lebanon",
    // "LC": "Saint Lucia",
    // "LI": "Liechtenstein",
    // "LK": "Sri Lanka",
    // "LR": "Liberia",
    // "LS": "Lesotho",
    // "LT": "Lithuania",
    // "LU": "Luxembourg",
    // "LV": "Latvia",
    // "LY": "Libya",
    // "MA": "Morocco",
    // "MC": "Monaco",
    // "MD": "Moldova",
    // "ME": "Montenegro",
    // "MF": "Saint Martin",
    // "MG": "Madagascar",
    // "MH": "Marshall Islands",
    // "MI": "Midway Islands",
    // "MK": "Macedonia",
    // "ML": "Mali",
    // "MM": "Myanmar [Burma]",
    // "MN": "Mongolia",
    // "MO": "Macau SAR China",
    // "MP": "Northern Mariana Islands",
    // "MQ": "Martinique",
    // "MR": "Mauritania",
    // "MS": "Montserrat",
    // "MT": "Malta",
    // "MU": "Mauritius",
    // "MV": "Maldives",
    // "MW": "Malawi",
    // "MX": "Mexico",
    // "MY": "Malaysia",
    // "MZ": "Mozambique",
    // "NA": "Namibia",
    // "NC": "New Caledonia",
    // "NE": "Niger",
    // "NF": "Norfolk Island",
    // "NG": "Nigeria",
    // "NI": "Nicaragua",
    // "NL": "Netherlands",
    // "NO": "Norway",
    // "NP": "Nepal",
    // "NQ": "Dronning Maud Land",
    // "NR": "Nauru",
    // "NT": "Neutral Zone",
    // "NU": "Niue",
    // "NZ": "New Zealand",
    // "OM": "Oman",
    // "PA": "Panama",
    // "PC": "Pacific Islands Trust Territory",
    // "PE": "Peru",
    // "PF": "French Polynesia",
    // "PG": "Papua New Guinea",
    // "PH": "Philippines",
    // "PK": "Pakistan",
    // "PL": "Poland",
    // "PM": "Saint Pierre and Miquelon",
    // "PN": "Pitcairn Islands",
    // "PR": "Puerto Rico",
    // "PS": "Palestinian Territories",
    // "PT": "Portugal",
    // "PU": "U.S. Miscellaneous Pacific Islands",
    // "PW": "Palau",
    // "PY": "Paraguay",
    // "PZ": "Panama Canal Zone",
    // "QA": "Qatar",
    // "RE": "R\u00e9union",
    // "RO": "Romania",
    // "RS": "Serbia",
    // "RU": "Russia",
    // "RW": "Rwanda",
    // "SA": "Saudi Arabia",
    // "SB": "Solomon Islands",
    // "SC": "Seychelles",
    // "SD": "Sudan",
    // "SE": "Sweden",
    // "SG": "Singapore",
    // "SH": "Saint Helena",
    // "SI": "Slovenia",
    // "SJ": "Svalbard and Jan Mayen",
    // "SK": "Slovakia",
    // "SL": "Sierra Leone",
    // "SM": "San Marino",
    // "SN": "Senegal",
    // "SO": "Somalia",
    // "SR": "Suriname",
    // "ST": "S\u00e3o Tom\u00e9 and Pr\u00edncipe",
    // "SU": "Union of Soviet Socialist Republics",
    // "SV": "El Salvador",
    // "SY": "Syria",
    // "SZ": "Swaziland",
    // "TC": "Turks and Caicos Islands",
    // "TD": "Chad",
    // "TF": "French Southern Territories",
    // "TG": "Togo",
    // "TH": "Thailand",
    // "TJ": "Tajikistan",
    // "TK": "Tokelau",
    // "TL": "Timor-Leste",
    // "TM": "Turkmenistan",
    // "TN": "Tunisia",
    // "TO": "Tonga",
    // "TR": "Turkey",
    // "TT": "Trinidad and Tobago",
    // "TV": "Tuvalu",
    // "TW": "Taiwan",
    // "TZ": "Tanzania",
    // "UA": "Ukraine",
    // "UG": "Uganda",
    // "UM": "U.S. Minor Outlying Islands",
    // "US": "United States",
    // "UY": "Uruguay",
    // "UZ": "Uzbekistan",
    // "VA": "Vatican City",
    // "VC": "Saint Vincent and the Grenadines",
    // "VD": "North Vietnam",
    // "VE": "Venezuela",
    // "VG": "British Virgin Islands",
    // "VI": "U.S. Virgin Islands",
    // "VN": "Vietnam",
    // "VU": "Vanuatu",
    // "WF": "Wallis and Futuna",
    // "WK": "Wake Island",
    // "WS": "Samoa",
    // "YD": "People's Democratic Republic of Yemen",
    // "YE": "Yemen",
    // "YT": "Mayotte",
    // "ZA": "South Africa",
    // "ZM": "Zambia",
    // "ZW": "Zimbabwe",
    "ZZ": "Unknown or Invalid Region"
}