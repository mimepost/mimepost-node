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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountProfile', 'model/AccountProfileResponse', 'model/AccountSettings', 'model/ApiResponse', 'model/ApiResponseAllWebhooks', 'model/ApiResponseAllWebhooksData', 'model/ApiResponseDomainsList', 'model/ApiResponseDomainsListData', 'model/ApiResponseEmaillogs', 'model/ApiResponseEmaillogsData', 'model/ApiResponseSingleWebhooks', 'model/ApiResponseStats', 'model/ApiResponseStatsData', 'model/ApiResponseStatsDataDatewiseSummary', 'model/ApiResponseStatsDataGraphSummary', 'model/ApiResponseStatsDataTotalSummary', 'model/ApiResponseStatsDataTotalSummaryStatus', 'model/ApiResponseWebhooks', 'model/ApiResponseWebhooksData', 'model/Domain', 'model/Email', 'model/EmailAttachments', 'model/EmailGlobalMergeVars', 'model/EmailMergeVars', 'model/EmailTo', 'model/Webhook', 'model/Webhook1', 'api/AccountsApi', 'api/DomainsApi', 'api/EmailsApi', 'api/StatsApi', 'api/WebhooksApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AccountProfile'), require('./model/AccountProfileResponse'), require('./model/AccountSettings'), require('./model/ApiResponse'), require('./model/ApiResponseAllWebhooks'), require('./model/ApiResponseAllWebhooksData'), require('./model/ApiResponseDomainsList'), require('./model/ApiResponseDomainsListData'), require('./model/ApiResponseEmaillogs'), require('./model/ApiResponseEmaillogsData'), require('./model/ApiResponseSingleWebhooks'), require('./model/ApiResponseStats'), require('./model/ApiResponseStatsData'), require('./model/ApiResponseStatsDataDatewiseSummary'), require('./model/ApiResponseStatsDataGraphSummary'), require('./model/ApiResponseStatsDataTotalSummary'), require('./model/ApiResponseStatsDataTotalSummaryStatus'), require('./model/ApiResponseWebhooks'), require('./model/ApiResponseWebhooksData'), require('./model/Domain'), require('./model/Email'), require('./model/EmailAttachments'), require('./model/EmailGlobalMergeVars'), require('./model/EmailMergeVars'), require('./model/EmailTo'), require('./model/Webhook'), require('./model/Webhook1'), require('./api/AccountsApi'), require('./api/DomainsApi'), require('./api/EmailsApi'), require('./api/StatsApi'), require('./api/WebhooksApi'));
  }
}(function(ApiClient, AccountProfile, AccountProfileResponse, AccountSettings, ApiResponse, ApiResponseAllWebhooks, ApiResponseAllWebhooksData, ApiResponseDomainsList, ApiResponseDomainsListData, ApiResponseEmaillogs, ApiResponseEmaillogsData, ApiResponseSingleWebhooks, ApiResponseStats, ApiResponseStatsData, ApiResponseStatsDataDatewiseSummary, ApiResponseStatsDataGraphSummary, ApiResponseStatsDataTotalSummary, ApiResponseStatsDataTotalSummaryStatus, ApiResponseWebhooks, ApiResponseWebhooksData, Domain, Email, EmailAttachments, EmailGlobalMergeVars, EmailMergeVars, EmailTo, Webhook, Webhook1, AccountsApi, DomainsApi, EmailsApi, StatsApi, WebhooksApi) {
  'use strict';

  /**
   * MimePost_API_for_sending_email__You_can_find_out_more_about_MimePost_at__httpsmimepost_com_httpmimepost_com__For_this_sample_you_can_use_the_api_key_special_key_to_test_the_authorization_filters_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Mimepost = require('index'); // See note below*.
   * var xxxSvc = new Mimepost.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Mimepost.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Mimepost.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Mimepost.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AccountProfile model constructor.
     * @property {module:model/AccountProfile}
     */
    AccountProfile: AccountProfile,
    /**
     * The AccountProfileResponse model constructor.
     * @property {module:model/AccountProfileResponse}
     */
    AccountProfileResponse: AccountProfileResponse,
    /**
     * The AccountSettings model constructor.
     * @property {module:model/AccountSettings}
     */
    AccountSettings: AccountSettings,
    /**
     * The ApiResponse model constructor.
     * @property {module:model/ApiResponse}
     */
    ApiResponse: ApiResponse,
    /**
     * The ApiResponseAllWebhooks model constructor.
     * @property {module:model/ApiResponseAllWebhooks}
     */
    ApiResponseAllWebhooks: ApiResponseAllWebhooks,
    /**
     * The ApiResponseAllWebhooksData model constructor.
     * @property {module:model/ApiResponseAllWebhooksData}
     */
    ApiResponseAllWebhooksData: ApiResponseAllWebhooksData,
    /**
     * The ApiResponseDomainsList model constructor.
     * @property {module:model/ApiResponseDomainsList}
     */
    ApiResponseDomainsList: ApiResponseDomainsList,
    /**
     * The ApiResponseDomainsListData model constructor.
     * @property {module:model/ApiResponseDomainsListData}
     */
    ApiResponseDomainsListData: ApiResponseDomainsListData,
    /**
     * The ApiResponseEmaillogs model constructor.
     * @property {module:model/ApiResponseEmaillogs}
     */
    ApiResponseEmaillogs: ApiResponseEmaillogs,
    /**
     * The ApiResponseEmaillogsData model constructor.
     * @property {module:model/ApiResponseEmaillogsData}
     */
    ApiResponseEmaillogsData: ApiResponseEmaillogsData,
    /**
     * The ApiResponseSingleWebhooks model constructor.
     * @property {module:model/ApiResponseSingleWebhooks}
     */
    ApiResponseSingleWebhooks: ApiResponseSingleWebhooks,
    /**
     * The ApiResponseStats model constructor.
     * @property {module:model/ApiResponseStats}
     */
    ApiResponseStats: ApiResponseStats,
    /**
     * The ApiResponseStatsData model constructor.
     * @property {module:model/ApiResponseStatsData}
     */
    ApiResponseStatsData: ApiResponseStatsData,
    /**
     * The ApiResponseStatsDataDatewiseSummary model constructor.
     * @property {module:model/ApiResponseStatsDataDatewiseSummary}
     */
    ApiResponseStatsDataDatewiseSummary: ApiResponseStatsDataDatewiseSummary,
    /**
     * The ApiResponseStatsDataGraphSummary model constructor.
     * @property {module:model/ApiResponseStatsDataGraphSummary}
     */
    ApiResponseStatsDataGraphSummary: ApiResponseStatsDataGraphSummary,
    /**
     * The ApiResponseStatsDataTotalSummary model constructor.
     * @property {module:model/ApiResponseStatsDataTotalSummary}
     */
    ApiResponseStatsDataTotalSummary: ApiResponseStatsDataTotalSummary,
    /**
     * The ApiResponseStatsDataTotalSummaryStatus model constructor.
     * @property {module:model/ApiResponseStatsDataTotalSummaryStatus}
     */
    ApiResponseStatsDataTotalSummaryStatus: ApiResponseStatsDataTotalSummaryStatus,
    /**
     * The ApiResponseWebhooks model constructor.
     * @property {module:model/ApiResponseWebhooks}
     */
    ApiResponseWebhooks: ApiResponseWebhooks,
    /**
     * The ApiResponseWebhooksData model constructor.
     * @property {module:model/ApiResponseWebhooksData}
     */
    ApiResponseWebhooksData: ApiResponseWebhooksData,
    /**
     * The Domain model constructor.
     * @property {module:model/Domain}
     */
    Domain: Domain,
    /**
     * The Email model constructor.
     * @property {module:model/Email}
     */
    Email: Email,
    /**
     * The EmailAttachments model constructor.
     * @property {module:model/EmailAttachments}
     */
    EmailAttachments: EmailAttachments,
    /**
     * The EmailGlobalMergeVars model constructor.
     * @property {module:model/EmailGlobalMergeVars}
     */
    EmailGlobalMergeVars: EmailGlobalMergeVars,
    /**
     * The EmailMergeVars model constructor.
     * @property {module:model/EmailMergeVars}
     */
    EmailMergeVars: EmailMergeVars,
    /**
     * The EmailTo model constructor.
     * @property {module:model/EmailTo}
     */
    EmailTo: EmailTo,
    /**
     * The Webhook model constructor.
     * @property {module:model/Webhook}
     */
    Webhook: Webhook,
    /**
     * The Webhook1 model constructor.
     * @property {module:model/Webhook1}
     */
    Webhook1: Webhook1,
    /**
     * The AccountsApi service constructor.
     * @property {module:api/AccountsApi}
     */
    AccountsApi: AccountsApi,
    /**
     * The DomainsApi service constructor.
     * @property {module:api/DomainsApi}
     */
    DomainsApi: DomainsApi,
    /**
     * The EmailsApi service constructor.
     * @property {module:api/EmailsApi}
     */
    EmailsApi: EmailsApi,
    /**
     * The StatsApi service constructor.
     * @property {module:api/StatsApi}
     */
    StatsApi: StatsApi,
    /**
     * The WebhooksApi service constructor.
     * @property {module:api/WebhooksApi}
     */
    WebhooksApi: WebhooksApi
  };

  return exports;
}));