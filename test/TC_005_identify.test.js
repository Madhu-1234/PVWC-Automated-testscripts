const homePagePages = require("../pages/homePage.pages")
const { assert, expect } = require("chai")
const pecoFieldbookPages = require("../pages/pecoFieldbook.pages")

describe("Verifying identify functionality", function(){

    it("Identify functionality for division locations", ()=>{

        pecoFieldbookPages.searchAddress('568 Avondale Rd, PA')
        browser.pause(5000)
        pecoFieldbookPages.clickOnIdentify()
        browser.pause(5000)
        pecoFieldbookPages.clickOnParcel()
        assert.equal($('//*[@id="identifyLayerName"]/b').getText(), 'Parcels')
        pecoFieldbookPages.nextBtn_identify.click()
        assert.equal($('//*[@id="identifyLayerName"]/b').getText(), 'Counties')

              
    })

})