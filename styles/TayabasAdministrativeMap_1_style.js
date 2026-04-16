<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <link rel="stylesheet" href="./resources/ol.css">
        <link rel="stylesheet" href="resources/fontawesome-all.min.css">
        <link href="resources/photon-geocoder-autocomplete.min.css" rel="stylesheet">
        <link rel="stylesheet" href="./resources/ol-layerswitcher.css">
        <link rel="stylesheet" href="./resources/qgis2web.css">
        <style>
        html, body { background-color: #ffffff; margin: 0; padding: 0; width: 100%; height: 100%; }
        #map { width: 100%; height: 100%; }

        /* UNIFIED BUTTON CONTAINER */
        .map-action-container {
            position: fixed;
            bottom: 25px;
            right: 25px;
            z-index: 3000;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        /* MATCHING BUTTON STYLES */
        .map-btn {
            width: 200px; 
            padding: 14px 0;
            border-radius: 10px;
            text-decoration: none !important;
            font-family: 'Segoe UI', Tahoma, sans-serif;
            font-weight: bold;
            font-size: 13px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            border: 1px solid rgba(255,255,255,0.1);
            transition: all 0.3s ease;
            cursor: pointer;
            color: #ffffff !important;
            text-transform: uppercase;
        }

        .report-btn { background: #e67e22; }
        .dashboard-btn { background: #2b3d51; }

        .map-btn:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.4);
            filter: brightness(1.1);
        }

        /* Selection Mode Animation */
        .selecting-mode {
            background: #c0392b !important;
            animation: pulse-red 1.5s infinite;
        }

        @keyframes pulse-red {
            0% { transform: scale(1); }
            50% { transform: scale(1.03); }
            100% { transform: scale(1); }
        }

        .ol-control { background-color: rgba(255,255,255,.4) !important; padding: 2px !important; }
        </style>
        <title>Tayabas–Lucban Bypass Road Inventory Web Map</title>
    </head>
    <body>
        <div class="map-action-container">
            <a href="#" class="map-btn report-btn" id="reportBtn">
                <i class="fas fa-map-marker-alt"></i> Report Road Issue
            </a>
            <a href="dashboard.html" class="map-btn dashboard-btn">
                <i class="fas fa-chart-bar"></i> View Dashboard
            </a>
        </div>

        <div id="map">
            <div id="popup" class="ol-popup">
                <a href="#" id="popup-closer" class="ol-popup-closer"></a>
                <div id="popup-content"></div>
            </div>
        </div>

        <script src="resources/qgis2web_expressions.js"></script>
        <script src="resources/proj4.js"></script>
        <script>proj4.defs('EPSG:4326','+proj=longlat +datum=WGS84 +no_defs');</script>
        <script src="./resources/functions.js"></script>
        <script src="./resources/ol.js"></script>
        <script src="./resources/ol-layerswitcher.js"></script>
        <script src="resources/photon-geocoder-autocomplete.min.js"></script>
        
        <script src="layers/TayabasAdministrativeMap_1.js"></script>
        <script src="layers/Elevation_2.js"></script>
        <script src="layers/SurfaceType_3.js"></script>
        <script src="layers/RoadCondition_4.js"></script>
        <script src="layers/RoadClassification_5.js"></script>
        <script src="layers/RoadinventoryDatabase_6.js"></script>
        
        <script src="styles/TayabasAdministrativeMap_1_style.js"></script>
        <script src="styles/Elevation_2_style.js"></script>
        <script src="styles/SurfaceType_3_style.js"></script>
        <script src="styles/RoadCondition_4_style.js"></script>
        <script src="styles/RoadClassification_5_style.js"></script>
        <script src="styles/RoadinventoryDatabase_6_style.js"></script>
        
        <script src="./layers/layers.js" type="text/javascript"></script> 
        <script src="./resources/Autolinker.min.js"></script>
        <script src="./resources/qgis2web.js"></script>

        <script>
        // --- 1. HOVER HIGHLIGHT LOGIC ---
        var highlight;
        var highlightStyle = new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#f1c40f', width: 3 }),
            fill: new ol.style.Fill({ color: 'rgba(241, 196, 15, 0.1)' })
        });

        map.on('pointermove', function(evt) {
            if (evt.dragging) return;
            var pixel = map.getEventPixel(evt.originalEvent);
            var feature = map.forEachFeatureAtPixel(pixel, function(f) { return f; });

            if (highlight) {
                highlight.setStyle(undefined);
            }
            if (feature) {
                feature.setStyle(highlightStyle);
                highlight = feature;
            }
        });

        // --- 2. REPORTING BUTTON LOGIC ---
        document.getElementById('reportBtn').addEventListener('click', function(e) {
            e.preventDefault();
            const btn = this;
            
            btn.classList.add('selecting-mode');
            btn.innerHTML = '<i class="fas fa-crosshairs"></i> Select Location...';
            
            map.once('click', function(evt) {
                btn.classList.remove('selecting-mode');
                btn.innerHTML = '<i class="fas fa-map-marker-alt"></i> Report Road Issue';

                // Opening the responder link directly
                const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSdO1z3GxkdypTtoE0Se0K0U91IjFJhG2vx3qSh4X-ACnAd9Pg/viewform?usp=dialog";
                window.open(formURL, '_blank');
            });
        });
        </script>
    </body>
</html>
