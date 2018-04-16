// import * as Alex from '../../src/index';

    var data = null;
    mapboxgl.accessToken = false;
    var mapCenter = [120.8066, 30.6135];
    // var mapCenter = [13.41, 52.52];
    var map = new mapboxgl.Map({
        style: {
            "version": 8,
            "sprite": "https://alex2wong.github.io/mapbox-plugins/assets/sprite",
            // "sprite": "../../assets/sprite",
            "glyphs": "https://alex2wong.github.io/mapbox-plugins/{fontstack}/{range}.pbf",
            "sources": {
                "custom-tms": {   
                    'type': 'raster',
                    'tiles': [
                        "https://huangyixiu.co:3003/proxy?proxyURI=http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
                        // "http://www.google.cn/maps/vt?lyrs=s@702&gl=cn&x={x}&y={y}&z={z}",
                        // "https://c.tiles.mapbox.com/v3/osmbuildings.kbpalbpk/{z}/{x}/{y}.png",
                        // "http://b.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    ],
                    'tileSize': 256
                },
            },
            "layers": [
                // {
                //     'id': 'custom-tms',
                //     'type': 'raster',
                //     'source': 'custom-tms',
                //     'paint': {}
                // },
            ]
        },
        center: mapCenter,
        zoom: 7,
        maxzoom: 8,
        pitch: 15,
        bearing: 0,
        light: {
            'anchor':'viewport',
            'color':'white',
            'intensity':0.7
        },
        container: 'map',
        showCollisionBoxes: true,
    });

    map.on('load', function() {
        console.log("map loaded...");
        Alex.Util.getJSON("https://alex2wong.github.io/mapbox-plugins/assets/countries.geojson")
            .then((res) => {
                console.log("got jsonData..");
                data = res;
                map.addSource("world", {
                    "type": "geojson",
                    "data": data
                });
                map.addLayer({
                    "id": "world",
                    "source": "world",
                    "type": "fill",
                    "paint": {
                        "fill-color": "rgba(0,0,0,0.7)",
                        "fill-outline-color": "#eee",
                        "fill-outline-width": 2
                    },
                    // "filter": ["==", "$type", "Polygon"]
                });
            });

        Alex.myTween.fps = 40;
        Alex.myTween.loop = true;
    });

    function init() {
        var objNum = 4, canvasLayer = new Alex.CanvasOverlayer({
            map: map,
            shadow: false,
            keepTrack: true,
            blurWidth: 4
        });
        objs = Alex.Util.rdObjs(objNum, mapCenter);
        // myTween.loop = false;
        targets = Alex.Util.rdObjs(objNum, mapCenter);
        var drone = new Alex.Drone({
            direction: 45,
            icon: "https://alex2wong.github.io/mapbox-plugins/assets/tri2.png"
        });

        Alex.Controllers.gameControl(drone);
        Alex.myTween.get(objs).to(targets, 6000, canvasLayer.redraw);
        canvasLayer.initTrackCtx();
        console.log("dom loaded !... register animation...");

        
        function update(){
            drone.updateStatus();
            canvasLayer.redraw([drone]);
            requestAnimationFrame(update);
        }
        update();
    }
