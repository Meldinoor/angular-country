///<reference path="../../Assets/js/mainRefs.ts" />
var CountryModule;
(function (CountryModule) {
    var Countries = {
        "AF": "Afghanistan",
        "AX": "Aland Islands",
        "AL": "Albania",
        "DZ": "Algeria",
        "AS": "American Samoa",
        "AD": "Andorra",
        "AO": "Angola",
        "AI": "Anguilla",
        "AQ": "Antarctica",
        "AG": "Antigua and Barbuda",
        "AR": "Argentina",
        "AM": "Armenia",
        "AW": "Aruba",
        "AU": "Australia",
        "AT": "Austria",
        "AZ": "Azerbaijan",
        "BS": "Bahamas",
        "BH": "Bahrain",
        "BD": "Bangladesh",
        "BB": "Barbados",
        "BY": "Belarus",
        "BE": "Belgium",
        "BZ": "Belize",
        "BJ": "Benin",
        "BM": "Bermuda",
        "BT": "Bhutan",
        "BO": "Bolivia",
        "BA": "Bosnia and Herzegovina",
        "BW": "Botswana",
        "BV": "Bouvet Island",
        "BR": "Brazil",
        "VG": "British Virgin Islands",
        "IO": "British Indian Ocean Territory",
        "BN": "Brunei Darussalam",
        "BG": "Bulgaria",
        "BF": "Burkina Faso",
        "BI": "Burundi",
        "KH": "Cambodia",
        "CM": "Cameroon",
        "CA": "Canada",
        "CV": "Cape Verde",
        "KY": "Cayman Islands",
        "CF": "Central African Republic",
        "TD": "Chad",
        "CL": "Chile",
        "CN": "China",
        "HK": "Hong Kong, Special Administrative Region of China",
        "MO": "Macao, Special Administrative Region of China",
        "CX": "Christmas Island",
        "CC": "Cocos (Keeling) Islands",
        "CO": "Colombia",
        "KM": "Comoros",
        "CG": "Congo (Brazzaville)",
        "CD": "Congo, Democratic Republic of the",
        "CK": "Cook Islands",
        "CR": "Costa Rica",
        "CI": "Côte d Ivoire",
        "HR": "Croatia",
        "CU": "Cuba",
        "CY": "Cyprus",
        "CZ": "Czech Republic",
        "DK": "Denmark",
        "DJ": "Djibouti",
        "DM": "Dominica",
        "DO": "Dominican Republic",
        "EC": "Ecuador",
        "EG": "Egypt",
        "SV": "El Salvador",
        "GQ": "Equatorial Guinea",
        "ER": "Eritrea",
        "EE": "Estonia",
        "ET": "Ethiopia",
        "FK": "Falkland Islands (Malvinas)",
        "FO": "Faroe Islands",
        "FJ": "Fiji",
        "FI": "Finland",
        "FR": "France",
        "GF": "French Guiana",
        "PF": "French Polynesia",
        "TF": "French Southern Territories",
        "GA": "Gabon",
        "GM": "Gambia",
        "GE": "Georgia",
        "DE": "Germany",
        "GH": "Ghana",
        "GI": "Gibraltar",
        "GR": "Greece",
        "GL": "Greenland",
        "GD": "Grenada",
        "GP": "Guadeloupe",
        "GU": "Guam",
        "GT": "Guatemala",
        "GG": "Guernsey",
        "GN": "Guinea",
        "GW": "Guinea-Bissau",
        "GY": "Guyana",
        "HT": "Haiti",
        "HM": "Heard Island and Mcdonald Islands",
        "VA": "Holy See (Vatican City State)",
        "HN": "Honduras",
        "HU": "Hungary",
        "IS": "Iceland",
        "IN": "India",
        "ID": "Indonesia",
        "IR": "Iran, Islamic Republic of",
        "IQ": "Iraq",
        "IE": "Ireland",
        "IM": "Isle of Man",
        "IL": "Israel",
        "IT": "Italy",
        "JM": "Jamaica",
        "JP": "Japan",
        "JE": "Jersey",
        "JO": "Jordan",
        "KZ": "Kazakhstan",
        "KE": "Kenya",
        "KI": "Kiribati",
        "KP": "Korea, Democratic Peoples Republic of",
        "KR": "Korea, Republic of",
        "KW": "Kuwait",
        "KG": "Kyrgyzstan",
        "LA": "Lao PDR",
        "LV": "Latvia",
        "LB": "Lebanon",
        "LS": "Lesotho",
        "LR": "Liberia",
        "LY": "Libya",
        "LI": "Liechtenstein",
        "LT": "Lithuania",
        "LU": "Luxembourg",
        "MK": "Macedonia, Republic of",
        "MG": "Madagascar",
        "MW": "Malawi",
        "MY": "Malaysia",
        "MV": "Maldives",
        "ML": "Mali",
        "MT": "Malta",
        "MH": "Marshall Islands",
        "MQ": "Martinique",
        "MR": "Mauritania",
        "MU": "Mauritius",
        "YT": "Mayotte",
        "MX": "Mexico",
        "FM": "Micronesia, Federated States of",
        "MD": "Moldova",
        "MC": "Monaco",
        "MN": "Mongolia",
        "ME": "Montenegro",
        "MS": "Montserrat",
        "MA": "Morocco",
        "MZ": "Mozambique",
        "MM": "Myanmar",
        "NA": "Namibia",
        "NR": "Nauru",
        "NP": "Nepal",
        "NL": "Netherlands",
        "AN": "Netherlands Antilles",
        "NC": "New Caledonia",
        "NZ": "New Zealand",
        "NI": "Nicaragua",
        "NE": "Niger",
        "NG": "Nigeria",
        "NU": "Niue",
        "NF": "Norfolk Island",
        "MP": "Northern Mariana Islands",
        "NO": "Norway",
        "OM": "Oman",
        "PK": "Pakistan",
        "PW": "Palau",
        "PS": "Palestinian Territory, Occupied",
        "PA": "Panama",
        "PG": "Papua New Guinea",
        "PY": "Paraguay",
        "PE": "Peru",
        "PH": "Philippines",
        "PN": "Pitcairn",
        "PL": "Poland",
        "PT": "Portugal",
        "PR": "Puerto Rico",
        "QA": "Qatar",
        "RE": "Réunion",
        "RO": "Romania",
        "RU": "Russian Federation",
        "RW": "Rwanda",
        "BL": "Saint-Barthélemy",
        "SH": "Saint Helena",
        "KN": "Saint Kitts and Nevis",
        "LC": "Saint Lucia",
        "MF": "Saint-Martin (French part)",
        "PM": "Saint Pierre and Miquelon",
        "VC": "Saint Vincent and Grenadines",
        "WS": "Samoa",
        "SM": "San Marino",
        "ST": "Sao Tome and Principe",
        "SA": "Saudi Arabia",
        "SN": "Senegal",
        "RS": "Serbia",
        "SC": "Seychelles",
        "SL": "Sierra Leone",
        "SG": "Singapore",
        "SK": "Slovakia",
        "SI": "Slovenia",
        "SB": "Solomon Islands",
        "SO": "Somalia",
        "ZA": "South Africa",
        "GS": "South Georgia and the South Sandwich Islands",
        "SS": "South Sudan",
        "ES": "Spain",
        "LK": "Sri Lanka",
        "SD": "Sudan",
        "SR": "Suriname *",
        "SJ": "Svalbard and Jan Mayen Islands",
        "SZ": "Swaziland",
        "SE": "Sweden",
        "CH": "Switzerland",
        "SY": "Syrian Arab Republic (Syria)",
        "TW": "Taiwan, Republic of China",
        "TJ": "Tajikistan",
        "TZ": "Tanzania *, United Republic of",
        "TH": "Thailand",
        "TL": "Timor-Leste",
        "TG": "Togo",
        "TK": "Tokelau",
        "TO": "Tonga",
        "TT": "Trinidad and Tobago",
        "TN": "Tunisia",
        "TR": "Turkey",
        "TM": "Turkmenistan",
        "TC": "Turks and Caicos Islands",
        "TV": "Tuvalu",
        "UG": "Uganda",
        "UA": "Ukraine",
        "AE": "United Arab Emirates",
        "GB": "United Kingdom",
        "US": "United States of America",
        "UM": "United States Minor Outlying Islands",
        "UY": "Uruguay",
        "UZ": "Uzbekistan",
        "VU": "Vanuatu",
        "VE": "Venezuela (Bolivarian Republic of)",
        "VN": "Viet Nam",
        "VI": "Virgin Islands, US",
        "WF": "Wallis and Futuna Islands",
        "EH": "Western Sahara",
        "YE": "Yemen",
        "ZM": "Zambia",
        "ZW": "Zimbabwe"
    };
    var CountrySelecterController = (function () {
        function CountrySelecterController() {
            var _this = this;
            this.selectCountry = function (newCountry) {
                _this.ngModel.$setViewValue(newCountry);
            };
        }
        CountrySelecterController.$inject = [];
        return CountrySelecterController;
    })();
    function CountrySelecterDirective() {
        return {
            restrict: 'E',
            require: 'ngModel',
            bindToController: true,
            controllerAs: 'ctrl',
            controller: CountrySelecterController,
            compile: function (element, attr, transclude) {
                var preferredCountries = [];
                var includeCountries = [];
                var excludeCountries = [];
                if (attr['preferredCountries']) {
                    if (typeof attr['preferredCountries'] === 'array')
                        preferredCountries = attr['preferredCountries'];
                    else
                        preferredCountries = attr['preferredCountries'].toString().split(',');
                }
                if (attr['includeCountries']) {
                    if (typeof attr['includeCountries'] === 'array')
                        includeCountries = attr['includeCountries'];
                    else
                        includeCountries = attr['includeCountries'].toString().split(',');
                }
                if (attr['excludeCountries']) {
                    if (typeof attr['excludeCountries'] === 'array')
                        excludeCountries = attr['excludeCountries'];
                    else
                        excludeCountries = attr['excludeCountries'].toString().split(',');
                }
				var style = attr['style'] ? attr['style'] : '';
                var options = '<div style="' + style + '" class="dropdown"><button style="' + style + '" class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">{{ctrl.ngModel.$viewValue}}<span class="caret" style="position: absolute; right: 10px; top: 48%;"></span></button>'
                    + '<ul style="' + style + '" class="dropdown-menu currency-selecter-scrollable-menu">';
                if (preferredCountries.length) {
                    for (var i = 0; i < preferredCountries.length; ++i) {
                        if (Countries[preferredCountries[i].toUpperCase()] !== void 0) {
                            var ucPc = preferredCountries[i].toUpperCase();
                            options += '<li style="text-align: center;"><a href="" ng-click="ctrl.selectCountry(\'' + Countries[ucPc] + ' (' + ucPc + ')\')" role="button">' + Countries[ucPc] + ' (' + ucPc + ')</a></li>';
                        }
                    }
                    options += '<li role="separator" class="divider"></li>';
                }
                for (var key in Countries) {
                    if ((!Countries.hasOwnProperty(key) || preferredCountries.some(function (c, idx, arr) { return c.toUpperCase() === key; }))
                        || excludeCountries.some(function (c, idx, arr) { return c.toUpperCase() === key; })
                        || (includeCountries.length !== 0 && !includeCountries.some(function (c, idx, arr) { return c.toUpperCase() === key; })))
                        continue;
                    options += '<li style="text-align: center;"><a href="" ng-click="ctrl.selectCountry(\'' + Countries[key] + ' (' + key + ')\')" role="button">' + Countries[key] + ' (' + key + ')</a></li>';
                }
                element.append(options);
                return {
                    pre: function (scope, element, attr, ngModel) {
                        var defaultCountry = null;
                        if (attr['defaultCountry']) {
                            defaultCountry = attr['defaultCountry'].toString();
                        }
                        ngModel.$formatters.push(function (m) { return Countries[m] + ' (' + m + ')'; });
                        ngModel.$parsers.push(function (v) { return v.substr(v.lastIndexOf('(') + 1, 3); });
                        if (!ngModel.$modelValue && defaultCountry) {
                            ngModel.$setViewValue(Countries[defaultCountry] + ' (' + defaultCountry + ')');
                        }
                        scope.ctrl.ngModel = ngModel;
                    }
                };
            }
        };
    }
    angular.module('CountrySelecter', []).directive('countrySelecter', CountrySelecterDirective).constant('countryConfig', {});
})(CountryModule || (CountryModule = {}));
//# sourceMappingURL=app.js.map