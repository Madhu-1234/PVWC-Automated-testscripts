const homePagePages = require("../pages/homePage.pages")
const pecoFieldbookPages = require("../pages/pecoFieldbook.pages")
const { assert, expect } = require("chai")

describe("Verifying measure functionality", function(){

    it("Measure area, linear distance and location", ()=>{

        pecoFieldbookPages.searchAddress('205 Gaul Rd Sinking Spring, PA 19608')
        pecoFieldbookPages.clickOnMeasure()
        /*
        ***Validating Measure area
        */
        var areaMeasured = pecoFieldbookPages.measureAreaDisplayed()
        console.log(areaMeasured)
        assert.isNotNull(areaMeasured,'Area measured is null')

        /*
        ***Validating Measure distance
        */
        var distanceMeasured = pecoFieldbookPages.measureDistanceDisplayed()
        console.log(distanceMeasured)
        assert.isNotNull(distanceMeasured,'Distance measured is null')

        /*
        ***Validating Measure distance
        */
        var latAndLong = pecoFieldbookPages.measureLocationDisplayed()
        console.log(latAndLong)
        assert.isNotNull(latAndLong[0],'Longitude measured is null')
        assert.isNotNull(latAndLong[1],'Latitude measured is null')
        
    })



})