(this["webpackJsonpkardian-frontend"]=this["webpackJsonpkardian-frontend"]||[]).push([[13],{260:function(e,t,n){"use strict";var i=n(4),a=(n(0),n(24)),r=n(240),o=Object(r.a)((function(e){var t,n;return{h100:Object(a.a)({height:"100%"},e.breakpoints.down("xs"),{height:"max-content"}),baseContainer:Object(a.a)({backgroundImage:e.palette.banner.background,width:"100%",minHeight:"100vh"},e.breakpoints.down("xs"),{justifyContent:"center",padding:"1rem"}),divider:(t={background:e.palette.primary.main},Object(a.a)(t,e.breakpoints.up("sm"),{width:"1px",height:"100%"}),Object(a.a)(t,e.breakpoints.down("xs"),{width:"100%",height:"1px",margin:"3rem 0"}),t),presentationContainer:Object(a.a)({},e.breakpoints.down("sm"),{justifyContent:"center"}),loginContainer:(n={background:e.palette.border.light,width:"100%",height:"100%",textAlign:"center"},Object(a.a)(n,e.breakpoints.down("sm"),{justifyContent:"center",padding:"3rem 2rem"}),Object(a.a)(n,e.breakpoints.down("xs"),{justifyContent:"center",padding:"3rem 1rem"}),n),paper:Object(a.a)({padding:e.spacing(5),display:"flex",flexDirection:"column"},e.breakpoints.down("xs"),{padding:e.spacing(3)}),logoContainer:{alignSelf:"center",paddingBottom:"1rem"},logo:Object(a.a)({width:"25rem",height:"7rem",margin:"auto",marginBottom:"1rem",maxWidth:"100%"},e.breakpoints.down("xs"),{width:"100%",height:"min-content"}),title:{lineHeight:"40px",letterSpacing:"1px"},subtitle:{fontSize:13,color:e.palette.primary.main,lineHeight:"15px"},description:{padding:"0 .5rem",paddingTop:"5rem"},marginBottom:{marginBottom:"1.7rem"},textField:{width:"100%",marginBottom:"1.5rem"},button:{width:"100%",fontSize:"18px",fontWeight:"normal",textTransform:"none",margin:"2rem 0",backgroundColor:e.palette.secondary.dark,color:e.palette.primary.main},link:{color:e.palette.secondary.light,textDecoration:"underline",lineHeight:"18px",cursor:"pointer"},inputIcon:{marginRight:".5rem"},resetPasswordContainer:Object(a.a)({},e.breakpoints.down("sm"),{justifyContent:"center"}),resetForm:{padding:"0 1.5rem"},resetDescription:{padding:"0 .5rem",paddingTop:"1.5rem"},root:{textAlign:"left"},label:{color:e.palette.primary.dark,paddingBottom:".5rem"}}})),c=n(250),s=n(248),d=n(84);t.a=function(e){var t=e.children,n=o();return Object(i.jsx)(c.a,{container:!0,justify:"center",alignContent:"center",className:n.baseContainer,children:Object(i.jsx)(c.a,{item:!0,container:!0,md:6,sm:12,justify:"center",alignContent:"center",className:n.loginContainer,children:Object(i.jsxs)(c.a,{item:!0,lg:8,sm:10,children:[Object(i.jsx)("div",{className:n.logo,children:Object(i.jsx)(d.a,{})}),Object(i.jsx)(s.a,{elevation:2,className:n.paper,children:t})]})})})}},262:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(24),a=n(240),r=Object(a.a)((function(e){var t;return{h100:{height:"100%"},baseContainer:Object(i.a)({backgroundImage:e.palette.banner.background,width:"100%",height:"100%",minHeight:"100vh"},e.breakpoints.down("sm"),{justifyContent:"center",padding:"4rem"}),divider:(t={background:e.palette.primary.main},Object(i.a)(t,e.breakpoints.up("sm"),{width:"1px",height:"100%"}),Object(i.a)(t,e.breakpoints.down("xs"),{width:"100%",height:"1px",margin:"3rem 0"}),t),presentationContainer:Object(i.a)({},e.breakpoints.down("sm"),{justifyContent:"center"}),loginContainer:Object(i.a)({background:e.palette.border.light,width:"100%",height:"100%",textAlign:"center"},e.breakpoints.down("sm"),{justifyContent:"center"}),paper:{padding:e.spacing(5),display:"flex",flexDirection:"column"},logoContainer:{alignSelf:"center",paddingBottom:"1rem"},logo:{width:"70px",height:"90px",backgroundColor:e.palette.primary.main},title:{lineHeight:"40px",letterSpacing:"1px"},subtitle:{fontSize:13,color:e.palette.primary.main,lineHeight:"15px"},description:{padding:"0 .5rem",paddingTop:"5rem"},marginBottom:{marginBottom:"1.7rem"},textField:{width:"100%",marginBottom:"1.5rem"},button:{width:"100%",fontSize:"18px",fontWeight:"normal",textTransform:"none",margin:"2rem 0",backgroundColor:e.palette.secondary.dark,color:e.palette.primary.main},link:{color:e.palette.secondary.light,textDecoration:"underline",lineHeight:"18px",cursor:"pointer"},inputIcon:{marginRight:".5rem"},resetPasswordContainer:Object(i.a)({},e.breakpoints.down("sm"),{justifyContent:"center"}),resetForm:{padding:"0 1.5rem"},resetDescription:{padding:"0 .5rem",paddingTop:"1.5rem"},root:{textAlign:"left"},label:{color:e.palette.primary.dark,paddingBottom:".5rem"},icon:{fontSize:30,margin:"1rem 0 0",cursor:"pointer"}}}))},307:function(e,t,n){"use strict";n.r(t);var i=n(4),a=n(74),r=n(0),o=n(21),c=n(250),s=n(109),d=n(253),m=n(262),l=n(16),p=n(260),g=n(62),b=n(110),h=n(257);t.default=function(){var e=Object(m.a)(),t=Object(o.g)(),n=Object(h.a)().t,u=Object(r.useState)(""),j=Object(a.a)(u,2),x=j[0],f=j[1],O=Object(g.useMutation)(b.a),k=Object(a.a)(O,1)[0],w=Object(o.h)(),C=w.uid,y=w.token;return Object(r.useEffect)((function(){k({variables:{activateData:{uid:C,token:y}}}).then((function(e){var t=e.data.activateAccount.message;f(t)}))}),[C,y,k]),Object(i.jsx)(p.a,{children:Object(i.jsx)(c.a,{item:!0,container:!0,sm:12,justify:"flex-start",alignContent:"center",className:e.resetPasswordContainer,children:Object(i.jsxs)(c.a,{item:!0,xs:12,children:[Object(i.jsx)(s.a,{align:"center",variant:"h3",className:e.marginBottom,children:x.title}),Object(i.jsx)(s.a,{align:"center",variant:"body1",className:e.marginBottom,children:x.description}),Object(i.jsxs)(c.a,{item:!0,container:!0,spacing:2,xs:12,children:[Object(i.jsx)(c.a,{item:!0,md:6,xs:12,children:Object(i.jsx)(d.a,{variant:"contained",className:e.button,onClick:function(){return t.push(l.a.login)},children:n("login")})}),Object(i.jsx)(c.a,{item:!0,md:6,xs:12,children:Object(i.jsx)(d.a,{variant:"contained",className:e.button,onClick:function(){return t.push(l.a.register)},children:n("register")})})]})]})})})}}}]);
//# sourceMappingURL=13.7d4aa92c.chunk.js.map