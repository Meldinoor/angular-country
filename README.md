# angular-country
A simple bootstrap dropdown for selecting from world countries

# Usage
Make sure to include 'CountrySelector' as a dependency in your angular module.

To implement the selecter in your markup, use the following syntax:


`<country-selecter ng-model="myCountry"></country-selecter>`

# Options

**Default Country**

The following syntax will make Denmark your default country (selected automatically)

`<country-selecter ng-model="myCountry" default-country="DK"></country-selecter>`

**Preferred Countries**

Use preferred countries to always display your preferred countries at the top of the list


`<country-selecter ng-model="myCountry" preferred-countries="SE,NO,DK"></country-selecter>`

**Include/Exclude Countries**

Use include-countries or exclude-countries if you wish to specify explicitly which countries to display or not to display in the list.
Example:


`<country-selecter include-countries="SE,NO,CO,KH,DK" preferred-countries="SE,NO,DK" default-country="SE" ng-model="myCountry"></country-selecter>`
