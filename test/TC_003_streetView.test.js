const homePagePages = require("../pages/homePage.pages")
const pecoFieldbookPages = require("../pages/pecoFieldbook.pages")
const { assert, expect } = require("chai")

describe("Verifying Google StreetView", function(){

    it("Should verify Google streetview", ()=>{

        pecoFieldbookPages.searchAddress('2701 Shore Road, Ocean View, NJ 08230, USA')               
        pecoFieldbookPages.clickOnStreetViewBtn()
        pecoFieldbookPages.clickOnLocationForStreetView()
        /*
        ***Validating streetView window is displayed
        ***Validating that the streetView address displayed is same as that the address searched
        */
        var streetView_street = pecoFieldbookPages.addressDisplayedStreetView()
        assert.isTrue($('#svWindow_wnd_title').isDisplayed())
        assert.equal('2701 Shore Road', streetView_street)          
               
    })

})