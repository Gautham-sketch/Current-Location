let coordinates = {}

$(document).ready(function(){
    getCoordinates();
})

function getCoordinates(){
    let searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has('source') && searchParams.has('destination')){
        let source = searchParams.get('source');
        let destination = searchParams.get('destination');
        coordinates.source_lat = source.split(";")[0]
        coordinates.source_lon = source.split(";")[1]
    } else{
        alert("Coordinates not selected !");
        window.history.back();
    }
}