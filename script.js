mapboxgl.accessToken =  'pk.eyJ1IjoibWFobSIsImEiOiJjbHJiaTVkanowb3lzMndwcnYwN3ZleGJkIn0.6g4SedBzopOipcNKBKj3lg';

const map = new mapboxgl.Map ({
    container: 'my-map',
    style: 'mapbox://styles/mahm/cls29mb1u01qn01o852ize7dt',
    center: [-79.39865237301687, 43.662343395037766], 
    zoom: 15
});

map.on('load', () => {
    //Add a data source containing GeoJSON data
    map.addSource('uoft-data', {
        type: 'geojson',
        data: {
        "type": "FeatureCollection",
        "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Sidney Smith Hall"
            },
            "geometry": {
                "coordinates": [
                    -79.39865237301687,
                    43.662343395037766
                    ],
                    "type": "Point"
                }
            }
            ]
        }
    });
    map.addLayer({
        'id': 'uoft-pnt',
        'type': 'circle',
        'source': 'uoft-data',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#B42222'
        }
    });
})