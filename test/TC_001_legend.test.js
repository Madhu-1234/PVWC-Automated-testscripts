const homePagePages = require("../pages/homePage.pages")
const pecoFieldbookPages = require("../pages/pecoFieldbook.pages")
const legendPages = require("../pages/legend.pages")
const { assert, expect } = require("chai")


describe("Verifying legend components", function(){

    it("Should verify legend layer Work Order Points", ()=>{

        pecoFieldbookPages.zoomToEnableLegend()
        pecoFieldbookPages.clickLegend()
        
        
        /*
        ***Validating different layers are displayed in the legend pane
        */
        assert.equal(true, legendPages.cIPWaterMains.isDisplayed())
        assert.equal(true, legendPages.waterDistribution.isDisplayed())
        assert.equal(true, legendPages.reservoirs.isDisplayed())
        assert.equal(true, legendPages.services.isDisplayed())
        assert.equal(true, legendPages.customerExemption.isDisplayed())
        assert.equal(true, legendPages.customerLocations.isDisplayed())
        assert.equal(true, legendPages.unknownAccntType.isDisplayed())
        assert.equal(true, legendPages.residential.isDisplayed())
        assert.equal(true, legendPages.fireline.isDisplayed())
        assert.equal(true, legendPages.municipal.isDisplayed())
        //assert.equal(true, legendPages.commercial_upto6mtr.isDisplayed())


        assert.equal(true, legendPages.addressValidationType.isDisplayed())
        assert.equal(true, legendPages.serviceLineMaterial.isDisplayed())
        assert.equal(true, legendPages.serviceValves.isDisplayed())
        assert.equal(true, legendPages.serviceMeters.isDisplayed())


        assert.equal(true, legendPages.interconnections.isDisplayed())
        assert.equal(true, legendPages.unknownType.isDisplayed())
        assert.equal(true, legendPages.wholesale.isDisplayed())
        assert.equal(true, legendPages.emergency.isDisplayed())
        assert.equal(true, legendPages.inactive.isDisplayed())

        assert.equal(true, legendPages.pumpStations.isDisplayed())
        assert.equal(true, legendPages.waterStorageTank.isDisplayed())
        assert.equal(true, legendPages.structures.isDisplayed())

        assert.equal(true, legendPages.fireHydrants.isDisplayed())
        assert.equal(true, legendPages.hydrants.isDisplayed())
        assert.equal(true, legendPages.conditionNotReported.isDisplayed())
        assert.equal(true, legendPages.inServiceNoRepairsRequired.isDisplayed())
        assert.equal(true, legendPages.outOfService.isDisplayed())

        assert.equal(true, legendPages.valves.isDisplayed())
        assert.equal(true, legendPages.closedDistributionGridSystemValves.isDisplayed())
        assert.equal(true, legendPages.normallyOpenCurrentlyClosed.isDisplayed())
        assert.equal(true, legendPages.normallyClosedCurrentlyClosed.isDisplayed())
        assert.equal(true, legendPages.normallyClosedCurrentlyOpen.isDisplayed())


        assert.equal(true, legendPages.systemValve.isDisplayed())
        assert.equal(true, legendPages.hydrant.isDisplayed())
        assert.equal(true, legendPages.interconnection.isDisplayed())
        assert.equal(true, legendPages.airRelease.isDisplayed())
        assert.equal(true, legendPages.altitude.isDisplayed())
        assert.equal(true, legendPages.blowoff.isDisplayed())
        assert.equal(true, legendPages.bypass.isDisplayed())
        assert.equal(true, legendPages.check.isDisplayed())
        assert.equal(true, legendPages.distGrid.isDisplayed())
        assert.equal(true, legendPages.pressureRegulator.isDisplayed())
        assert.equal(true, legendPages.serviceShutoff.isDisplayed())
        assert.equal(true, legendPages.testConnection.isDisplayed())

        assert.equal(true, legendPages.sysValveOperable.isDisplayed())
        assert.equal(true, legendPages.no_sysValveOperable.isDisplayed())

        assert.equal(true, legendPages.lateralLines.isDisplayed())
        assert.equal(true, legendPages.serviceLine.isDisplayed())
        assert.equal(true, legendPages.horizontalGateValveOffset.isDisplayed())

        assert.equal(true, legendPages.hydrantBranchLines.isDisplayed())
        assert.equal(true, legendPages.hydrant_hydrantBranchLines.isDisplayed())

        assert.equal(true, legendPages.fittings.isDisplayed())

        assert.equal(true, legendPages.mains.isDisplayed())
        assert.equal(true, legendPages.mainsTransMainsPVWCOnly.isDisplayed())
        assert.equal(true, legendPages.mains30.isDisplayed())
        assert.equal(true, legendPages.mains34.isDisplayed())
        assert.equal(true, legendPages.mains36.isDisplayed())
        assert.equal(true, legendPages.mains42.isDisplayed())
        assert.equal(true, legendPages.mains48.isDisplayed())
        assert.equal(true, legendPages.mains51.isDisplayed())
        assert.equal(true, legendPages.mains60.isDisplayed())
        assert.equal(true, legendPages.mainsTransmissionOthers.isDisplayed())
        assert.equal(true, legendPages.mainsSizes.isDisplayed())
        assert.equal(true, legendPages.systemMeter.isDisplayed())










        browser.pause(3000)

    })

})
