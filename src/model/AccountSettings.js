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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Mimepost) {
      root.Mimepost = {};
    }
    root.Mimepost.AccountSettings = factory(root.Mimepost.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AccountSettings model module.
   * @module model/AccountSettings
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>AccountSettings</code>.
   * @alias module:model/AccountSettings
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AccountSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountSettings} obj Optional instance to populate.
   * @return {module:model/AccountSettings} The populated <code>AccountSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }

  /**
   * Name of the config
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} value
   */
  exports.prototype.value = undefined;


  return exports;

}));
