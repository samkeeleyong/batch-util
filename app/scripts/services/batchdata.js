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
  .factory('BatchData', function () {
    // Service logic
    // ...
    var BatchData = {};

    BatchData.data = {
      header: "",
      details: [],
      trailer: ""
    };

    //record attributes
    BatchData.record_attributes = {
              'CREG-Detail(1001)' : "Record Identifier|Record Number|Action Type|Reference Consumer Alias|Issuer ICA|Issuer Branch|RTA/Funding PAN|Card Type Flag|C-PIN Required?|Expiration Date - RTA/Funding PA|CVC2 - RTA/Funding PAN|MMRP Configuration|C-PIN Translation PAN|First Name|Middle Initial|Last Name|Address Line 1|Address Line 2|Address City|Address Country Subdivision|Address Postal Code|Address Country|birthdate|Custom Fields (1 to 15)".split("|"),
              'CREG-Detail(1000)' : "Record Identifier|Record Number|Action Type|MPG Consumer Alias|MPG Consumer Account Number|Reports To|Mobile Account Consumer Configuration|MSISDN|Consumer Email Address|National ID|National ID Type|Consumer Gender|Consumer Salutation|Consumer First Name|Consumer Middle Initial|Consumer Last Name|Consumer Birth Date|Consumer Contact Number|Consumer Address Line 1 – Home|Consumer Address, City – Home|Consumer Address, State – Home|Consumer Address, Country Code – Home|Consumer Address, Postal Code – Home|Consumer Address Line 1 – Business|Consumer Address, City – Business|Consumer Address, State – Business|Consumer Address, Country Code – Business|Consumer Address, Postal Code - Business|Consumer Identity Verification Flag|Consumer Time Zone|MNO ID|User Interface Channel Type|Initial Password|MoneySend Recipient Upload Flag|Natural PIN|Custom Fields (1 to 15)".split("|"),
              'MREG-Detail' : "Record Identifier AN(4)|Record Number N(6)|Action Type A(1)|Acquirer ICA AN(6)|Acquirer Merchant ID AN(8)|Acquirer Terminal ID AN(8)|Merchant Type AN(2)|Merchant MMRP Flag A(1)|MPG Merchant Account Number AN(12) - Reports To|Reports To N(12)|Acquirer Branch ANS(4)|Pseudo Merchant ID N(15) - Mapping Switch `1|Merchant ID Mapping Switch N(1) - MMRP Flag N|Merchant Category Code N(4)|Merchant Indicator N(1) - MMRP Flag N|MSISDN N(20) - 02-06-11 Email|Merchant Email Address ANS(50) - 02-06-11 MSISDN|Merchant Name ANS(22)|Merchant City ANS(13)|Merchant’s Country Code A(3)|Merchant’s State A(3)|Merchant Address - Business ANS(50)|Merchant Phone -– BusinessANS(20) - MMRP N|Merchant ID Type N(1) -  MMRP Y|Merchant Time Zone ANS(6) - MMRP N|Merchant Currency Code ANS(10)|MNO ID ANS(10) - 02-06-11- MSISDN|User Interface Channel Type  N(3) - 02-06-11|Initial Password ANS(150)|MMRP Config N(6) - 02-06-11|Macro – merchant ID ANS(11) - existing is MMRP N|Biller Code ANS(10) - 03|Tax ID ANS(11)|MPG Merchant Alias ANS(50) - 02-06-11|Acquirer BIN - N(6) - 11|Card PAN - N(19) - 06|Card PAN Alias ANS(13) - 06|Card PAN  Expiry Date N(4) - 06|Natural PIN - N(12) - MPG acts as a Service Manager and Client Authentication Type is Natural PIN)".split("|"),
              'Header' : "Record Identifier AN(4)|Record Number N(6)|File Creation Date (YYYYMMDDHH24MISS) AN(14)|File ID AN(20)|File Name ANS(30)|Program Owner Number ANS(8)|Program Owner Name ANS(35)|Program Sponsor Number ANS (8)|Program Sponsor Name ANS(35)|Program Participant Number ANS (8)|Program Participant Name ANS(35)|File Version ANS(4)|Registration Start Date AN(14)|Registration End Date AN(14)|Run Mode Indicator AN(1)|Client ID ANS(10)|Reserved Field ANS(6)".split("|"),
              'Trailer' : 'Record Identifier|Record Number|Number Of Records In This File'.split('|')
            }

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

    //@param header_record (i.e. 1000, 1001 or 100A)
    //@description - map header record to attributes
    BatchData.get_record_type = function(header_record){
      return header_record === "0000" ? "Header":
			 header_record === "1000" ? "CREG-Detail(1000)":
			 header_record === "1001" ? "CREG-Detail(1001)":
			 header_record === "9999" ? "Trailer":
			 header_record === "2000" ? "MREG-Detail": "Not Found";
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
