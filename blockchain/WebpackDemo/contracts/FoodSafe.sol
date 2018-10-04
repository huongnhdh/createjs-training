pragma solidity ^0.4.4;
contract Foodsafe {
    struct Location {
        string name;
        uint locationId;
        uint previousLocationId;
        uint timeStamp;
        string secret;
    }    
    mapping (uint => Location) Trail;
    uint8 TrailCount = 0;
    
    function addNewLocation(uint locationId, string name, string secret) {
        Location memory newLocation;
        newLocation.name = name;
        newLocation.locationId = locationId;
        newLocation.secret = secret;
        newLocation.timeStamp = now;
        if(TrailCount != 0) {
            newLocation.previousLocationId = Trail[TrailCount].locationId;
        }
    }
    function getTrailCount () returns(uint8) {
        return TrailCount;
    }
    
    function getLocation (uint8 trailNo) returns (string, uint, uint, uint, string) {
        return (Trail[trailNo].name, Trail[trailNo].locationId, Trail[trailNo].previousLocationId, Trail[trailNo].timeStamp, Trail[trailNo].secret) ;
 
    }
}