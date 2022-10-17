"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
require("./style.css");
const App_vue_1 = require("./App.vue");
require("bootstrap");
require("bootstrap/dist/css/bootstrap.min.css");
const app = (0, vue_1.createApp)({});
(0, vue_1.createApp)(App_vue_1.default).mount('#app');
