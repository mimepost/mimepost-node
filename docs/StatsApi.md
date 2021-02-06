# Mimepost.StatsApi

All URIs are relative to *https://api.mimepost.com/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**emaillogsGet**](StatsApi.md#emaillogsGet) | **GET** /emaillogs/ | Get the logs of a particular date
[**statsGet**](StatsApi.md#statsGet) | **GET** /stats/ | Get the summary of stats for a range of dates


<a name="emaillogsGet"></a>
# **emaillogsGet**
> ApiResponseEmaillogs emaillogsGet(start_date, end_date, opts)

Get the logs of a particular date

### Example
```javascript
var Mimepost = require('mimepost');
var defaultClient = Mimepost.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Mimepost.StatsApi();

var start_date = "start_date_example"; // String | Start Date in yyyymmdd format example 20190801

var end_date = "end_date_example"; // String | End Date in yyyymmdd format example 20190803

var opts = { 
  'status': "status_example", // String | 
  'to': "to_example", // String | 
  'page': 56, // Number | 
  'limit': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.emaillogsGet(start_date, end_date, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **String**| Start Date in yyyymmdd format example 20190801 | 
 **end_date** | **String**| End Date in yyyymmdd format example 20190803 | 
 **status** | **String**|  | [optional] 
 **to** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**ApiResponseEmaillogs**](ApiResponseEmaillogs.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="statsGet"></a>
# **statsGet**
> ApiResponseStats statsGet(start_date, end_date)

Get the summary of stats for a range of dates

### Example
```javascript
var Mimepost = require('mimepost');
var defaultClient = Mimepost.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Mimepost.StatsApi();

var start_date = "start_date_example"; // String | Start Date in yyyymmdd format example 20190801

var end_date = "end_date_example"; // String | End Date in yyyymmdd format example 20190803


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.statsGet(start_date, end_date, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **String**| Start Date in yyyymmdd format example 20190801 | 
 **end_date** | **String**| End Date in yyyymmdd format example 20190803 | 

### Return type

[**ApiResponseStats**](ApiResponseStats.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

