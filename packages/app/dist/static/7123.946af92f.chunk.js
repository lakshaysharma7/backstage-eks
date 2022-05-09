"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7123],{37197:function(b,v){Object.defineProperty(v,"__esModule",{value:!0});function d(h,s){for(var u=[],c=h;c&&c.kind;)u.push(c),c=c.prevState;for(var f=u.length-1;f>=0;f--)s(u[f])}v.default=d},52099:function(b,v){Object.defineProperty(v,"__esModule",{value:!0});function d(l,a,e){var t=h(e,u(a.string));if(!!t){var i=a.type!==null&&/"|\w/.test(a.string[0])?a.start:a.end;return{list:t,from:{line:l.line,ch:i},to:{line:l.line,ch:a.end}}}}v.default=d;function h(l,a){if(!a)return s(l,function(n){return!n.isDeprecated});var e=l.map(function(n){return{proximity:c(u(n.text),a),entry:n}}),t=s(s(e,function(n){return n.proximity<=2}),function(n){return!n.entry.isDeprecated}),i=t.sort(function(n,r){return(n.entry.isDeprecated?1:0)-(r.entry.isDeprecated?1:0)||n.proximity-r.proximity||n.entry.text.length-r.entry.text.length});return i.map(function(n){return n.entry})}function s(l,a){var e=l.filter(a);return e.length===0?l:e}function u(l){return l.toLowerCase().replace(/\W/g,"")}function c(l,a){var e=f(a,l);return l.length>a.length&&(e-=l.length-a.length-1,e+=l.indexOf(a)===0?0:.5),e}function f(l,a){var e,t,i=[],n=l.length,r=a.length;for(e=0;e<=n;e++)i[e]=[e];for(t=1;t<=r;t++)i[0][t]=t;for(e=1;e<=n;e++)for(t=1;t<=r;t++){var o=l[e-1]===a[t-1]?0:1;i[e][t]=Math.min(i[e-1][t]+1,i[e][t-1]+1,i[e-1][t-1]+o),e>1&&t>1&&l[e-1]===a[t-2]&&l[e-2]===a[t-1]&&(i[e][t]=Math.min(i[e][t],i[e-2][t-2]+o))}return i[n][r]}},27123:function(b,v,d){var h=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(v,"__esModule",{value:!0});var s=h(d(23326)),u=d(9677),c=h(d(37197)),f=h(d(52099));s.default.registerHelper("hint","graphql-variables",function(e,t){var i=e.getCursor(),n=e.getTokenAt(i),r=l(i,n,t);return r&&r.list&&r.list.length>0&&(r.from=s.default.Pos(r.from.line,r.from.ch),r.to=s.default.Pos(r.to.line,r.to.ch),s.default.signal(e,"hasCompletion",e,r,n)),r});function l(e,t,i){var n=t.state.kind==="Invalid"?t.state.prevState:t.state,r=n.kind,o=n.step;if(r==="Document"&&o===0)return f.default(e,t,[{text:"{"}]);var y=i.variableToType;if(!!y){var m=a(y,t.state);if(r==="Document"||r==="Variable"&&o===0){var L=Object.keys(y);return f.default(e,t,L.map(function(p){return{text:'"'+p+'": ',type:y[p]}}))}if((r==="ObjectValue"||r==="ObjectField"&&o===0)&&m.fields){var x=Object.keys(m.fields).map(function(p){return m.fields[p]});return f.default(e,t,x.map(function(p){return{text:'"'+p.name+'": ',type:p.type,description:p.description}}))}if(r==="StringValue"||r==="NumberValue"||r==="BooleanValue"||r==="NullValue"||r==="ListValue"&&o===1||r==="ObjectField"&&o===2||r==="Variable"&&o===2){var g=m.type?u.getNamedType(m.type):void 0;if(g instanceof u.GraphQLInputObjectType)return f.default(e,t,[{text:"{"}]);if(g instanceof u.GraphQLEnumType){var O=g.getValues();return f.default(e,t,O.map(function(p){return{text:'"'+p.name+'"',type:g,description:p.description}}))}else if(g===u.GraphQLBoolean)return f.default(e,t,[{text:"true",type:u.GraphQLBoolean,description:"Not false."},{text:"false",type:u.GraphQLBoolean,description:"Not true."}])}}}function a(e,t){var i={type:null,fields:null};return c.default(t,function(n){if(n.kind==="Variable")i.type=e[n.name];else if(n.kind==="ListValue"){var r=i.type?u.getNullableType(i.type):void 0;i.type=r instanceof u.GraphQLList?r.ofType:null}else if(n.kind==="ObjectValue"){var o=i.type?u.getNamedType(i.type):void 0;i.fields=o instanceof u.GraphQLInputObjectType?o.getFields():null}else if(n.kind==="ObjectField"){var y=n.name&&i.fields?i.fields[n.name]:null;i.type=y&&y.type}}),i}}}]);})();

//# sourceMappingURL=7123.946af92f.chunk.js.map