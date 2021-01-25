class legendPages{

    /*
    ***Object repository of legend elements
    */
   get cIPWaterMains() {return $('//span[text()="CIP Water Mains"]')}

   get waterDistribution() {return $('//span[text()="Water Distribution"]')}
   get reservoirs() {return $('//span[text()="Reservoirs"]')}
   get services() {return $('//span[text()="Services"]')}
   get customerExemption() {return $('//span[text()="Customer Exemption"]')}
   get customerLocations() {return $('//span[text()="Customer Locations"]')}
   get unknownAccntType() {return $('//span[text()="Unknown Account Type"]')}
   get residential() {return $('//span[text()="Residential"]')}
   get fireline() {return $('//span[text()="Fireline"]')}
   get municipal() {return $('//span[text()="Municipal"]')}
   //get leads() {return $(//span[text()='Small Commercial - < 2"'])}
   get commercial_upto6mtr() {return $('//span[text()="Commercial - up to 6" mtr"]')}

   get addressValidationType() {return $('//span[text()="Address Validation Type"]')}
   get serviceLineMaterial() {return $('//span[text()="Service Line Material"]')}
   get serviceValves() {return $('//span[text()="Service Valves"]')}
   get serviceMeters() {return $('//span[text()="Service Meters"]')}

   get interconnections() {return $('//span[text()="Interconnections"]')}
   get unknownType() {return $('//span[text()="Unknown Type"]')}
   get wholesale() {return $('//span[text()="Wholesale"]')}
   get emergency() {return $('//span[text()="Emergency"]')}
   get inactive() {return $('//span[text()="Inactive"]')}

   get pumpStations() {return $('//span[text()="Pump Stations"]')}
   get waterStorageTank() {return $('//span[text()="Water Storage Tank"]')}
   get structures() {return $('//span[text()="Structures"]')}

   get fireHydrants() {return $('//span[text()="Fire Hydrants"]')}
   get hydrants() {return $('//span[text()="Hydrants"]')} 
   get conditionNotReported() {return $('//span[text()="Condition Not Reported"]')} 
   get inServiceNoRepairsRequired() {return $('//span[text()="In Service - No Repairs Required"]')} 
   get outOfService() {return $('//span[text()="Out of Service"]')} 

   get valves() {return $('//span[text()="Valves"]')} 
   get closedDistributionGridSystemValves() {return $('//span[text()="Closed Distribution Grid System Valves"]')} 
   get normallyOpenCurrentlyClosed() {return $('//span[text()="Normally Open, Currently Closed"]')} 
   get normallyClosedCurrentlyClosed() {return $('//span[text()="Normally Closed, Currently Closed "]')}
   get normallyClosedCurrentlyOpen() {return $('//span[text()="Normally Closed, Currently Open"]')} 

   get systemValve() {return $('//span[text()="System Valve"]')} 
   get hydrant() {return $('(//span[text()="Hydrant"])[1]')} 
   get interconnection() {return $('//span[text()="Interconnection"]')} 
   get airRelease() {return $('//span[text()="Air Release"]')}
   get altitude() {return $('//span[text()="Altitude"]')}
   get blowoff() {return $('//span[text()="Blowoff"]')}
   get bypass() {return $('//span[text()="Bypass"]')}
   get check() {return $('//span[text()="Check"]')}
   get distGrid() {return $('//span[text()="Distribution Grid"]')}
   get pressureRegulator() {return $('//span[text()="Pressure Regulator"]')}
   get serviceShutoff() {return $('//span[text()="Service Shutoff"]')}
   get surgeRelief() {return $('//span[text()="Surge Relief"]')}
   get testConnection() {return $('//span[text()="Test Connection"]')}

   get sysValveOperable() {return $('//span[text()="System Valve Operable?"]')}
   get no_sysValveOperable() {return $('//span[text()="No"]')}

   get lateralLines() {return $('//span[text()="Lateral Lines"]')}
   get serviceLine() {return $('//span[text()="Service Line"]')}
   get horizontalGateValveOffset() {return $('//span[text()="Horizontal Gate Valve Offset"]')}


   get hydrantBranchLines() {return $('//span[text()="Hydrant Branch Lines"]')}
   get hydrant_hydrantBranchLines() {return $('(//span[text()="Hydrant"])[2]')}

   get fittings() {return $('//span[text()="Fittings"]')}

   get mains() {return $('//span[text()="Mains"]')}
   get mainsTransMainsPVWCOnly() {return $('//span[text()="Mains (Transmission Mains - PVWC Only)"]')}
   get allOtherValues_mains() {return $('(//span[text()="<all other values>"])[1]"]')}
   get mains30() {return $('//span[text()="30"]')}
   get mains34() {return $('//span[text()="34"]')}
   get mains36() {return $('//span[text()="36"]')}
   get mains42() {return $('//span[text()="42"]')}
   get mains48() {return $('//span[text()="48"]')}
   get mains51() {return $('//span[text()="51"]')}
   get mains60() {return $('//span[text()="60"]')}
   get mainsTransmissionOthers() {return $('//span[text()="Mains (Transmission Mains - Other)"]')}
   get mainsSizes() {return $('//span[text()="Mains (Sizes)"]')}
   get systemMeter() {return $('//span[text()="System Meter"]')}


  
   
}

module.exports = new legendPages()