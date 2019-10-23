# Getting started

This is a sample Petstore server.  You can find
out more about Swagger at
[http://swagger.io](http://swagger.io) or on
[irc.freenode.net, #swagger](http://swagger.io/irc/).


## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Swagger%20Petstore-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Swagger%20Petstore-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `SwaggerPetstoreLib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Swagger%20Petstore-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Swagger%20Petstore-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Swagger%20Petstore-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Swagger%20Petstore-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Swagger PetstoreController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=Swagger%20PetstoreController)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| apiKey | TODO: add a description |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.apiKey = "apiKey";

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [PetController](#pet_controller)
* [StoreController](#store_controller)
* [UserController](#user_controller)
* [IndicatorController](#indicator_controller)

## <a name="pet_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PetController") PetController

### Get singleton instance

The singleton instance of the ``` PetController ``` class can be accessed from the API Client.

```javascript
var controller = lib.PetController;
```

### <a name="update_pet"></a>![Method: ](https://apidocs.io/img/method.png ".PetController.updatePet") updatePet

> Update an existing pet


```javascript
function updatePet(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | Pet object that needs to be added to the store |



#### Example Usage

```javascript

    var body = new Pet({"key":"value"});

    controller.updatePet(body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid ID supplied |
| 404 | Pet not found |
| 405 | Validation exception |




### <a name="add_pet"></a>![Method: ](https://apidocs.io/img/method.png ".PetController.addPet") addPet

> Add a new pet to the store


```javascript
function addPet(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | Pet object that needs to be added to the store |



#### Example Usage

```javascript

    var body = new Pet({"key":"value"});

    controller.addPet(body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 405 | Invalid input |




### <a name="find_pets_by_status"></a>![Method: ](https://apidocs.io/img/method.png ".PetController.findPetsByStatus") findPetsByStatus

> Multiple status values can be provided with comma separated strings


```javascript
function findPetsByStatus(status, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| status |  ``` Required ```  ``` Collection ```  | Status values that need to be considered for filter |



#### Example Usage

```javascript

    var status = [ Object.keys(status3)[0] ];

    controller.findPetsByStatus(status, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid status value |




### <a name="find_pets_by_tags"></a>![Method: ](https://apidocs.io/img/method.png ".PetController.findPetsByTags") findPetsByTags

> Muliple tags can be provided with comma separated strings. Use\ \ tag1, tag2, tag3 for testing.


```javascript
function findPetsByTags(tags, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| tags |  ``` Required ```  ``` Collection ```  | Tags to filter by |



#### Example Usage

```javascript

    var tags = ['tags'];

    controller.findPetsByTags(tags, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid tag value |




### <a name="get_pet_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".PetController.getPetById") getPetById

> Returns a single pet


```javascript
function getPetById(petId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| petId |  ``` Required ```  | ID of pet to return |



#### Example Usage

```javascript

    var petId = 221;

    controller.getPetById(petId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid ID supplied |
| 404 | Pet not found |




### <a name="update_pet_with_form"></a>![Method: ](https://apidocs.io/img/method.png ".PetController.updatePetWithForm") updatePetWithForm

> Updates a pet in the store with form data


```javascript
function updatePetWithForm(petId, name, status, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| petId |  ``` Required ```  | ID of pet that needs to be updated |
| name |  ``` Optional ```  | Updated name of the pet |
| status |  ``` Optional ```  | Updated status of the pet |



#### Example Usage

```javascript

    var petId = 221;
    var name = 'name';
    var status = 'status';

    controller.updatePetWithForm(petId, name, status, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 405 | Invalid input |




### <a name="delete_pet"></a>![Method: ](https://apidocs.io/img/method.png ".PetController.deletePet") deletePet

> Deletes a pet


```javascript
function deletePet(petId, apiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| petId |  ``` Required ```  | Pet id to delete |
| apiKey |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var petId = 221;
    var apiKey = api_key;

    controller.deletePet(petId, apiKey, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid ID supplied |
| 404 | Pet not found |




### <a name="upload_file"></a>![Method: ](https://apidocs.io/img/method.png ".PetController.uploadFile") uploadFile

> uploads an image


```javascript
function uploadFile(petId, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| petId |  ``` Required ```  | ID of pet to update |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    TestHelper.getFilePath('url', function(data) {
        var petId = 221;
    var body = data;

        controller.uploadFile(petId, body, function(error, response, context) {

        });
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="store_controller"></a>![Class: ](https://apidocs.io/img/class.png ".StoreController") StoreController

### Get singleton instance

The singleton instance of the ``` StoreController ``` class can be accessed from the API Client.

```javascript
var controller = lib.StoreController;
```

### <a name="get_inventory"></a>![Method: ](https://apidocs.io/img/method.png ".StoreController.getInventory") getInventory

> Returns a map of status codes to quantities


```javascript
function getInventory(callback)
```

#### Example Usage

```javascript


    controller.getInventory(function(error, response, context) {

    
    });
```



### <a name="create_place_order"></a>![Method: ](https://apidocs.io/img/method.png ".StoreController.createPlaceOrder") createPlaceOrder

> Place an order for a pet


```javascript
function createPlaceOrder(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | order placed for purchasing the pet |



#### Example Usage

```javascript

    var body = new Order({"key":"value"});

    controller.createPlaceOrder(body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Order |




### <a name="get_order_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".StoreController.getOrderById") getOrderById

> For valid response try integer IDs with value >= 1 and <= 10.\ \ Other values will generated exceptions


```javascript
function getOrderById(orderId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| orderId |  ``` Required ```  | ID of pet that needs to be fetched |



#### Example Usage

```javascript

    var orderId = 221;

    controller.getOrderById(orderId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid ID supplied |
| 404 | Order not found |




### <a name="delete_order"></a>![Method: ](https://apidocs.io/img/method.png ".StoreController.deleteOrder") deleteOrder

> For valid response try integer IDs with positive integer value.\ \ Negative or non-integer values will generate API errors


```javascript
function deleteOrder(orderId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| orderId |  ``` Required ```  | ID of the order that needs to be deleted |



#### Example Usage

```javascript

    var orderId = 221;

    controller.deleteOrder(orderId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid ID supplied |
| 404 | Order not found |




[Back to List of Controllers](#list_of_controllers)

## <a name="user_controller"></a>![Class: ](https://apidocs.io/img/class.png ".UserController") UserController

### Get singleton instance

The singleton instance of the ``` UserController ``` class can be accessed from the API Client.

```javascript
var controller = lib.UserController;
```

### <a name="create_user"></a>![Method: ](https://apidocs.io/img/method.png ".UserController.createUser") createUser

> This can only be done by the logged in user.


```javascript
function createUser(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | Created user object |



#### Example Usage

```javascript

    var body = new User({"key":"value"});

    controller.createUser(body, function(error, response, context) {

    
    });
```



### <a name="create_users_with_array_input"></a>![Method: ](https://apidocs.io/img/method.png ".UserController.createUsersWithArrayInput") createUsersWithArrayInput

> Creates list of users with given input array


```javascript
function createUsersWithArrayInput(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  ``` Collection ```  | List of user object |



#### Example Usage

```javascript

    var body = [{"key":"value"}].map(function(elem) {
        return new User(elem);
    });

    controller.createUsersWithArrayInput(body, function(error, response, context) {

    
    });
```



### <a name="create_users_with_list_input"></a>![Method: ](https://apidocs.io/img/method.png ".UserController.createUsersWithListInput") createUsersWithListInput

> Creates list of users with given input array


```javascript
function createUsersWithListInput(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  ``` Collection ```  | List of user object |



#### Example Usage

```javascript

    var body = [{"key":"value"}].map(function(elem) {
        return new User(elem);
    });

    controller.createUsersWithListInput(body, function(error, response, context) {

    
    });
```



### <a name="get_login_user"></a>![Method: ](https://apidocs.io/img/method.png ".UserController.getLoginUser") getLoginUser

> Logs user into the system


```javascript
function getLoginUser(username, password, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| username |  ``` Required ```  | The user name for login |
| password |  ``` Required ```  | The password for login in clear text |



#### Example Usage

```javascript

    var username = 'username';
    var password = 'password';

    controller.getLoginUser(username, password, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid username/password supplied |




### <a name="get_logout_user"></a>![Method: ](https://apidocs.io/img/method.png ".UserController.getLogoutUser") getLogoutUser

> Logs out current logged in user session


```javascript
function getLogoutUser(callback)
```

#### Example Usage

```javascript


    controller.getLogoutUser(function(error, response, context) {

    
    });
```



### <a name="get_user_by_name"></a>![Method: ](https://apidocs.io/img/method.png ".UserController.getUserByName") getUserByName

> Get user by user name


```javascript
function getUserByName(username, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| username |  ``` Required ```  | The name that needs to be fetched. Use user1 for testing. |



#### Example Usage

```javascript

    var username = 'username';

    controller.getUserByName(username, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid username supplied |
| 404 | User not found |




### <a name="update_user"></a>![Method: ](https://apidocs.io/img/method.png ".UserController.updateUser") updateUser

> This can only be done by the logged in user.


```javascript
function updateUser(username, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| username |  ``` Required ```  | name that need to be updated |
| body |  ``` Required ```  | Updated user object |



#### Example Usage

```javascript

    var username = 'username';
    var body = new User({"key":"value"});

    controller.updateUser(username, body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid user supplied |
| 404 | User not found |




### <a name="delete_user"></a>![Method: ](https://apidocs.io/img/method.png ".UserController.deleteUser") deleteUser

> This can only be done by the logged in user.


```javascript
function deleteUser(username, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| username |  ``` Required ```  | The name that needs to be deleted |



#### Example Usage

```javascript

    var username = 'username';

    controller.deleteUser(username, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid username supplied |
| 404 | User not found |




[Back to List of Controllers](#list_of_controllers)

## <a name="indicator_controller"></a>![Class: ](https://apidocs.io/img/class.png ".IndicatorController") IndicatorController

### Get singleton instance

The singleton instance of the ``` IndicatorController ``` class can be accessed from the API Client.

```javascript
var controller = lib.IndicatorController;
```

### <a name="update_indicator"></a>![Method: ](https://apidocs.io/img/method.png ".IndicatorController.updateIndicator") updateIndicator

> Update an existing indicator


```javascript
function updateIndicator(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | Indicator object that needs to be added to the store |



#### Example Usage

```javascript

    var body = new Indicator({"key":"value"});

    controller.updateIndicator(body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid ID supplied |
| 404 | Indicator not found |
| 405 | Validation exception |




### <a name="add_indicator"></a>![Method: ](https://apidocs.io/img/method.png ".IndicatorController.addIndicator") addIndicator

> Add a new indicator to the actions


```javascript
function addIndicator(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | Indicator object that needs to be added to the store |



#### Example Usage

```javascript

    var body = new Indicator({"key":"value"});

    controller.addIndicator(body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 405 | Invalid input |




### <a name="find_indicators_by_status"></a>![Method: ](https://apidocs.io/img/method.png ".IndicatorController.findIndicatorsByStatus") findIndicatorsByStatus

> Multiple status values can be provided with comma separated strings


```javascript
function findIndicatorsByStatus(status, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| status |  ``` Required ```  ``` Collection ```  | Status values that need to be considered for filter |



#### Example Usage

```javascript

    var status = [ Object.keys(status3)[0] ];

    controller.findIndicatorsByStatus(status, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid status value |




### <a name="find_indicators_by_tags"></a>![Method: ](https://apidocs.io/img/method.png ".IndicatorController.findIndicatorsByTags") findIndicatorsByTags

> Muliple tags can be provided with comma separated strings. Use\ \ tag1, tag2, tag3 for testing.


```javascript
function findIndicatorsByTags(tags, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| tags |  ``` Required ```  ``` Collection ```  | Tags to filter by |



#### Example Usage

```javascript

    var tags = ['tags'];

    controller.findIndicatorsByTags(tags, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid tag value |




### <a name="get_indicator_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".IndicatorController.getIndicatorById") getIndicatorById

> Returns a single indicator


```javascript
function getIndicatorById(indicatorId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| indicatorId |  ``` Required ```  | ID of indicator to return |



#### Example Usage

```javascript

    var indicatorId = 221;

    controller.getIndicatorById(indicatorId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid ID supplied |
| 404 | Indicator not found |




### <a name="update_indicator_with_form"></a>![Method: ](https://apidocs.io/img/method.png ".IndicatorController.updateIndicatorWithForm") updateIndicatorWithForm

> Updates a indicator in the store with form data


```javascript
function updateIndicatorWithForm(indicatorId, name, status, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| indicatorId |  ``` Required ```  | ID of indicator that needs to be updated |
| name |  ``` Optional ```  | Updated name of the indicator |
| status |  ``` Optional ```  | Updated status of the indicator |



#### Example Usage

```javascript

    var indicatorId = 221;
    var name = 'name';
    var status = 'status';

    controller.updateIndicatorWithForm(indicatorId, name, status, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 405 | Invalid input |




### <a name="delete_indicator"></a>![Method: ](https://apidocs.io/img/method.png ".IndicatorController.deleteIndicator") deleteIndicator

> Deletes a indicator


```javascript
function deleteIndicator(indicatorId, apiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| indicatorId |  ``` Required ```  | Indicator id to delete |
| apiKey |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var indicatorId = 221;
    var apiKey = api_key;

    controller.deleteIndicator(indicatorId, apiKey, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid ID supplied |
| 404 | Indicator not found |




### <a name="upload_indicator_file"></a>![Method: ](https://apidocs.io/img/method.png ".IndicatorController.uploadIndicatorFile") uploadIndicatorFile

> uploads an image


```javascript
function uploadIndicatorFile(indicatorId, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| indicatorId |  ``` Required ```  | ID of indicator to update |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    TestHelper.getFilePath('url', function(data) {
        var indicatorId = 221;
    var body = data;

        controller.uploadIndicatorFile(indicatorId, body, function(error, response, context) {

        });
    });
```



[Back to List of Controllers](#list_of_controllers)



