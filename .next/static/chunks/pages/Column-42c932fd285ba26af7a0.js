_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"/Eah":function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Column",function(){return s("1uhO")}])},"1uhO":function(e,t,s){"use strict";s.r(t);var n=s("nKUr"),c=(s("q1tI"),s("YFqc")),i=s.n(c);t.default=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("section",{className:"column-main",children:[Object(n.jsxs)("div",{className:"column-1",children:[Object(n.jsx)("img",{src:"/images/admission.jpg",alt:"admission",className:"sport-image"}),Object(n.jsx)(i.a,{href:"/AdmissionProcess",children:Object(n.jsxs)("div",{className:"column-1-inner",children:[Object(n.jsx)("h1",{children:"ADMISSIONS"}),Object(n.jsx)("p",{children:"Learn about your child's admission requirements, how to apply, and the next steps once you've applied."})]})})]}),Object(n.jsxs)("div",{className:"column-1",children:[Object(n.jsx)("img",{src:"/images/academics.jpg",alt:"admission",className:"sport-image"}),Object(n.jsx)(i.a,{href:"/AcademicFacilities",children:Object(n.jsxs)("div",{className:"column-1-inner",children:[Object(n.jsx)("h1",{children:"Academics"}),Object(n.jsx)("p",{children:"The Rukhmani Devi School is a co-education public school. The school is affiliated to the CBSE Board."})]})})]}),Object(n.jsxs)("div",{className:"column-1",children:[Object(n.jsx)("img",{src:"/images/column-sports.jpg",alt:"admission",className:"sport-image"}),Object(n.jsx)(i.a,{href:"/GamesSports",children:Object(n.jsxs)("div",{className:"column-1-inner",children:[Object(n.jsx)("h1",{children:"Sports"}),Object(n.jsx)("p",{children:"Education at Rukhmani Devi Public School isn't limited to the classroom. It happens throughout campus each and every day through our student activities."})]})})]}),Object(n.jsxs)("div",{className:"column-1",children:[Object(n.jsx)("img",{src:"/images/curricular.jpg",alt:"admission",className:"sport-image"}),Object(n.jsx)(i.a,{href:"/Activities",children:Object(n.jsxs)("div",{className:"column-1-inner",children:[Object(n.jsx)("h1",{children:"co-curricular "}),Object(n.jsx)("p",{children:"Co-Curricular activities are meant to bring social skills, intellectual skills, moral values, personality progress and character appeal in students."})]})})]}),Object(n.jsxs)("div",{className:"column-1",children:[Object(n.jsx)("img",{src:"/images/column-5.jpg",alt:"admission",className:"sport-image"}),Object(n.jsxs)("div",{className:"column-1-inner",children:[Object(n.jsx)("h1",{children:"Boarding"}),Object(n.jsx)("p",{children:"Where you live, plays an important role in child\u2019s development. We ensure the highest form of care is extended to them."})]})]})]})})}},YFqc:function(e,t,s){e.exports=s("cTJO")},cTJO:function(e,t,s){"use strict";var n=s("J4zp"),c=s("284h");t.__esModule=!0,t.default=void 0;var i,r=c(s("q1tI")),a=s("elyg"),o=s("nOHt"),l=new Map,u=window.IntersectionObserver,d={};var h=function(e,t){var s=i||(u?i=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return s?(s.observe(e),l.set(e,t),function(){try{s.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function f(e,t,s,n){(0,a.isLocalURL)(t)&&(e.prefetch(t,s,n).catch((function(e){0})),d[t+"%"+s]=!0)}var m=function(e){var t=!1!==e.prefetch,s=r.default.useState(),c=n(s,2),i=c[0],l=c[1],m=(0,o.useRouter)(),p=m&&m.pathname||"/",j=r.default.useMemo((function(){var t=(0,a.resolveHref)(p,e.href,!0),s=n(t,2),c=s[0],i=s[1];return{href:c,as:e.as?(0,a.resolveHref)(p,e.as):i||c}}),[p,e.href,e.as]),v=j.href,b=j.as;r.default.useEffect((function(){if(t&&u&&i&&i.tagName&&(0,a.isLocalURL)(v)&&!d[v+"%"+b])return h(i,(function(){f(m,v,b)}))}),[t,i,v,b,m]);var g=e.children,O=e.replace,x=e.shallow,y=e.scroll,N=e.locale;"string"===typeof g&&(g=r.default.createElement("a",null,g));var w=r.Children.only(g),E={ref:function(e){e&&l(e),w&&"object"===typeof w&&w.ref&&("function"===typeof w.ref?w.ref(e):"object"===typeof w.ref&&(w.ref.current=e))},onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,s,n,c,i,r,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(s))&&(e.preventDefault(),null==r&&(r=n.indexOf("#")<0),t[c?"replace":"push"](s,n,{shallow:i,locale:o}).then((function(e){e&&r&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,v,b,O,x,y,N)}};return t&&(E.onMouseEnter=function(e){(0,a.isLocalURL)(v)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),f(m,v,b,{priority:!0}))}),(e.passHref||"a"===w.type&&!("href"in w.props))&&(E.href=(0,a.addBasePath)((0,a.addLocale)(b,"undefined"!==typeof N?N:m&&m.locale,m&&m.defaultLocale))),r.default.cloneElement(w,E)};t.default=m}},[["/Eah",0,1,2]]]);