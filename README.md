# mimepost

Mimepost - JavaScript client for mimepost
MimePost API for sending email. You can find out more about MimePost at [https://mimepost.com](http://mimepost.com). For this sample, you can use the api key `special-key` to test the authorization filters.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.1.0
- Package version: 0.1.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install mimepost --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your mimepost from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('mimepost')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/mimepost/mimepost-node
then install it via:

```shell
    npm install mimepost/mimepost-node --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Mimepost = require('mimepost');

var defaultClient = Mimepost.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['X-Auth-Token'] = "Token"

var api = new Mimepost.AccountsApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.accountProfileGet(callback);

```
## Send Email Example
```javascript

var Mimepost = require('mimepost');

var defaultClient = Mimepost.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR_API_KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MimePost.EmailsApi();

var body = new MimePost.Email(); // Email | Single Email object 
var to = new MimePost.EmailTo() // To Email | Single To Email object

to.email = "TO_EMAIL" 


body.html = "<h1>Html Code OR Text</h1>" 
body.from_email = "FROM_EMAIL"
body.from_name = "FROM_NAME"
body.subject = "SUBJECT"
body.to = [to]


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + response.text);
  }
};
apiInstance.sendEmail(body, callback);

```



## Documentation for API Endpoints

All URIs are relative to *https://api.mimepost.com/v1/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Mimepost.AccountsApi* | [**accountProfileGet**](docs/AccountsApi.md#accountProfileGet) | **GET** /account/profile/ | Get account profile details
*Mimepost.AccountsApi* | [**accountProfilePost**](docs/AccountsApi.md#accountProfilePost) | **POST** /account/profile/ | Update account profile details
*Mimepost.AccountsApi* | [**settingsGet**](docs/AccountsApi.md#settingsGet) | **GET** /settings/ | Get all the settings
*Mimepost.AccountsApi* | [**settingsPost**](docs/AccountsApi.md#settingsPost) | **POST** /settings/ | Set a setting
*Mimepost.DomainsApi* | [**domainsGet**](docs/DomainsApi.md#domainsGet) | **GET** /domains/ | Get a list of all the domains
*Mimepost.DomainsApi* | [**domainsIdApprovePost**](docs/DomainsApi.md#domainsIdApprovePost) | **POST** /domains/{id}/approve/ | Submit request for the approval of a verified domain
*Mimepost.DomainsApi* | [**domainsIdDelete**](docs/DomainsApi.md#domainsIdDelete) | **DELETE** /domains/{id} | Remove a single domain
*Mimepost.DomainsApi* | [**domainsIdGet**](docs/DomainsApi.md#domainsIdGet) | **GET** /domains/{id} | Get the details of a single domain
*Mimepost.DomainsApi* | [**domainsIdVerifyDkimPost**](docs/DomainsApi.md#domainsIdVerifyDkimPost) | **POST** /domains/{id}/verify_dkim/ | Request for the verification of DKIM record for a single domain
*Mimepost.DomainsApi* | [**domainsIdVerifySpfPost**](docs/DomainsApi.md#domainsIdVerifySpfPost) | **POST** /domains/{id}/verify_spf/ | Request for the verification of SPF record for a single domain
*Mimepost.DomainsApi* | [**domainsIdVerifyTrackingPost**](docs/DomainsApi.md#domainsIdVerifyTrackingPost) | **POST** /domains/{id}/verify_tracking/ | Request for the verification of tracking record for a single domain
*Mimepost.DomainsApi* | [**domainsPost**](docs/DomainsApi.md#domainsPost) | **POST** /domains/ | Add single domain
*Mimepost.EmailsApi* | [**sendEmail**](docs/EmailsApi.md#sendEmail) | **POST** /emails/ | Send email
*Mimepost.StatsApi* | [**emaillogsGet**](docs/StatsApi.md#emaillogsGet) | **GET** /emaillogs/ | Get the logs of a particular date
*Mimepost.StatsApi* | [**statsGet**](docs/StatsApi.md#statsGet) | **GET** /stats/ | Get the summary of stats for a range of dates
*Mimepost.WebhooksApi* | [**webhooksGet**](docs/WebhooksApi.md#webhooksGet) | **GET** /webhooks/ | Get the list of all the webhooks
*Mimepost.WebhooksApi* | [**webhooksIdDelete**](docs/WebhooksApi.md#webhooksIdDelete) | **DELETE** /webhooks/{id} | Remove a single webhook
*Mimepost.WebhooksApi* | [**webhooksIdGet**](docs/WebhooksApi.md#webhooksIdGet) | **GET** /webhooks/{id} | Get the details of a single webhook
*Mimepost.WebhooksApi* | [**webhooksIdPut**](docs/WebhooksApi.md#webhooksIdPut) | **PUT** /webhooks/{id} | Update the details of a single webhook
*Mimepost.WebhooksApi* | [**webhooksPost**](docs/WebhooksApi.md#webhooksPost) | **POST** /webhooks/ | Add single webhook


## Documentation for Models

 - [Mimepost.AccountProfile](docs/AccountProfile.md)
 - [Mimepost.AccountProfileResponse](docs/AccountProfileResponse.md)
 - [Mimepost.AccountSettings](docs/AccountSettings.md)
 - [Mimepost.ApiResponse](docs/ApiResponse.md)
 - [Mimepost.ApiResponseAllWebhooks](docs/ApiResponseAllWebhooks.md)
 - [Mimepost.ApiResponseAllWebhooksData](docs/ApiResponseAllWebhooksData.md)
 - [Mimepost.ApiResponseDomainsList](docs/ApiResponseDomainsList.md)
 - [Mimepost.ApiResponseDomainsListData](docs/ApiResponseDomainsListData.md)
 - [Mimepost.ApiResponseEmaillogs](docs/ApiResponseEmaillogs.md)
 - [Mimepost.ApiResponseEmaillogsData](docs/ApiResponseEmaillogsData.md)
 - [Mimepost.ApiResponseSingleWebhooks](docs/ApiResponseSingleWebhooks.md)
 - [Mimepost.ApiResponseStats](docs/ApiResponseStats.md)
 - [Mimepost.ApiResponseStatsData](docs/ApiResponseStatsData.md)
 - [Mimepost.ApiResponseStatsDataDatewiseSummary](docs/ApiResponseStatsDataDatewiseSummary.md)
 - [Mimepost.ApiResponseStatsDataGraphSummary](docs/ApiResponseStatsDataGraphSummary.md)
 - [Mimepost.ApiResponseStatsDataTotalSummary](docs/ApiResponseStatsDataTotalSummary.md)
 - [Mimepost.ApiResponseStatsDataTotalSummaryStatus](docs/ApiResponseStatsDataTotalSummaryStatus.md)
 - [Mimepost.ApiResponseWebhooks](docs/ApiResponseWebhooks.md)
 - [Mimepost.ApiResponseWebhooksData](docs/ApiResponseWebhooksData.md)
 - [Mimepost.Domain](docs/Domain.md)
 - [Mimepost.Email](docs/Email.md)
 - [Mimepost.EmailAttachments](docs/EmailAttachments.md)
 - [Mimepost.EmailGlobalMergeVars](docs/EmailGlobalMergeVars.md)
 - [Mimepost.EmailMergeVars](docs/EmailMergeVars.md)
 - [Mimepost.EmailTo](docs/EmailTo.md)
 - [Mimepost.Webhook](docs/Webhook.md)
 - [Mimepost.Webhook1](docs/Webhook1.md)


## Documentation for Authorization


### api_key

- **Type**: API key
- **API key parameter name**: X-Auth-Token
- **Location**: HTTP header

