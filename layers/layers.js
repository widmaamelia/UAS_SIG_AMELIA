var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_komplek_1 = new ol.format.GeoJSON();
var features_komplek_1 = format_komplek_1.readFeatures(json_komplek_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_komplek_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_komplek_1.addFeatures(features_komplek_1);
var lyr_komplek_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_komplek_1, 
                style: style_komplek_1,
                popuplayertitle: 'komplek',
                interactive: true,
                title: '<img src="styles/legend/komplek_1.png" /> komplek'
            });
var format_Rumah_2 = new ol.format.GeoJSON();
var features_Rumah_2 = format_Rumah_2.readFeatures(json_Rumah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_2.addFeatures(features_Rumah_2);
var lyr_Rumah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_2, 
                style: style_Rumah_2,
                popuplayertitle: 'Rumah',
                interactive: true,
                title: '<img src="styles/legend/Rumah_2.png" /> Rumah'
            });
var format_Taman_3 = new ol.format.GeoJSON();
var features_Taman_3 = format_Taman_3.readFeatures(json_Taman_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taman_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taman_3.addFeatures(features_Taman_3);
var lyr_Taman_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taman_3, 
                style: style_Taman_3,
                popuplayertitle: 'Taman',
                interactive: true,
                title: '<img src="styles/legend/Taman_3.png" /> Taman'
            });
var format_Masjid_4 = new ol.format.GeoJSON();
var features_Masjid_4 = format_Masjid_4.readFeatures(json_Masjid_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Masjid_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masjid_4.addFeatures(features_Masjid_4);
var lyr_Masjid_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masjid_4, 
                style: style_Masjid_4,
                popuplayertitle: 'Masjid',
                interactive: true,
                title: '<img src="styles/legend/Masjid_4.png" /> Masjid'
            });
var format_Pos_Satpam_5 = new ol.format.GeoJSON();
var features_Pos_Satpam_5 = format_Pos_Satpam_5.readFeatures(json_Pos_Satpam_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pos_Satpam_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pos_Satpam_5.addFeatures(features_Pos_Satpam_5);
var lyr_Pos_Satpam_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pos_Satpam_5, 
                style: style_Pos_Satpam_5,
                popuplayertitle: 'Pos_Satpam',
                interactive: true,
                title: '<img src="styles/legend/Pos_Satpam_5.png" /> Pos_Satpam'
            });
var format_Lapangan_6 = new ol.format.GeoJSON();
var features_Lapangan_6 = format_Lapangan_6.readFeatures(json_Lapangan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_6.addFeatures(features_Lapangan_6);
var lyr_Lapangan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_6, 
                style: style_Lapangan_6,
                popuplayertitle: 'Lapangan',
                interactive: true,
                title: '<img src="styles/legend/Lapangan_6.png" /> Lapangan'
            });
var format_keluarmasuk_7 = new ol.format.GeoJSON();
var features_keluarmasuk_7 = format_keluarmasuk_7.readFeatures(json_keluarmasuk_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_keluarmasuk_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_keluarmasuk_7.addFeatures(features_keluarmasuk_7);
var lyr_keluarmasuk_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_keluarmasuk_7, 
                style: style_keluarmasuk_7,
                popuplayertitle: 'keluar&masuk',
                interactive: true,
                title: '<img src="styles/legend/keluarmasuk_7.png" /> keluar&masuk'
            });
var format_Jalan_8 = new ol.format.GeoJSON();
var features_Jalan_8 = format_Jalan_8.readFeatures(json_Jalan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_8.addFeatures(features_Jalan_8);
var lyr_Jalan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_8, 
                style: style_Jalan_8,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_8.png" /> Jalan'
            });
var format_Warung_9 = new ol.format.GeoJSON();
var features_Warung_9 = format_Warung_9.readFeatures(json_Warung_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Warung_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Warung_9.addFeatures(features_Warung_9);
var lyr_Warung_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Warung_9, 
                style: style_Warung_9,
                popuplayertitle: 'Warung',
                interactive: true,
                title: '<img src="styles/legend/Warung_9.png" /> Warung'
            });
var format_Parkiran_10 = new ol.format.GeoJSON();
var features_Parkiran_10 = format_Parkiran_10.readFeatures(json_Parkiran_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parkiran_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parkiran_10.addFeatures(features_Parkiran_10);
var lyr_Parkiran_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parkiran_10, 
                style: style_Parkiran_10,
                popuplayertitle: 'Parkiran',
                interactive: true,
                title: '<img src="styles/legend/Parkiran_10.png" /> Parkiran'
            });

lyr_OSMStandard_0.setVisible(true);lyr_komplek_1.setVisible(true);lyr_Rumah_2.setVisible(true);lyr_Taman_3.setVisible(true);lyr_Masjid_4.setVisible(true);lyr_Pos_Satpam_5.setVisible(true);lyr_Lapangan_6.setVisible(true);lyr_keluarmasuk_7.setVisible(true);lyr_Jalan_8.setVisible(true);lyr_Warung_9.setVisible(true);lyr_Parkiran_10.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_komplek_1,lyr_Rumah_2,lyr_Taman_3,lyr_Masjid_4,lyr_Pos_Satpam_5,lyr_Lapangan_6,lyr_keluarmasuk_7,lyr_Jalan_8,lyr_Warung_9,lyr_Parkiran_10];
lyr_komplek_1.set('fieldAliases', {'id': 'id', });
lyr_Rumah_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_Taman_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_Masjid_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', 'Luas_': 'Luas_', });
lyr_Pos_Satpam_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', 'Luas_': 'Luas_', });
lyr_Lapangan_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Nama_': 'Nama_', 'Luas': 'Luas', 'Luas_': 'Luas_', });
lyr_keluarmasuk_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_Jalan_8.set('fieldAliases', {'id': 'id', });
lyr_Warung_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_Parkiran_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_komplek_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Rumah_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', });
lyr_Taman_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', });
lyr_Masjid_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', 'Luas_': 'TextEdit', });
lyr_Pos_Satpam_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', 'Luas_': 'TextEdit', });
lyr_Lapangan_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'DateTime', 'Nama_': 'TextEdit', 'Luas': 'TextEdit', 'Luas_': 'TextEdit', });
lyr_keluarmasuk_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', });
lyr_Jalan_8.set('fieldImages', {'id': 'TextEdit', });
lyr_Warung_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', });
lyr_Parkiran_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', });
lyr_komplek_1.set('fieldLabels', {'id': 'hidden field', });
lyr_Rumah_2.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'Luas': 'inline label - always visible', });
lyr_Taman_3.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'Luas': 'inline label - always visible', });
lyr_Masjid_4.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'Luas': 'inline label - always visible', 'Luas_': 'inline label - always visible', });
lyr_Pos_Satpam_5.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'Luas': 'inline label - always visible', 'Luas_': 'inline label - always visible', });
lyr_Lapangan_6.set('fieldLabels', {'id': 'hidden field', 'Nama': 'no label', 'Nama_': 'inline label - always visible', 'Luas': 'no label', 'Luas_': 'inline label - always visible', });
lyr_keluarmasuk_7.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'Luas': 'inline label - always visible', });
lyr_Jalan_8.set('fieldLabels', {'id': 'hidden field', });
lyr_Warung_9.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'Luas': 'inline label - always visible', });
lyr_Parkiran_10.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'Luas': 'inline label - always visible', });
lyr_Parkiran_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});