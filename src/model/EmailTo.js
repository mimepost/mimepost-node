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
    define(['ApiClient', 'model/EmailMergeVars'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EmailMergeVars'));
  } else {
    // Browser globals (root is window)
    if (!root.Mimepost) {
      root.Mimepost = {};
    }
    root.Mimepost.EmailTo = factory(root.Mimepost.ApiClient, root.Mimepost.EmailMergeVars);
  }
}(this, function(ApiClient, EmailMergeVars) {
  'use strict';

  /**
   * The EmailTo model module.
   * @module model/EmailTo
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>EmailTo</code>.
   * @alias module:model/EmailTo
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailTo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmailTo} obj Optional instance to populate.
   * @return {module:model/EmailTo} The populated <code>EmailTo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('merge_vars'))
        obj.merge_vars = ApiClient.convertToType(data['merge_vars'], [EmailMergeVars]);
    }
    return obj;
  }

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {Array.<module:model/EmailMergeVars>} merge_vars
   */
  exports.prototype.merge_vars = undefined;


  return exports;

}));
