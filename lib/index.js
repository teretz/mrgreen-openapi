/**
  * @module SwaggerPetstoreLib
  *
  * This is a sample Petstore server.  You can find out more about Swagger at [http://swagger.
  * io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const PetController = require('./Controllers/PetController');
const StoreController = require('./Controllers/StoreController');
const UserController = require('./Controllers/UserController');
const IndicatorController = require('./Controllers/IndicatorController');
const Order = require('./Models/Order');
const Category = require('./Models/Category');
const User = require('./Models/User');
const Tag = require('./Models/Tag');
const Indicator = require('./Models/Indicator');
const Pet = require('./Models/Pet');
const ApiResponse = require('./Models/ApiResponse');
const Body = require('./Models/Body');
const Body1 = require('./Models/Body1');
const StatusEnum = require('./Models/StatusEnum');
const Status1Enum = require('./Models/Status1Enum');
const Status3Enum = require('./Models/Status3Enum');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of SwaggerPetstoreLib
    Configuration,
    Environments,
    // controllers of SwaggerPetstoreLib
    PetController,
    StoreController,
    UserController,
    IndicatorController,
    // models of SwaggerPetstoreLib
    Order,
    Category,
    User,
    Tag,
    Indicator,
    Pet,
    ApiResponse,
    Body,
    Body1,
    StatusEnum,
    Status1Enum,
    Status3Enum,
    // exceptions of SwaggerPetstoreLib
    APIException,
};

module.exports = initializer;
