"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8952],{8952:function(v,s,n){var c=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(s,"__esModule",{value:!0});var o=c(n(23326)),e=n(69209);o.default.defineMode("graphql-variables",function(t){var u=e.onlineParser({eatWhitespace:function(a){return a.eatSpace()},lexRules:d,parseRules:b,editorConfig:{tabSize:t.tabSize}});return{config:t,startState:u.startState,token:u.token,indent:p,electricInput:/^\s*[}\]]/,fold:"brace",closeBrackets:{pairs:'[]{}""',explode:"[]{}"}}});function p(t,u){var a,l,r=t.levels,f=!r||r.length===0?t.indentLevel:r[r.length-1]-(!((a=this.electricInput)===null||a===void 0)&&a.test(u)?1:0);return(f||0)*(((l=this.config)===null||l===void 0?void 0:l.indentUnit)||0)}var d={Punctuation:/^\[|]|\{|\}|:|,/,Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,String:/^"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/,Keyword:/^true|false|null/},b={Document:[e.p("{"),e.list("Variable",e.opt(e.p(","))),e.p("}")],Variable:[i("variable"),e.p(":"),"Value"],Value:function(t){switch(t.kind){case"Number":return"NumberValue";case"String":return"StringValue";case"Punctuation":switch(t.value){case"[":return"ListValue";case"{":return"ObjectValue"}return null;case"Keyword":switch(t.value){case"true":case"false":return"BooleanValue";case"null":return"NullValue"}return null}},NumberValue:[e.t("Number","number")],StringValue:[e.t("String","string")],BooleanValue:[e.t("Keyword","builtin")],NullValue:[e.t("Keyword","keyword")],ListValue:[e.p("["),e.list("Value",e.opt(e.p(","))),e.p("]")],ObjectValue:[e.p("{"),e.list("ObjectField",e.opt(e.p(","))),e.p("}")],ObjectField:[i("attribute"),e.p(":"),"Value"]};function i(t){return{style:t,match:function(u){return u.kind==="String"},update:function(u,a){u.name=a.value.slice(1,-1)}}}}}]);})();

//# sourceMappingURL=8952.674de8af.chunk.js.map