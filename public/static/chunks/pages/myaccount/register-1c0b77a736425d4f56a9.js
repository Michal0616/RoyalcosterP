(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3783],{96587:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return d}});var t=n(67294),s=n(41664),i=n(9008),r=n(11163),l=n(33274),c=n(79352),o=n(36968),u=n(53352),m=n(85893);function d(){var e=(0,u.Ds)().enqueueSnackbar,a=(0,t.useState)(!1),n=a[0],d=a[1];(0,r.useRouter)();return(0,m.jsxs)("div",{className:"login_page d-flex flex-column",children:[(0,m.jsx)(i.default,{children:(0,m.jsx)("title",{children:"My Account Register | Royal Coster"})}),(0,m.jsx)(l.default,{}),(0,m.jsxs)("div",{className:"main-panel d-flex align-items-center justify-content-center",children:[(0,m.jsxs)("div",{className:"main-box round",children:[(0,m.jsx)("h3",{className:"title text-capitalize mb-0",children:"Register"}),(0,m.jsx)("p",{className:"description text-capitalize"}),(0,m.jsxs)("form",{name:"registerForm",onSubmit:function(a){a.preventDefault(),d(!0);var n=document.forms.registerForm,t=new FormData(n);void 0!==localStorage.vip&&t.append("vip","1"),t.append("displayName",n.firstName.value+" "+n.lastName.value),t.append("email",n.email.value),fetch("https://costercatalog.com/api/index.php?request=registerNewCustomer",{method:"post",body:t}).then((function(e){return e.json()})).then((function(a){console.log(a),d(!1);var n="error";"error"==a.status?e(a.error,{variant:n}):"ok"==a.status&&(e("Verification email sent.",{variant:n="success"}),window.location.href="/myaccount/login")}))},children:[(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)("input",{type:"text",name:"firstName",className:"form-control",placeholder:"First Name",required:!0})}),(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)("input",{type:"text",name:"lastName",className:"form-control",placeholder:"Last Name",required:!0})})]}),(0,m.jsx)("input",{type:"email",name:"email",className:"form-control",placeholder:"E-Mail",required:!0}),(0,m.jsxs)("button",{className:"btn btn-login blue-btn d-flex justify-content-between align-items-center",disabled:n,children:["CREATE A NEW ACCOUNT",n?(0,m.jsx)(o.Z,{as:"span",animation:"border",role:"status","aria-hidden":"true"}):(0,m.jsx)(c.nzV,{})]})]}),(0,m.jsx)("div",{className:"login-help-panel d-flex justify-content-between align-items-center pb-4"}),(0,m.jsx)(s.default,{href:"/myaccount/login",children:(0,m.jsxs)("a",{className:"btn btn-create-account d-flex justify-content-between align-items-center",children:["LOG IN",(0,m.jsx)(c.nzV,{})]})})]}),(0,m.jsx)("div",{className:"blur-blue-panel"}),(0,m.jsx)("div",{className:"blur-pink-panel"})]})]})}},93604:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/myaccount/register",function(){return n(96587)}])},36968:function(e,a,n){"use strict";var t=n(87462),s=n(63366),i=n(44036),r=n.n(i),l=n(67294),c=n(76792),o=["bsPrefix","variant","animation","size","children","as","className"],u=l.forwardRef((function(e,a){var n=e.bsPrefix,i=e.variant,u=e.animation,m=e.size,d=e.children,f=e.as,p=void 0===f?"div":f,x=e.className,N=(0,s.Z)(e,o),h=(n=(0,c.vE)(n,"spinner"))+"-"+u;return l.createElement(p,(0,t.Z)({ref:a},N,{className:r()(x,h,m&&h+"-"+m,i&&"text-"+i)}),d)}));u.displayName="Spinner",a.Z=u}},function(e){e.O(0,[9774,2888,179],(function(){return a=93604,e(e.s=a);var a}));var a=e.O();_N_E=a}]);