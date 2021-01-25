const homePagePages = require("../pages/homePage.pages")
const pecoFieldbookPages = require("../pages/pecoFieldbook.pages")
const { assert, expect } = require("chai")

describe("Verifying feature search and reverse geocode", function(){

    it("Should feature search and reverse geocode search", ()=>{

               
        /*
        ***Validating tooltip text for the Main Asset searched for       
        */    
        pecoFieldbookPages.featureLeadSearch_County('cam')
        var footerCount= pecoFieldbookPages.checkFooterCount()
        assert.isNotNull(footerCount,'Footer value is null')
        
        //***Validating reverse geocode search              
        browser.pause(3000)
        pecoFieldbookPages.addressRadioBtn.scrollIntoView();
        pecoFieldbookPages.addressRadioBtn.click()
        browser.pause(3000)
        pecoFieldbookPages.searchBar.clearValue()
        pecoFieldbookPages.searchBar.addValue('Akron, PA')
        pecoFieldbookPages.searchButton_searchWindow.click()
        browser.pause(4000)
        pecoFieldbookPages.searchGridResult.click()
        browser.pause(3000)
        pecoFieldbookPages.reverseGeoCodeSearch()
        browser.pause(4000)
        var logo = $('//span[text()="Create Project"]')
        logo.click({ x: 600, y: 200})
        var x_loc = $('//*[@id="kendoSearchGrid"]/div[4]/table/tbody/tr/td[2]').getText()
        var y_loc = $('//*[@id="kendoSearchGrid"]/div[4]/table/tbody/tr/td[3]').getText()
        assert.isNotNull(x_loc,'x coordinate is null')
        assert.isNotNull(y_loc,'y coordinate is null')
        browser.pause(9000)   
        
        
    })

})