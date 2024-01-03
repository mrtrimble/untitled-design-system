import{d as a,M as _}from"./index-7Zy8PJUy.js";import{u as c}from"./index-CncQUBch.js";import"./iframe-3CM6wQKo.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-ogXoivrg.js";import"./index-8LwkIDqE.js";import"./index-PPLHz8o0.js";var u={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=a,x=Symbol.for("react.element"),j=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,O=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function f(r,e,p){var t,n={},i=null,m=null;p!==void 0&&(i=""+p),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(m=e.ref);for(t in e)y.call(e,t)&&!h.hasOwnProperty(t)&&(n[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)n[t]===void 0&&(n[t]=e[t]);return{$$typeof:x,type:r,key:i,ref:m,props:n,_owner:O.current}}s.Fragment=j;s.jsx=f;s.jsxs=f;u.exports=s;var o=u.exports;function l(r){const e=Object.assign({h2:"h2"},c(),r.components);return o.jsxs(o.Fragment,{children:[o.jsx(_,{title:"Configure your project"}),`
`,o.jsx(e.h2,{id:"hello-world",children:"Hello World!"})]})}function k(r={}){const{wrapper:e}=Object.assign({},c(),r.components);return e?o.jsx(e,Object.assign({},r,{children:o.jsx(l,r)})):l(r)}export{k as default};
