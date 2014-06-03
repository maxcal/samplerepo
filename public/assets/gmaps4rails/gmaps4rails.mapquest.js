(function(){var t={}.hasOwnProperty,e=function(e,r){function o(){this.constructor=e}for(var n in r)t.call(r,n)&&(e[n]=r[n]);return o.prototype=r.prototype,e.prototype=new o,e.__super__=r.prototype,e};this.Gmaps4RailsMapquest=function(t){function r(){r.__super__.constructor.apply(this,arguments),this.map_options={type:"map"},this.markers_conf={},this.mergeWithDefault("markers_conf"),this.mergeWithDefault("map_options")}return e(r,t),r.prototype.createPoint=function(t,e){return new MQA.Poi({lat:t,lng:e})},r.prototype.createLatLng=function(t,e){return{lat:t,lng:e}},r.prototype.createLatLngBounds=function(){},r.prototype.createMap=function(){var t;return t=new MQA.TileMap(document.getElementById(this.map_options.id),this.map_options.zoom,{lat:this.map_options.center_latitude,lng:this.map_options.center_longitude},this.map_options.type),MQA.withModule("zoomcontrol3",function(){return t.addControl(new MQA.LargeZoomControl3,new MQA.MapCornerPlacement(MQA.MapCorner.TOP_LEFT))}),t},r.prototype.createMarkerImage=function(){},r.prototype.createMarker=function(t){var e,r;return r=new MQA.Poi({lat:t.Lat,lng:t.Lng}),""!==t.marker_picture&&(e=new MQA.Icon(t.marker_picture,t.marker_height,t.marker_width),r.setIcon(e),null!==t.marker_anchor&&r.setBias({x:t.marker_anchor[0],y:t.marker_anchor[1]})),""!==t.shadow_picture&&(e=new MQA.Icon(t.shadow_picture,t.shadow_height,t.shadow_width),r.setShadow(e),null!==t.shadow_anchor&&r.setShadowOffset({x:t.shadow_anchor[0],y:t.shadow_anchor[1]})),this.addToMap(r),r},r.prototype.clearMarkers=function(){var t,e,r,o;for(o=[],e=0,r=markers.length;r>e;e++)t=markers[e],o.push(this.clearMarker(t));return o},r.prototype.showMarkers=function(){var t,e,r,o;for(o=[],e=0,r=markers.length;r>e;e++)t=markers[e],o.push(this.showMarker(t));return o},r.prototype.hideMarkers=function(){var t,e,r,o;for(o=[],e=0,r=markers.length;r>e;e++)t=markers[e],o.push(this.hideMarker(t));return o},r.prototype.clearMarker=function(t){return this.removeFromMap(t.serviceObject)},r.prototype.showMarker=function(){},r.prototype.hideMarker=function(){},r.prototype.extendBoundsWithMarkers=function(){var t,e,r,o,n;if(this.markers.length>=2){for(this.boundsObject=new MQA.RectLL(this.markers[0].serviceObject.latLng,this.markers[1].serviceObject.latLng),o=this.markers,n=[],e=0,r=o.length;r>e;e++)t=o[e],n.push(this.boundsObject.extend(t.serviceObject.latLng));return n}},r.prototype.createClusterer=function(){},r.prototype.clearClusterer=function(){},r.prototype.clusterize=function(){},r.prototype.createInfoWindow=function(t){return t.serviceObject.setInfoTitleHTML(t.description)},r.prototype.fitBounds=function(){return this.markers.length>=2&&this.serviceObject.zoomToRect(this.boundsObject),1===this.markers.length?this.serviceObject.setCenter(this.markers[0].serviceObject.latLng):void 0},r.prototype.centerMapOnUser=function(){return this.serviceObject.setCenter(this.userLocation)},r.prototype.addToMap=function(t){return this.serviceObject.addShape(t)},r.prototype.removeFromMap=function(t){return this.serviceObject.removeShape(t)},r}(Gmaps4Rails)}).call(this);