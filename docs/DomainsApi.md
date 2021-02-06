# Mimepost.DomainsApi

All URIs are relative to *https://api.mimepost.com/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainsGet**](DomainsApi.md#domainsGet) | **GET** /domains/ | Get a list of all the domains
[**domainsIdApprovePost**](DomainsApi.md#domainsIdApprovePost) | **POST** /domains/{id}/approve/ | Submit request for the approval of a verified domain
[**domainsIdDelete**](DomainsApi.md#domainsIdDelete) | **DELETE** /domains/{id} | Remove a single domain
[**domainsIdGet**](DomainsApi.md#domainsIdGet) | **GET** /domains/{id} | Get the details of a single domain
[**domainsIdVerifyDkimPost**](DomainsApi.md#domainsIdVerifyDkimPost) | **POST** /domains/{id}/verify_dkim/ | Request for the verification of DKIM record for a single domain
[**domainsIdVerifySpfPost**](DomainsApi.md#domainsIdVerifySpfPost) | **POST** /domains/{id}/verify_spf/ | Request for the verification of SPF record for a single domain
[**domainsIdVerifyTrackingPost**](DomainsApi.md#domainsIdVerifyTrackingPost) | **POST** /domains/{id}/verify_tracking/ | Request for the verification of tracking record for a single domain
[**domainsPost**](DomainsApi.md#domainsPost) | **POST** /domains/ | Add single domain


<a name="domainsGet"></a>
# **domainsGet**
> ApiResponseDomainsList domainsGet()

Get a list of all the domains

### Example
```javascript
var Mimepost = require('mimepost');
var defaultClient = Mimepost.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Mimepost.DomainsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ApiResponseDomainsList**](ApiResponseDomainsList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsIdApprovePost"></a>
# **domainsIdApprovePost**
> ApiResponse domainsIdApprovePost(id)

Submit request for the approval of a verified domain

### Example
```javascript
var Mimepost = require('mimepost');
var defaultClient = Mimepost.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Mimepost.DomainsApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainsIdApprovePost(id, callback);
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

<a name="domainsIdDelete"></a>
# **domainsIdDelete**
> ApiResponse domainsIdDelete(id)

Remove a single domain

### Example
```javascript
var Mimepost = require('mimepost');
var defaultClient = Mimepost.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Mimepost.DomainsApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainsIdDelete(id, callback);
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

<a name="domainsIdGet"></a>
# **domainsIdGet**
> ApiResponseDomainsList domainsIdGet(id)

Get the details of a single domain

### Example
```javascript
var Mimepost = require('mimepost');
var defaultClient = Mimepost.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Mimepost.DomainsApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainsIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**ApiResponseDomainsList**](ApiResponseDomainsList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsIdVerifyDkimPost"></a>
# **domainsIdVerifyDkimPost**
> ApiResponse domainsIdVerifyDkimPost(id)

Request for the verification of DKIM record for a single domain

### Example
```javascript
var Mimepost = require('mimepost');
var defaultClient = Mimepost.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Mimepost.DomainsApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainsIdVerifyDkimPost(id, callback);
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

<a name="domainsIdVerifySpfPost"></a>
# **domainsIdVerifySpfPost**
> ApiResponse domainsIdVerifySpfPost(id)

Request for the verification of SPF record for a single domain

### Example
```javascript
var Mimepost = require('mimepost');
var defaultClient = Mimepost.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Mimepost.DomainsApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainsIdVerifySpfPost(id, callback);
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

<a name="domainsIdVerifyTrackingPost"></a>
# **domainsIdVerifyTrackingPost**
> ApiResponse domainsIdVerifyTrackingPost(id)

Request for the verification of tracking record for a single domain

### Example
```javascript
var Mimepost = require('mimepost');
var defaultClient = Mimepost.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Mimepost.DomainsApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainsIdVerifyTrackingPost(id, callback);
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

<a name="domainsPost"></a>
# **domainsPost**
> ApiResponse domainsPost(opts)

Add single domain

### Example
```javascript
var Mimepost = require('mimepost');
var defaultClient = Mimepost.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Mimepost.DomainsApi();

var opts = { 
  'domain': new Mimepost.Domain() // Domain | The name of the domain name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | [**Domain**](Domain.md)| The name of the domain name | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

