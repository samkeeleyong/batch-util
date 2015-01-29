'use strict';

/**
 * @ngdoc service
 * @name batchUtilApp.BatchData
 * @description
 * Contain Batch File Information
 * Factory in the batchUtilApp.
 * @author Sam Ong
 */
angular.module('batchUtilApp')
  .factory('BatchData', function ($firebase, firebaseUtil) {
    // Service logic
    // ...
    var BatchData = {};

	//buffer for viewed data
    BatchData.data = {
      header: "",
      details: [],
      trailer: ""
    };

	//experimental
	BatchData.set_market = function(market){
		BatchData.selected_market = market;
		return BatchData.selected_market;
	}

	//@param type_name:string the name of the type (e.g. 1000 or 100A)
	//@desc find and return the type:object 
	BatchData.find_type = function(type_name){
		var types = BatchData.selected_market.types;
		// refactor to become functional
		for(var i = 0; i < types.length; i++){
			if(types[i].name == type_name){
				return types[i];
			}
		}
	}
	//experimental

    //@param header - Header record or line
    BatchData.add_header = function(header){
      BatchData.data.header = header.split('|');
    }

    //@param detail - Each detail record or line
    BatchData.add_details = function(detail){
      BatchData.data.details.push(detail.split('|'));
    }

    BatchData.clear_details = function(){
      BatchData.data.details = [];
    }

    //@param trailer - Trailer record or line
    BatchData.add_trailer = function(trailer){
      BatchData.data.trailer = trailer.split('|');
    }

    BatchData.get_details = function(){
      return BatchData.data.details;
    }

    BatchData.get_record_attributes = function(){
      return BatchData.record_attributes;
    }
    
    //return factory
    return BatchData;
  });
