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
    define(['ApiClient', 'model/ApiResponseEmaillogs', 'model/ApiResponseStats'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseEmaillogs'), require('../model/ApiResponseStats'));
  } else {
    // Browser globals (root is window)
    if (!root.Mimepost) {
      root.Mimepost = {};
    }
    root.Mimepost.StatsApi = factory(root.Mimepost.ApiClient, root.Mimepost.ApiResponseEmaillogs, root.Mimepost.ApiResponseStats);
  }
}(this, function(ApiClient, ApiResponseEmaillogs, ApiResponseStats) {
  'use strict';

  /**
   * Stats service.
   * @module api/StatsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new StatsApi. 
   * @alias module:api/StatsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the emaillogsGet operation.
     * @callback module:api/StatsApi~emaillogsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseEmaillogs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the logs of a particular date
     * @param {String} start_date Start Date in yyyymmdd format example 20190801
     * @param {String} end_date End Date in yyyymmdd format example 20190803
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.status 
     * @param {String} opts.to 
     * @param {Number} opts.page 
     * @param {Number} opts.limit 
     * @param {module:api/StatsApi~emaillogsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseEmaillogs}
     */
    this.emaillogsGet = function(start_date, end_date, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'start_date' is set
      if (start_date === undefined || start_date === null) {
        throw new Error("Missing the required parameter 'start_date' when calling emaillogsGet");
      }

      // verify the required parameter 'end_date' is set
      if (end_date === undefined || end_date === null) {
        throw new Error("Missing the required parameter 'end_date' when calling emaillogsGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'start_date': start_date,
        'end_date': end_date,
        'status': opts['status'],
        'to': opts['to'],
        'page': opts['page'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiResponseEmaillogs;

      return this.apiClient.callApi(
        '/emaillogs/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the statsGet operation.
     * @callback module:api/StatsApi~statsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseStats} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the summary of stats for a range of dates
     * @param {String} start_date Start Date in yyyymmdd format example 20190801
     * @param {String} end_date End Date in yyyymmdd format example 20190803
     * @param {module:api/StatsApi~statsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseStats}
     */
    this.statsGet = function(start_date, end_date, callback) {
      var postBody = null;

      // verify the required parameter 'start_date' is set
      if (start_date === undefined || start_date === null) {
        throw new Error("Missing the required parameter 'start_date' when calling statsGet");
      }

      // verify the required parameter 'end_date' is set
      if (end_date === undefined || end_date === null) {
        throw new Error("Missing the required parameter 'end_date' when calling statsGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'start_date': start_date,
        'end_date': end_date,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiResponseStats;

      return this.apiClient.callApi(
        '/stats/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));