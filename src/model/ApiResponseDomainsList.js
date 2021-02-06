/*
 * Mimepost
 * MimePost API for sending email. You can find out more about MimePost at [https://mimepost.com](http://mimepost.com). For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: support@mimepost.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiResponseDomainsListData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApiResponseDomainsListData'));
  } else {
    // Browser globals (root is window)
    if (!root.Mimepost) {
      root.Mimepost = {};
    }
    root.Mimepost.ApiResponseDomainsList = factory(root.Mimepost.ApiClient, root.Mimepost.ApiResponseDomainsListData);
  }
}(this, function(ApiClient, ApiResponseDomainsListData) {
  'use strict';

  /**
   * The ApiResponseDomainsList model module.
   * @module model/ApiResponseDomainsList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ApiResponseDomainsList</code>.
   * @alias module:model/ApiResponseDomainsList
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ApiResponseDomainsList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseDomainsList} obj Optional instance to populate.
   * @return {module:model/ApiResponseDomainsList} The populated <code>ApiResponseDomainsList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Number');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [ApiResponseDomainsListData]);
    }
    return obj;
  }

  /**
   * Success status, 0 for failed 1 for success
   * @member {Number} success
   */
  exports.prototype.success = undefined;

  /**
   * @member {String} message
   */
  exports.prototype.message = undefined;

  /**
   * @member {Array.<module:model/ApiResponseDomainsListData>} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
