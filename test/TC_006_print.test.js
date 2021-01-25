const homePagePages = require("../pages/homePage.pages")
const pecoFieldbookPages = require("../pages/pecoFieldbook.pages")
const { assert, expect } = require("chai")

describe("Verifying print functionality", function(){

    it("Should display a new pdf tab for print", ()=>{

        /*
        ***Validating new tab is displayed when user clicks on print
        */
        browser.pause(10000)
        assert.equal(true, pecoFieldbookPages.print.isClickable())
        pecoFieldbookPages.print.click()
        browser.pause(4000)


        //Validating that a new window handle is displayed
        
        var ID = []
            ID = browser.getWindowHandles()
            var size = ID.length
            assert.equal(size, 3)
    })

})