// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
  "access_token=pk.eyJ1IjoiYm1hZ3ozMDUiLCJhIjoiY2poeHExajZ2MGVkeDN3bzZ1aW5mejdwdSJ9.66ND9EUopJbt-zTH8i9ehA." +
  "T6YbdDixkOBWH_k9GbS8JQ"
).addTo(myMap);

// An array containing each city's name, location, and population
var stadiums = [
  {team:"Anaheim Angels",address:"2000 Gene Autry Way, Anaheim, CA. 92806",location: [33.799572,-117.889031]},
  {team:"Arizona Diamondbacks",address:"P.O. Box 2095, Phoenix, AZ. 85001",location: [33.452922,-112.038669]},
  {team:"Atlanta Braves",address:"P.O. Box 4064, Atlanta, GA. 30302",location: [33.74691,-84.391239]},
  {team:"Baltimore Orioles",address:"333 W. Camden Street, Baltimore, MD. 21201",location: [39.285243,-76.620103]},
  {team:"Boston Red Sox",address:"4 Yawkey Way, Boston, MA 02215",location: [42.346613,-71.098817]},
  {team:"Chicago Cubs",address:"1060 Addison Street, Chicago, IL 60616",location: [41.947201,-87.656413]},
  {team:"Chicago White Sox",address:"333 W. 35th Street, Chicago, IL 60616",location: [41.830883,-87.635083]},
  {team:"Cincinnati Reds",address:"100 Cinergy Field, Cincinnati, OH 45202",location: [39.107183,-84.507713]},
  {team:"Cleveland Indians",address:"2401 Ontario Street, Cleveland, OH 44115",location: [41.495149,-81.68709]},
  {team:"Colorado Rockies",address:"Coors Field, 2001 Blake Street, Denver, CO 80205-2000",location: [39.75698,-104.965329]},
  {team:"Detroit Tigers",address:"Comerica Park, 2100 Woodward Ave., Detroit, MI 48201",location: [42.346354,-83.059619]},
  {team:"Florida Marlins",address:"2269 NW 199th Street, Miami, FL 33056",location: [25.954428,-80.238164]},
  {team:"Houston Astros",address:"P.O. Box 288, Houston, TX 77001-0288",location: [29.76045,-95.369784]},
  {team:"Kansas City Royals",address:"P.O. Boz 419969, Kansas City, MO 64141",location: [39.10222,-94.583559]},
  {team:"Los Angeles Dodgers",address:"1000 Elysian Park Ave., Los Angeles, CA 90012",location: [34.072437,-118.246879]},
  {team:"Milwaukee Brewers",address:"P.O. Box 3099, Milwaukee, WI 53201-3099",location: [43.04205,-87.905599]},
  {team:"Minnesota Twins",address:"501 Chicago Ave. S., Minneapolis, MN 55415",location: [44.974346,-93.259616]},
  {team:"Washington Nationals",address:"1500 South Capitol Street SE, Washington, DC",location: [38.87,-77.01]},
  {team:"New York Mets",address:"Roosevelt Ave & 126th Street, New York, NY 11368",location: [40.75535,-73.843219]},
  {team:"New York Yankees",address:"Yankee Stadium, E. 161 Street & River Ave., New York, NY 10451", location: [40.819782, -73.929939]},
  {team:"Oakland Athletics",address:"Oakland Coliseum, 700 Coliseum Way, Oakland, Ca 94621-1918", location: [37.74923,  -122.196487]},
  {team:"Philadelphia Phillies",address:"P.O. Box 7575, Philadelphia, PA 19101",location: [39.952313,-75.162392]},
  {team:"Pittsburgh Pirates",address:"600 Stadium Circle, Pittsburgh, PA 15212",location: [40.461503,-80.008924]},
  {team:"St. Louis Cardinals",address:"250 Stadium Plaza, St. Louis, MO 63102",location: [38.629683,-90.188247]},
  {team:"San Diego Padres",address:"P.O. Box 2000, San Diego, CA 92112-2000",location: [32.752148,-117.143635]},
  {team:"San Francisco Giants",address:"Pacific Bell Park, 24 Willie Mays Plaza, San Francisco, CA 94107",location: [37.77987, -122.389754]},
  {team:"Seattle Mariners",address:"P.O. Box 41000, 411 First Ave. S., Seattle, WA 98104",location: [47.60174,-122.330829]},
  {team:"Tampa Bay Devil Rays",address:"1 Tropicana Drive, St. Petersburg, FL 33705",location: [27.768487,-82.648191]},
  {team:"Texas Rangers",address:"1000 Ballpark Way, Arlington, TX 76011",location: [32.750156,-97.081117]},
    {team:"Toronto Blue Jays",address:"1 Blue Jay Way, Suite 3200, Toronto, ONT M5V 1J1",location: [43.641653,-79.3917]}] ;

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < stadiums.length; i++) {
  var stadium = stadiums[i];
  L.marker(stadium.location)
    .bindPopup("<h1>" + stadium.team + "</h1> <hr> <h3>Population " + stadium.address + "</h3>")
    .addTo(myMap);
}