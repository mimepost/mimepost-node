# Mimepost.AccountsApi

All URIs are relative to *https://api.mimepost.com/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountProfileGet**](AccountsApi.md#accountProfileGet) | **GET** /account/profile/ | Get account profile details
[**accountProfilePost**](AccountsApi.md#accountProfilePost) | **POST** /account/profile/ | Update account profile details
[**settingsGet**](AccountsApi.md#settingsGet) | **GET** /settings/ | Get all the settings
[**settingsPost**](AccountsApi.md#settingsPost) | **POST** /settings/ | Set a setting


<a name="accountProfileGet"></a>
# **accountProfileGet**
> AccountProfileResponse accountProfileGet()

Get account profile details



### Example
```javascript
var Mimepost = require('mimepost');
var defaultClient = Mimepost.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Mimepost.AccountsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountProfileGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AccountProfileResponse**](AccountProfileResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountProfilePost"></a>
# **accountProfilePost**
> ApiResponse accountProfilePost(body)

Update account profile details



### Example
```javascript
var Mimepost = require('mimepost');
var defaultClient = Mimepost.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Mimepost.AccountsApi();

var body = new Mimepost.AccountProfile(); // AccountProfile | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountProfilePost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AccountProfile**](AccountProfile.md)|  | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="settingsGet"></a>
# **settingsGet**
> AccountSettings settingsGet()

Get all the settings



### Example
```javascript
var Mimepost = require('mimepost');
var defaultClient = Mimepost.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Mimepost.AccountsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.settingsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AccountSettings**](AccountSettings.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="settingsPost"></a>
# **settingsPost**
> ApiResponse settingsPost(body)

Set a setting



### Example
```javascript
var Mimepost = require('mimepost');
var defaultClient = Mimepost.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Mimepost.AccountsApi();

var body = new Mimepost.AccountSettings(); // AccountSettings | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.settingsPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AccountSettings**](AccountSettings.md)|  | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

