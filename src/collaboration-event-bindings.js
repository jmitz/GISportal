//--------------------------------------------------------------------------------------
//  Portal EventManager event bindings
//--------------------------------------------------------------------------------------

gisportal.events.bind("ddslick.open", function(event, obj) {
   var params = {
       "event" : "ddslick.open",
       "obj" : obj.attr('id')
   }
   collaboration._emit('c_event', params);
});

gisportal.events.bind("ddslick.close", function(event, obj) {
   var params = {
       "event" : "ddslick.close",
       "obj" : obj.attr('id')
   }
   collaboration._emit('c_event', params);
});

gisportal.events.bind("ddslick.selectIndex", function(event, obj, index, doCallback) {
   var params = {
       "event" : "ddslick.selectIndex",
       "obj" : obj.attr('id'),
       "index": index,
       "doCallback": doCallback
   }
   collaboration._emit('c_event', params);
});

// user moves the map, or zooms in/out
gisportal.events.bind("map.move", function(event, CentreLonLat, zoomLevel) {
   var params = { 
      "event" : "map.move",
      "centre" : CentreLonLat,
      "zoom": zoomLevel
   }
   collaboration._emit('c_event', params);
});

// Base map changed
gisportal.events.bind('map-setting.basemap-change', function(event, id, value, logmsg) {
   collaboration.setValueById(id, value, logmsg);
});

// Set the graticule visibility
gisportal.events.bind('map-setting.graticules', function(event, setTo) {
   collaboration.setGraticules(setTo);
});

// Country borders changed
gisportal.events.bind("displayoptions.countryborders", function(event, id, value, logmsg) {
   collaboration.setValueById(id, value, logmsg);
});

// new layer added
gisportal.events.bind("layer.addtopanel", function(event, data) {
   var params = {
       "event" : "layer.addtopanel",
       "layer" : data
   }
   collaboration._emit('c_event', params);
});

// layer is selected
gisportal.events.bind("layer.select", function(event, id, layerName) {
    var params = {
        "event" : "layer.select",
        "id" : id,
        "layerName" : layerName
    }
    collaboration._emit('c_event', params);
});

// layer removed from panel
gisportal.events.bind("layer.remove", function(event, id, layerName) {
   var params = {
        "event" : "layer.remove",
        "id" : id,
        "layerName" : layerName
    }
    collaboration._emit('c_event', params);
});

// hide a layer
gisportal.events.bind("layer.hide", function(event, id, layerName) {
   var params = {
        "event" : "layer.hide",
        "id" : id,
        "layerName" : layerName
    }
    collaboration._emit('c_event', params);
});

// hide a layer
gisportal.events.bind("layer.show", function(event, id, layerName) {
   var params = {
        "event" : "layer.show",
        "id" : id,
        "layerName" : layerName
    }
    collaboration._emit('c_event', params);
});

// show a panel
gisportal.events.bind("panels.showpanel", function(event, panelName) {
   var params = {
        "event" : "panels.showpanel",
        "panelName" : panelName
    }
    collaboration._emit('c_event', params);
});

// auto scale a layer
gisportal.events.bind("scalebar.autoscale", function(event, id, force) {
   var params = {
        "event" : "scalebar.autoscale",
        "id" : id,
        "force" : force
    }
    collaboration._emit('c_event', params);
});

// auto scale a layer
gisportal.events.bind("scalebar.reset", function(event, id) {
   var params = {
        "event" : "scalebar.autoscale",
        "id" : id
    }
    collaboration._emit('c_event', params);
});

// jQuery events 


gisportal.events.bind('configurepanel.scroll', function(event, scrollTop) {
  var params = {
    "event": "configurepanel.scroll",
    "scrollTop": scrollTop
  }
  collaboration._emit('c_event', params);
})