# Mimepost.WebhooksApi

All URIs are relative to *https://api.mimepost.com/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webhooksGet**](WebhooksApi.md#webhooksGet) | **GET** /webhooks/ | Get the list of all the webhooks
[**webhooksIdDelete**](WebhooksApi.md#webhooksIdDelete) | **DELETE** /webhooks/{id} | Remove a single webhook
[**webhooksIdGet**](WebhooksApi.md#webhooksIdGet) | **GET** /webhooks/{id} | Get the details of a single webhook
[**webhooksIdPut**](WebhooksApi.md#webhooksIdPut) | **PUT** /webhooks/{id} | Update the details of a single webhook
[**webhooksPost**](WebhooksApi.md#webhooksPost) | **POST** /webhooks/ | Add single webhook


<a name="webhooksGet"></a>
# **webhooksGet**
> ApiResponseAllWebhooks webhooksGet()

Get the list of all the webhooks

### Example
```javascript
var Mimepost = require('mimepost');
var defaultClient = Mimepost.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Mimepost.WebhooksApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webhooksGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ApiResponseAllWebhooks**](ApiResponseAllWebhooks.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webhooksIdDelete"></a>
# **webhooksIdDelete**
> ApiResponse webhooksIdDelete(id)

Remove a single webhook

### Example
```javascript
var Mimepost = require('mimepost');
var defaultClient = Mimepost.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Mimepost.WebhooksApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webhooksIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webhooksIdGet"></a>
# **webhooksIdGet**
> ApiResponseSingleWebhooks webhooksIdGet(id)

Get the details of a single webhook

### Example
```javascript
var Mimepost = require('mimepost');
var defaultClient = Mimepost.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Mimepost.WebhooksApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webhooksIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**ApiResponseSingleWebhooks**](ApiResponseSingleWebhooks.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webhooksIdPut"></a>
# **webhooksIdPut**
> ApiResponseSingleWebhooks webhooksIdPut(id, opts)

Update the details of a single webhook

### Example
```javascript
var Mimepost = require('mimepost');
var defaultClient = Mimepost.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Mimepost.WebhooksApi();

var id = 56; // Number | 

var opts = { 
  'webhook': new Mimepost.Webhook1() // Webhook1 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webhooksIdPut(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **webhook** | [**Webhook1**](Webhook1.md)|  | [optional] 

### Return type

[**ApiResponseSingleWebhooks**](ApiResponseSingleWebhooks.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webhooksPost"></a>
# **webhooksPost**
> ApiResponseWebhooks webhooksPost(opts)

Add single webhook

### Example
```javascript
var Mimepost = require('mimepost');
var defaultClient = Mimepost.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Mimepost.WebhooksApi();

var opts = { 
  'webhook': new Mimepost.Webhook() // Webhook | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webhooksPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook** | [**Webhook**](Webhook.md)|  | [optional] 

### Return type

[**ApiResponseWebhooks**](ApiResponseWebhooks.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

