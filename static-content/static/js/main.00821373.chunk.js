(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/pirates.dca56646.mp3"},38:function(e,t,a){e.exports=a.p+"static/media/myface.36534e3c.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/pikachu.50e7012b.gif"},40:function(e,t,a){e.exports=a.p+"static/media/tortose.edfa16b9.gif"},41:function(e,t,a){e.exports=a.p+"static/media/giphy.de239fc7.gif"},42:function(e,t,a){e.exports=a.p+"static/media/bg.751d7b6c.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},46:function(e,t,a){e.exports=a(59)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),s=a.n(o),c=a(45),i=a(7),l=a(8),u=a(10),d=a(12),m=a(11),p=a(13),h=a(19),g=function(e){return{type:"PUT_DATA_SIGN_IN",payload:e}},b=function(e,t){return{type:"LOAD_DATA_SIGN_IN",payload:{formData:e,ws:t}}},E=function(){return{type:"REDIRECT_TO_MAIN_PAGE"}},S={name:"",surname:"",login:"",password:"",photo:"",coins:0,accessToken:"",refreshToken:"",isAuthenticated:!1,rememberMe:!1,redirect:void 0,ws:void 0},f={name:"",surname:"",login:"",password:"",repeatPassword:"",ws:void 0},v={slides:void 0,current:0,amount:0,status:!0},y=Object(h.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_DATA_SIGN_IN":return Object(i.a)({},e,{login:t.payload.formData.login,password:t.payload.formData.password,rememberMe:t.payload.formData.rememberMe,ws:t.payload.ws});case"PUT_DATA_SIGN_IN":return Object(i.a)({},e,{name:t.payload.name,surname:t.payload.surname,photo:t.payload.photo,accessToken:t.payload.accessToken,refreshToken:t.payload.refreshToken,isAuthenticated:!0});case"UNAUTHENTICATED_SIGN_IN":return Object(i.a)({},e,{isAuthenticated:!1});case"REDIRECT_TO_MAIN_PAGE":return Object(i.a)({},e,{redirect:"/main"})}return e},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_LOGIN_SIGN_UP":return Object(i.a)({},e,{login:t.payload});case"CHANGE_PASSWORD_SIGN_UP":return Object(i.a)({},e,{password:t.payload});case"CHANGE_REPEAT_PASSWORD_SIGN_UP":return Object(i.a)({},e,{repeatPassword:t.payload});case"CHANGE_NAME_SIGN_UP":return Object(i.a)({},e,{name:t.payload});case"CHANGE_SURNAME_SIGN_UP":return Object(i.a)({},e,{surname:t.payload});case"SEND_DATA_SIGN_UP":return Object(i.a)({},e,{login:t.payload.formData.login,password:t.payload.formData.password,repeatPassword:t.payload.formData.repeatPassword,name:t.payload.formData.name,surname:t.payload.formData.surname,ws:t.payload.ws})}return e},main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_SLIDE_SHOW":return Object(i.a)({},e,{amount:t.payload.length,slides:t.payload});case"NEXT_SLIDE":var a=e.slides;return a[t.payload.current].className="slide",a[t.payload.next].className="slide showing",Object(i.a)({},e,{current:t.payload.next,slides:a,status:!1});case"PREVIOUS_SLIDE":var n=e.slides;return n[t.payload.current].className="slide",n[t.payload.next].className="slide showing",Object(i.a)({},e,{current:t.payload.next,slides:n,status:!1});case"PAUSE_SLIDE_SHOW":return Object(i.a)({},e,{status:!1});case"CHANGE_SLIDE":var r=e.slides;return r[t.payload.current].className="slide",r[t.payload.next].className="slide showing",Object(i.a)({},e,{current:t.payload.next,slides:r})}return e}}),w=a(17),O=a(44),N=a(35),j=a.n(N),_=a(21),k=a(16),D=a(6),A=function(e){var t=e.handler,a=e.touched,n=e.hasError,o=e.meta;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"".concat(o.name)},r.a.createElement("b",null,o.label)),r.a.createElement("input",Object.assign({type:"".concat(o.type),placeholder:"Enter ".concat(o.label),name:"".concat(o.name)},t())),r.a.createElement("span",null,a&&n("required")&&"".concat(o.label," is required")))},T=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).loginForm=D.c.group({login:["",D.d.required],password:["",D.d.required],rememberMe:!1}),a.handleSubmit=function(e){e.preventDefault(),console.log("Form values",a.loginForm.value),a.props.loadDataToRequest(a.loginForm.value,a.props.ws)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return this.props.redirect?r.a.createElement(_.a,{to:this.props.redirect}):r.a.createElement(D.b,{control:this.loginForm,render:function(t){t.get;var a=t.invalid;return r.a.createElement("form",{id:"SignIn",onSubmit:e.handleSubmit},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"LOGIN"),r.a.createElement("p",null,"Please fill in this form to Login."),r.a.createElement("hr",null),r.a.createElement(D.a,{name:"login",render:A,meta:{label:"Login",name:"login",type:"text"}}),r.a.createElement(D.a,{name:"password",render:A,meta:{label:"Password",name:"password",type:"password"}}),r.a.createElement(D.a,{name:"rememberMe",render:function(e){var t=e.handler;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"rememberMe"},r.a.createElement("b",null,"Remember me")),r.a.createElement("input",Object.assign({name:"rememberMe",style:{width:"auto",margin:"1vw"}},t("checkbox"))))}})),"Please fill in this form to create an account. Login",r.a.createElement("button",{type:"submit",disabled:a,className:"registerbtn",onClick:e.onSubmit},"Login"),r.a.createElement("div",{className:"container signin"},r.a.createElement("p",null,"Create an account? ",r.a.createElement(k.b,{to:"/signUp"},"Sign Up"))))}})}}]),t}(r.a.Component),I=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(T,{ws:this.props.ws,redirect:this.props.redirect,unauthenticated:this.props.unauthenticated,putDataFromServer:this.props.putDataFromServer,redirectToMainPage:this.props.redirectToMainPage,loadDataToRequest:this.props.loadDataToRequest})}}]),t}(r.a.Component),C={loadDataToRequest:b,unauthenticated:function(){return{type:"UNAUTHENTICATED_SIGN_IN"}},putDataFromServer:g,redirectToMainPage:E},P=Object(w.b)((function(e){return{name:e.auth.name,surname:e.auth.surname,login:e.auth.login,password:e.auth.password,photo:e.auth.photo,coins:e.auth.coins,accessToken:e.auth.accessToken,refreshToken:e.auth.refreshToken,redirect:e.auth.redirect}}),C)(I),x=function(e){var t=e.handler,a=e.touched,n=e.hasError,o=e.meta;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"".concat(o.name)},r.a.createElement("b",null,o.label)),r.a.createElement("input",Object.assign({type:"".concat(o.type),placeholder:"Enter ".concat(o.label),name:"".concat(o.name)},t())),r.a.createElement("span",null,a&&n("required")&&"".concat(o.label," is required")))},G=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).registrationForm=D.c.group({login:["",D.d.required],password:["",D.d.required],repeatPassword:["",D.d.required],name:["",D.d.required],surname:["",D.d.required],rememberMe:!1}),a.handleSubmit=function(e){e.preventDefault(),console.log("Form values",a.registrationForm.value),a.props.sendDataToServer(a.registrationForm.value,a.props.ws)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return this.props.redirect?r.a.createElement(_.a,{to:this.props.redirect}):r.a.createElement(D.b,{control:this.registrationForm,render:function(t){t.get;var a=t.invalid;return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"REGISTRATION"),r.a.createElement("p",null,"Please fill in this form to create an account."),r.a.createElement("hr",null),r.a.createElement(D.a,{name:"login",render:x,meta:{label:"Login",name:"login",type:"text"}}),r.a.createElement(D.a,{name:"password",render:x,meta:{label:"Password",name:"password",type:"password"}}),r.a.createElement(D.a,{name:"repeatPassword",render:x,meta:{label:"Repeat password",name:"repeatPassword",type:"password"}}),r.a.createElement(D.a,{name:"name",render:x,meta:{label:"Name",name:"name",type:"text"}}),r.a.createElement(D.a,{name:"surname",type:"text",render:x,meta:{label:"Surname",name:"surname",type:"text"}}),r.a.createElement(D.a,{name:"rememberMe",render:function(e){var t=e.handler;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"rememberMe"},r.a.createElement("b",null,"Remember me")),r.a.createElement("input",Object.assign({name:"rememberMe",style:{width:"auto",margin:"1vw"}},t("checkbox"))))}})),r.a.createElement("hr",null),r.a.createElement("p",null,"By creating an account you agree to our ",r.a.createElement("a",{href:"#"},"Terms & Privacy"),"."),r.a.createElement("button",{type:"submit",disabled:a,className:"registerbtn",onClick:e.onSubmit},"Register"),r.a.createElement("div",{className:"container signin"},r.a.createElement("p",null,"Already have an account? ",r.a.createElement(k.b,{to:"/"},"Sign in"))))}})}}]),t}(r.a.Component),M=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(G,{ws:this.props.ws,sendDataToServer:this.props.sendDataToServer,redirect:this.props.redirect})}}]),t}(r.a.Component),L={sendDataToServer:function(e,t){return{type:"SEND_DATA_SIGN_UP",payload:{formData:e,ws:t}}}},R=Object(w.b)((function(e){return{login:e.registration.login,password:e.registration.password,repeatPassword:e.registration.repeatPassword,name:e.registration.name,surname:e.registration.surname,redirect:e.auth.redirect}}),L)(M),U=function(){var e=Object(w.c)();return r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"registerbtn",onClick:function(){return e(b())}},"Register"))},F=a(20),q=a.n(F),H=a(32),B=q.a.mark(V),W=q.a.mark(X),J=q.a.mark(K),z=q.a.mark(Q);function V(){var e,t,a;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log("workerLoadSignInData is working"),(e=Se.getState().auth).type="auth",console.log("latestStateAuth: ",e),t=e.ws,a=JSON.stringify(e),console.log("\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0444\u043e\u0440\u043c\u044b \u0432\u0445\u043e\u0434\u0430"),console.log("Form data: ",a),t.send(a);case 9:case"end":return n.stop()}}),B)}function X(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Data should be loaded"),e.next=3,Object(H.a)("LOAD_DATA_SIGN_IN",V);case 3:case"end":return e.stop()}}),W)}function K(){var e,t,a;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log("workerLoadSignUpData is working"),(e=Se.getState().registration).type="registration",console.log("latestStateReg: ",e),t=e.ws,a=JSON.stringify(e),console.log("\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0444\u043e\u0440\u043c\u044b \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"),console.log("Form data: ",a),t.send(a);case 9:case"end":return n.stop()}}),J)}function Q(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Data should be loaded"),e.next=3,Object(H.a)("SEND_DATA_SIGN_UP",K);case 3:case"end":return e.stop()}}),z)}var Y=a(22),Z=a(37),$=a.n(Z),ee=a(38),te=a.n(ee),ae=a(39),ne=a.n(ae),re=a(40),oe=a.n(re),se=a(41),ce=a.n(se),ie=a(42),le=a.n(ie),ue=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).startGame=a.startGame.bind(Object(Y.a)(a)),a.onLoadSlideShow=a.onLoadSlideShow.bind(Object(Y.a)(a)),a.onPreviousSlideBtnClick=a.onPreviousSlideBtnClick.bind(Object(Y.a)(a)),a.onNextSlideBtnClick=a.onNextSlideBtnClick.bind(Object(Y.a)(a)),a.changeSlide=a.changeSlide.bind(Object(Y.a)(a)),a.state={slideIntervalTimeout:4e3},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"startGame",value:function(e){e.preventDefault(),console.log("Current: ",Se.getState().main.current),this.props.changeSlide(Se.getState().main.current+1)}},{key:"onPreviousSlideBtnClick",value:function(){this.props.previousSlide(),console.log("Current: ",Se.getState().main.current)}},{key:"onNextSlideBtnClick",value:function(){this.props.nextSlide(),console.log("Current: ",Se.getState().main.current)}},{key:"onLoadSlideShow",value:function(){this.props.loadSlideShow(document.querySelectorAll("#slides .slide"))}}]),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){console.log("Component Did Update"),this.props.changeSlide(Se.getState().main.current+1),console.log("Current: ",Se.getState().main.current)}},{key:"changeSlide",value:function(){!0===Se.getState().main.status&&this.props.changeSlide(Se.getState().main.current+1)}},{key:"componentDidMount",value:function(){this.onLoadSlideShow(),this.componentDidUpdate();setInterval(this.changeSlide,this.state.slideIntervalTimeout)}},{key:"render",value:function(){return document.body.style.background="url(".concat(le.a,") no-repeat"),document.body.style.backgroundSize="cover",console.log("RENDER"),r.a.createElement("div",null,r.a.createElement("div",{id:"authorized_user"},r.a.createElement("audio",{id:"bgSound",src:$.a,autoPlay:!0,loop:!0,controls:!0}),r.a.createElement(k.b,{to:"/profile",className:"userMenuElements"},"My Profile"),r.a.createElement(k.b,{to:"/messages",className:"userMenuElements"},"My Messages"),r.a.createElement(k.b,{to:"/events",id:"events"},"My Events"),r.a.createElement("p",{id:"username"},"\u0418\u0432\u0430\u043d \u0421\u0443\u043a\u0430\u0447"),r.a.createElement(k.b,{to:"/addPhoto",id:"linkToChangePhoto"},r.a.createElement("img",{src:te.a,id:"userPhoto"}))),r.a.createElement("div",{id:"prompt"},"CHOOSE POKEMON"),r.a.createElement("div",{id:"slideShow"},r.a.createElement("button",{className:"controls",id:"previous",onClick:this.onPreviousSlideBtnClick},"<"),r.a.createElement("ul",{id:"slides"},r.a.createElement("li",{className:"slide showing"},r.a.createElement("img",{src:ne.a,width:"100%",height:"100%"})),r.a.createElement("li",{className:"slide"},r.a.createElement("img",{src:oe.a,width:"100%",height:"100%"})),r.a.createElement("li",{className:"slide"},r.a.createElement("img",{src:ce.a,width:"100%",height:"100%"}))),r.a.createElement("button",{className:"controls",id:"next",onClick:this.onNextSlideBtnClick},">")),r.a.createElement("button",{id:"start",onClick:this.startGame},"START"))}}]),t}(r.a.Component),de=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(ue,{loadSlideShow:this.props.loadSlideShow,nextSlide:this.props.nextSlide,previousSlide:this.props.previousSlide,pauseSlideShow:this.props.pauseSlideShow,changeSlide:this.props.changeSlide})}}]),t}(r.a.Component),me={loadSlideShow:function(e){return{type:"LOAD_SLIDE_SHOW",payload:e}},nextSlide:function(){var e=Se.getState().main.slides,t=Se.getState().main.current;return{type:"NEXT_SLIDE",payload:{next:(t+1)%e.length,current:t}}},previousSlide:function(){var e=Se.getState().main.slides.length,t=Se.getState().main.current;return{type:"PREVIOUS_SLIDE",payload:{next:(Se.getState().main.current-1+e)%e,current:t}}},pauseSlideShow:function(){return{type:"PAUSE_SLIDE_SHOW"}},changeSlide:function(e){return{type:"CHANGE_SLIDE",payload:{next:e%Se.getState().main.slides.length,current:Se.getState().main.current}}}},pe=Object(w.b)((function(e){return{name:e.auth.name,surname:e.auth.surname,login:e.auth.login,password:e.auth.password,photo:e.auth.photo,coins:e.auth.coins,accessToken:e.auth.accessToken,refreshToken:e.auth.refreshToken}}),me)(de),he=function e(t){Object(l.a)(this,e);var a=new WebSocket(t);this.ws=a},ge=a(43),be=a.n(ge),Ee=(a(57),Object(O.a)()),Se=Object(h.e)(y,Object(h.a)(j.a,Ee)),fe=function(e){function t(e){var a;return Object(l.a)(this,t),a=Object(d.a)(this,Object(m.a)(t).call(this,e)),console.log("Creation wsc in App.jsx"),a.state={ws:new he("ws://localhost:8081/ws").ws,connected:!1},Ee.run(X),Ee.run(Q),a.onClose(),a.Connect(),a.getMessages(),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"Connect",value:function(){var e=this;this.state.ws.onopen=function(){console.log("Connected"),e.setState(Object(i.a)({},e.state,{connected:!0})),e.render()}}},{key:"onClose",value:function(){var e=this;this.state.ws.onclose=function(t){t.wasClean?alert("[close] Connection closed cleanly, code=".concat(t.code," reason=").concat(t.reason)):setTimeout((function(){console.log("Connection died");var t=new WebSocket(e.state.ws.url);t.onclose=e.state.ws.onclose,t.onopen=e.state.ws.onopen,t.onmessage=e.state.ws.onmessage,e.setState({ws:t,connected:!1})}),1e3)}}},{key:"getMessages",value:function(){var e=this.state.ws;e.onmessage=function(t){console.log("Message has been received"),console.log(t.data);var a=JSON.parse(t.data);switch(a.type){case"auth":var n=JSON.parse(a.content);Se.dispatch(g(n)),Se.dispatch({type:"REDIRECT_TO_MAIN_PAGE"});break;case"registration":Se.dispatch(b(Se.getState().registration,e));break;case"error":alert(a.content);break;default:alert("Unexpected type")}}}},{key:"render",value:function(){return!1===this.state.connected?r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:be.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443"))):r.a.createElement(w.a,{store:Se},r.a.createElement(k.a,null,r.a.createElement(_.d,null,r.a.createElement(_.b,{exact:!0,path:"/"},r.a.createElement(P,{ws:this.state.ws})),r.a.createElement(_.b,{exact:!0,path:"/signUp"},r.a.createElement(R,{ws:this.state.ws})),r.a.createElement(_.b,{exact:!0,path:"/connected"},r.a.createElement(U,null)),r.a.createElement(ve,{path:"/main"},r.a.createElement(pe,null)))))}}]),t}(r.a.Component);function ve(e){var t=e.children,a=Object(c.a)(e,["children"]);return r.a.createElement(_.b,Object.assign({},a,{render:function(e){return!0===Se.getState().auth.isAuthenticated?t:r.a.createElement(_.a,{to:{pathname:"/"}})}}))}a(58);s.a.render(r.a.createElement(fe,null),document.getElementById("form-container"))}},[[46,1,2]]]);
//# sourceMappingURL=main.00821373.chunk.js.map