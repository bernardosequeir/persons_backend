(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),o=t(2),l=function(e){var n=e.filter,t=e.handler;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},i=function(e){var n=e.newName,t=e.handleNameChange,a=e.newNumber,u=e.handleNumberChange,c=e.handleSubmit;return r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:t})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{onClick:c,type:"submit"},"add")))},m=t(3),s=t.n(m),f="http://localhost:3001/api/persons",d=function(){return s.a.get(f).then((function(e){return e.data}))},h=function(e){return s.a.post(f,e).then((function(e){return e.data}))},b=function(e,n){return s.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){return s.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},v=function(e){var n=e.persons,t=e.setPersons,a=e.filter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Numbers"),n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})).map((function(e){return r.a.createElement("p",{key:e.name},e.name," ",e.number," ",r.a.createElement("button",{onClick:function(){return function(e){window.confirm("Delete ".concat(e.name," ?"))&&p(e.id).then((function(){t(n.filter((function(n){return n!==e})))}))}(e)}},"delete"))})))},E=function(e){var n=e.message,t=e.success;return null===n?null:r.a.createElement("div",{className:t?"success":"error"},n)},g=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),m=Object(o.a)(c,2),s=m[0],f=m[1],p=Object(a.useState)(""),g=Object(o.a)(p,2),w=g[0],j=g[1],O=Object(a.useState)(""),C=Object(o.a)(O,2),N=C[0],k=C[1],S=Object(a.useState)(null),y=Object(o.a)(S,2),P=y[0],A=y[1],D=Object(a.useState)(!0),I=Object(o.a)(D,2),J=I[0],L=I[1];Object(a.useEffect)((function(){d().then((function(e){console.log(e),u(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(E,{message:P,success:J}),r.a.createElement(l,{filter:N,handler:function(e){return k(e.target.value)}}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(i,{newName:s,handleNameChange:function(e){return f(e.target.value)},newNumber:w,handleNumberChange:function(e){return j(e.target.value)},handleSubmit:function(e){e.preventDefault();var n={name:s,number:w};if(t.every((function(e){return e.name!==s})))h(n).then((function(){u(t.concat(n)),A("Added ".concat(n.name)),L(!0),setTimeout((function(){A(null)}),2e3)}));else if(window.confirm("".concat(s," is already added to the phonebook, replace the old number?"))){var a=t.find((function(e){return e.name===n.name}));console.log(a),b(a.id,n).then((function(e){u(t.map((function(n){return n.id!==a.id?n:e})))})).catch((function(){A("Information of ".concat(a.name," has already been removed from server")),L(!1),u(t.filter((function(e){return e!==a}))),setTimeout((function(){A(null)}),3e3)}))}f(""),j("")}}),r.a.createElement(v,{persons:t,setPersons:u,filter:N}))};t(36);c.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b8c4dc41.chunk.js.map