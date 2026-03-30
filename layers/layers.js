ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([121.580907, 14.019559, 121.592259, 14.028036]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_TayabasAdministrativeMap_1 = new ol.format.GeoJSON();
var features_TayabasAdministrativeMap_1 = format_TayabasAdministrativeMap_1.readFeatures(json_TayabasAdministrativeMap_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TayabasAdministrativeMap_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TayabasAdministrativeMap_1.addFeatures(features_TayabasAdministrativeMap_1);
var lyr_TayabasAdministrativeMap_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TayabasAdministrativeMap_1, 
                style: style_TayabasAdministrativeMap_1,
                popuplayertitle: 'Tayabas Administrative Map',
                interactive: true,
                title: '<img src="styles/legend/TayabasAdministrativeMap_1.png" /> Tayabas Administrative Map'
            });
var format_Elevation_2 = new ol.format.GeoJSON();
var features_Elevation_2 = format_Elevation_2.readFeatures(json_Elevation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Elevation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elevation_2.addFeatures(features_Elevation_2);
var lyr_Elevation_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elevation_2, 
                style: style_Elevation_2,
                popuplayertitle: 'Elevation',
                interactive: true,
    title: 'Elevation<br />\
    <img src="styles/legend/Elevation_2_0.png" /> 0 - 155<br />\
    <img src="styles/legend/Elevation_2_1.png" /> 155 - 172<br />\
    <img src="styles/legend/Elevation_2_2.png" /> 172 - 240<br />\
    <img src="styles/legend/Elevation_2_3.png" /> 240 - 271<br />\
    <img src="styles/legend/Elevation_2_4.png" /> 271 - 384<br />' });
var format_SurfaceType_3 = new ol.format.GeoJSON();
var features_SurfaceType_3 = format_SurfaceType_3.readFeatures(json_SurfaceType_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SurfaceType_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SurfaceType_3.addFeatures(features_SurfaceType_3);
var lyr_SurfaceType_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SurfaceType_3, 
                style: style_SurfaceType_3,
                popuplayertitle: 'Surface Type',
                interactive: true,
    title: 'Surface Type<br />\
    <img src="styles/legend/SurfaceType_3_0.png" /> Asphalt<br />\
    <img src="styles/legend/SurfaceType_3_1.png" /> Concrete<br />\
    <img src="styles/legend/SurfaceType_3_2.png" /> <br />' });
var format_RoadCondition_4 = new ol.format.GeoJSON();
var features_RoadCondition_4 = format_RoadCondition_4.readFeatures(json_RoadCondition_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RoadCondition_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadCondition_4.addFeatures(features_RoadCondition_4);
var lyr_RoadCondition_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadCondition_4, 
                style: style_RoadCondition_4,
                popuplayertitle: 'Road Condition',
                interactive: true,
    title: 'Road Condition<br />\
    <img src="styles/legend/RoadCondition_4_0.png" /> Fair<br />\
    <img src="styles/legend/RoadCondition_4_1.png" /> Good<br />\
    <img src="styles/legend/RoadCondition_4_2.png" /> Poor<br />\
    <img src="styles/legend/RoadCondition_4_3.png" /> <br />' });
var format_RoadClassification_5 = new ol.format.GeoJSON();
var features_RoadClassification_5 = format_RoadClassification_5.readFeatures(json_RoadClassification_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RoadClassification_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadClassification_5.addFeatures(features_RoadClassification_5);
var lyr_RoadClassification_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadClassification_5, 
                style: style_RoadClassification_5,
                popuplayertitle: 'Road Classification',
                interactive: true,
    title: 'Road Classification<br />\
    <img src="styles/legend/RoadClassification_5_0.png" /> Barangay Road<br />\
    <img src="styles/legend/RoadClassification_5_1.png" /> Bypass Road<br />\
    <img src="styles/legend/RoadClassification_5_2.png" /> National Road<br />\
    <img src="styles/legend/RoadClassification_5_3.png" /> Provincial Road<br />\
    <img src="styles/legend/RoadClassification_5_4.png" /> <br />' });
var format_RoadinventoryDatabase_6 = new ol.format.GeoJSON();
var features_RoadinventoryDatabase_6 = format_RoadinventoryDatabase_6.readFeatures(json_RoadinventoryDatabase_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RoadinventoryDatabase_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadinventoryDatabase_6.addFeatures(features_RoadinventoryDatabase_6);
var lyr_RoadinventoryDatabase_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadinventoryDatabase_6, 
                style: style_RoadinventoryDatabase_6,
                popuplayertitle: 'Road inventory Database',
                interactive: true,
                title: '<img src="styles/legend/RoadinventoryDatabase_6.png" /> Road inventory Database'
            });
var group_CRID = new ol.layer.Group({
                                layers: [lyr_Elevation_2,lyr_SurfaceType_3,lyr_RoadCondition_4,lyr_RoadClassification_5,lyr_RoadinventoryDatabase_6,],
                                fold: 'open',
                                title: 'CRID'});
var group_TayabasCityAdmininistrativeMap = new ol.layer.Group({
                                layers: [lyr_TayabasAdministrativeMap_1,],
                                fold: 'open',
                                title: 'Tayabas City Admininistrative Map'});

lyr_GoogleSatellite_0.setVisible(true);lyr_TayabasAdministrativeMap_1.setVisible(true);lyr_Elevation_2.setVisible(false);lyr_SurfaceType_3.setVisible(false);lyr_RoadCondition_4.setVisible(false);lyr_RoadClassification_5.setVisible(false);lyr_RoadinventoryDatabase_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_TayabasCityAdmininistrativeMap,group_CRID];
lyr_TayabasAdministrativeMap_1.set('fieldAliases', {'fid': 'fid', 'ADM4_EN': 'ADM4_EN', 'ADM4_PCODE': 'ADM4_PCODE', 'ADM4_REF': 'ADM4_REF', 'ADM3_EN': 'ADM3_EN', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'AREA_SQKM': 'AREA_SQKM', });
lyr_Elevation_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'order': 'order', 'Length_m': 'Length_m', 'Segment ID': 'Segment ID', 'Barangay': 'Barangay', 'Road Classification': 'Road Classification', 'Width_m': 'Width_m', 'Number of lanes': 'Number of lanes', 'Surface Type': 'Surface Type', 'Number of Lanes with Asphalt': 'Number of Lanes with Asphalt', 'Road Condition': 'Road Condition', 'Road lines': 'Road lines', 'Street lights': 'Street lights', 'Remarks': 'Remarks', 'Struc_type': 'Struc_type', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'Elevation_mean': 'Elevation_mean', 'Elevation_min': 'Elevation_min', 'Elevation_max': 'Elevation_max', 'Elevation_m': 'Elevation_m', });
lyr_SurfaceType_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'order': 'order', 'Length_m': 'Length_m', 'Segment ID': 'Segment ID', 'Barangay': 'Barangay', 'Road Classification': 'Road Classification', 'Width_m': 'Width_m', 'Number of lanes': 'Number of lanes', 'Surface Type': 'Surface Type', 'Number of Lanes with Asphalt': 'Number of Lanes with Asphalt', 'Road Condition': 'Road Condition', 'Road lines': 'Road lines', 'Street lights': 'Street lights', 'Remarks': 'Remarks', 'Struc_type': 'Struc_type', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'Elevation_mean': 'Elevation_mean', 'Elevation_min': 'Elevation_min', 'Elevation_max': 'Elevation_max', 'Elevation_m': 'Elevation_m', });
lyr_RoadCondition_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'order': 'order', 'Length_m': 'Length_m', 'Segment ID': 'Segment ID', 'Barangay': 'Barangay', 'Road Classification': 'Road Classification', 'Width_m': 'Width_m', 'Number of lanes': 'Number of lanes', 'Surface Type': 'Surface Type', 'Number of Lanes with Asphalt': 'Number of Lanes with Asphalt', 'Road Condition': 'Road Condition', 'Road lines': 'Road lines', 'Street lights': 'Street lights', 'Remarks': 'Remarks', 'Struc_type': 'Struc_type', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'Elevation_mean': 'Elevation_mean', 'Elevation_min': 'Elevation_min', 'Elevation_max': 'Elevation_max', 'Elevation_m': 'Elevation_m', });
lyr_RoadClassification_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'order': 'order', 'Length_m': 'Length_m', 'Segment ID': 'Segment ID', 'Barangay': 'Barangay', 'Road Classification': 'Road Classification', 'Width_m': 'Width_m', 'Number of lanes': 'Number of lanes', 'Surface Type': 'Surface Type', 'Number of Lanes with Asphalt': 'Number of Lanes with Asphalt', 'Road Condition': 'Road Condition', 'Road lines': 'Road lines', 'Street lights': 'Street lights', 'Remarks': 'Remarks', 'Struc_type': 'Struc_type', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'Elevation_mean': 'Elevation_mean', 'Elevation_min': 'Elevation_min', 'Elevation_max': 'Elevation_max', 'Elevation_m': 'Elevation_m', });
lyr_RoadinventoryDatabase_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'order': 'order', 'Length_m': 'Length_m', 'Segment ID': 'Segment ID', 'Barangay': 'Barangay', 'Road Classification': 'Road Classification', 'Width_m': 'Width_m', 'Number of lanes': 'Number of lanes', 'Surface Type': 'Surface Type', 'Number of Lanes with Asphalt': 'Number of Lanes with Asphalt', 'Road Condition': 'Road Condition', 'Road lines': 'Road lines', 'Street lights': 'Street lights', 'Remarks': 'Remarks', 'Struc_type': 'Struc_type', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'Elevation_mean': 'Elevation_mean', 'Elevation_min': 'Elevation_min', 'Elevation_max': 'Elevation_max', 'Elevation_m': 'Elevation_m', });
lyr_TayabasAdministrativeMap_1.set('fieldImages', {'fid': 'TextEdit', 'ADM4_EN': 'TextEdit', 'ADM4_PCODE': 'TextEdit', 'ADM4_REF': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'AREA_SQKM': 'TextEdit', });
lyr_Elevation_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'order': 'Range', 'Length_m': 'TextEdit', 'Segment ID': 'TextEdit', 'Barangay': 'TextEdit', 'Road Classification': 'TextEdit', 'Width_m': 'TextEdit', 'Number of lanes': 'TextEdit', 'Surface Type': 'TextEdit', 'Number of Lanes with Asphalt': 'TextEdit', 'Road Condition': 'TextEdit', 'Road lines': 'TextEdit', 'Street lights': 'TextEdit', 'Remarks': 'KeyValue', 'Struc_type': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', 'Elevation_mean': 'TextEdit', 'Elevation_min': 'TextEdit', 'Elevation_max': 'TextEdit', 'Elevation_m': 'TextEdit', });
lyr_SurfaceType_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'order': 'Range', 'Length_m': 'TextEdit', 'Segment ID': 'TextEdit', 'Barangay': 'TextEdit', 'Road Classification': 'TextEdit', 'Width_m': 'TextEdit', 'Number of lanes': 'TextEdit', 'Surface Type': 'TextEdit', 'Number of Lanes with Asphalt': 'TextEdit', 'Road Condition': 'TextEdit', 'Road lines': 'TextEdit', 'Street lights': 'TextEdit', 'Remarks': 'KeyValue', 'Struc_type': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', 'Elevation_mean': 'TextEdit', 'Elevation_min': 'TextEdit', 'Elevation_max': 'TextEdit', 'Elevation_m': 'TextEdit', });
lyr_RoadCondition_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'order': 'Range', 'Length_m': 'TextEdit', 'Segment ID': 'TextEdit', 'Barangay': 'TextEdit', 'Road Classification': 'TextEdit', 'Width_m': 'TextEdit', 'Number of lanes': 'TextEdit', 'Surface Type': 'TextEdit', 'Number of Lanes with Asphalt': 'TextEdit', 'Road Condition': 'TextEdit', 'Road lines': 'TextEdit', 'Street lights': 'TextEdit', 'Remarks': 'KeyValue', 'Struc_type': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', 'Elevation_mean': 'TextEdit', 'Elevation_min': 'TextEdit', 'Elevation_max': 'TextEdit', 'Elevation_m': 'TextEdit', });
lyr_RoadClassification_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'order': 'Range', 'Length_m': 'TextEdit', 'Segment ID': 'TextEdit', 'Barangay': 'TextEdit', 'Road Classification': 'TextEdit', 'Width_m': 'TextEdit', 'Number of lanes': 'TextEdit', 'Surface Type': 'TextEdit', 'Number of Lanes with Asphalt': 'TextEdit', 'Road Condition': 'TextEdit', 'Road lines': 'TextEdit', 'Street lights': 'TextEdit', 'Remarks': 'KeyValue', 'Struc_type': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', 'Elevation_mean': 'TextEdit', 'Elevation_min': 'TextEdit', 'Elevation_max': 'TextEdit', 'Elevation_m': 'TextEdit', });
lyr_RoadinventoryDatabase_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'order': 'Range', 'Length_m': 'TextEdit', 'Segment ID': 'TextEdit', 'Barangay': 'TextEdit', 'Road Classification': 'TextEdit', 'Width_m': 'TextEdit', 'Number of lanes': 'TextEdit', 'Surface Type': 'TextEdit', 'Number of Lanes with Asphalt': 'TextEdit', 'Road Condition': 'TextEdit', 'Road lines': 'TextEdit', 'Street lights': 'TextEdit', 'Remarks': 'KeyValue', 'Struc_type': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', 'Elevation_mean': 'TextEdit', 'Elevation_min': 'TextEdit', 'Elevation_max': 'TextEdit', 'Elevation_m': 'TextEdit', });
lyr_TayabasAdministrativeMap_1.set('fieldLabels', {'fid': 'hidden field', 'ADM4_EN': 'inline label - visible with data', 'ADM4_PCODE': 'hidden field', 'ADM4_REF': 'hidden field', 'ADM3_EN': 'inline label - visible with data', 'ADM3_PCODE': 'hidden field', 'ADM2_EN': 'inline label - visible with data', 'ADM2_PCODE': 'hidden field', 'ADM1_EN': 'inline label - visible with data', 'ADM1_PCODE': 'hidden field', 'ADM0_EN': 'inline label - visible with data', 'ADM0_PCODE': 'hidden field', 'date': 'hidden field', 'validOn': 'hidden field', 'validTo': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'AREA_SQKM': 'inline label - visible with data', });
lyr_Elevation_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'order': 'hidden field', 'Length_m': 'hidden field', 'Segment ID': 'hidden field', 'Barangay': 'hidden field', 'Road Classification': 'hidden field', 'Width_m': 'hidden field', 'Number of lanes': 'hidden field', 'Surface Type': 'hidden field', 'Number of Lanes with Asphalt': 'hidden field', 'Road Condition': 'hidden field', 'Road lines': 'hidden field', 'Street lights': 'hidden field', 'Remarks': 'hidden field', 'Struc_type': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'Z': 'hidden field', 'Elevation_mean': 'inline label - visible with data', 'Elevation_min': 'inline label - visible with data', 'Elevation_max': 'inline label - visible with data', 'Elevation_m': 'inline label - visible with data', });
lyr_SurfaceType_3.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'order': 'hidden field', 'Length_m': 'inline label - visible with data', 'Segment ID': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'Road Classification': 'hidden field', 'Width_m': 'inline label - visible with data', 'Number of lanes': 'hidden field', 'Surface Type': 'inline label - visible with data', 'Number of Lanes with Asphalt': 'hidden field', 'Road Condition': 'hidden field', 'Road lines': 'hidden field', 'Street lights': 'hidden field', 'Remarks': 'hidden field', 'Struc_type': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'Z': 'hidden field', 'Elevation_mean': 'hidden field', 'Elevation_min': 'hidden field', 'Elevation_max': 'hidden field', 'Elevation_m': 'hidden field', });
lyr_RoadCondition_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'order': 'hidden field', 'Length_m': 'inline label - visible with data', 'Segment ID': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'Road Classification': 'hidden field', 'Width_m': 'inline label - visible with data', 'Number of lanes': 'hidden field', 'Surface Type': 'hidden field', 'Number of Lanes with Asphalt': 'hidden field', 'Road Condition': 'inline label - visible with data', 'Road lines': 'hidden field', 'Street lights': 'hidden field', 'Remarks': 'hidden field', 'Struc_type': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'Z': 'hidden field', 'Elevation_mean': 'hidden field', 'Elevation_min': 'hidden field', 'Elevation_max': 'hidden field', 'Elevation_m': 'hidden field', });
lyr_RoadClassification_5.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'order': 'hidden field', 'Length_m': 'inline label - visible with data', 'Segment ID': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'Road Classification': 'inline label - visible with data', 'Width_m': 'inline label - visible with data', 'Number of lanes': 'hidden field', 'Surface Type': 'hidden field', 'Number of Lanes with Asphalt': 'hidden field', 'Road Condition': 'hidden field', 'Road lines': 'hidden field', 'Street lights': 'hidden field', 'Remarks': 'hidden field', 'Struc_type': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'Z': 'hidden field', 'Elevation_mean': 'hidden field', 'Elevation_min': 'hidden field', 'Elevation_max': 'hidden field', 'Elevation_m': 'hidden field', });
lyr_RoadinventoryDatabase_6.set('fieldLabels', {'fid': 'hidden field', 'id': 'inline label - always visible', 'order': 'inline label - visible with data', 'Length_m': 'inline label - visible with data', 'Segment ID': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'Road Classification': 'inline label - visible with data', 'Width_m': 'inline label - visible with data', 'Number of lanes': 'inline label - visible with data', 'Surface Type': 'inline label - visible with data', 'Number of Lanes with Asphalt': 'inline label - visible with data', 'Road Condition': 'inline label - visible with data', 'Road lines': 'inline label - visible with data', 'Street lights': 'inline label - visible with data', 'Remarks': 'inline label - visible with data', 'Struc_type': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Z': 'inline label - always visible', 'Elevation_mean': 'inline label - visible with data', 'Elevation_min': 'inline label - visible with data', 'Elevation_max': 'inline label - visible with data', 'Elevation_m': 'inline label - visible with data', });
lyr_RoadinventoryDatabase_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});