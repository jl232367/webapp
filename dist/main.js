/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//import * as weatherApiInfo from \"./jsmods/apirequest\";\nconst api = \"c0cb2ed6b02d22efdde40b0bedf9268e\";\nconst zip = 37604;\n// function to get the weather by zipcode\nconst getWeatherByZip = async (zipCode) => {\n    const requestByZip = \"http://api.openweathermap.org/data/2.5/weather?q=\" + zip + \"&appid=\" + api; \n    try {\n        const response = await fetch(requestByZip);\n        const weatherData = await response.json();\n        return console.log(weatherData);\n    } catch(err) {\n        alert(err);\n    }\n}\n\n//weatherApiInfo.getWeatherByZip(37604);\n\n//# sourceURL=webpack://librarybuild/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;