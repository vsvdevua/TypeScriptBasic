!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){function e(){this.message="Обязательное значение"}return e.prototype.validate=function(e){return""===e},e}(),i=function(){function e(){this.message="Значение должно быть числом"}return e.prototype.validate=function(e){return!/\d+/.test(e)},e}(),o=function(){function e(){this.message="Значение должно быть email адресом"}return e.prototype.validate=function(e){return!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(e)},e}(),a=function(){function e(){}return e.initialize=function(){e.validators.required=new r,e.validators.number=new i,e.validators.email=new o,e.initialize=function(){}},e.select=function(t){var n=e.validators[t];if(n)return n;throw Error("Не найден валидатор "+t)},e.validators={},e}(),u=function(){function e(e){this.config=e,a.initialize()}return e.prototype.validate=function(e){var t=[];for(var n in e)if(e.hasOwnProperty(n)){var r=this.config[n];if(!r)continue;var i=a.select(r);if(i.validate(e[n])){var o="Не правильное значение для "+n+", "+i.message;t.push(o)}}return{valid:0==t.length,errors:t}},e}(),l=(function(){}(),new u({firstName:"required",lastName:"required",age:"number",email:"email"})),s=l.validate({firstName:"Ivan",lastName:"Ivaonv",age:25,email:"ivanov@example.com"});console.log(s.valid),console.log(s.errors),s=l.validate({firstName:"Ivan",lastName:"",age:"qwe",email:"example"}),console.log(s.valid),console.log(s.errors)}]);