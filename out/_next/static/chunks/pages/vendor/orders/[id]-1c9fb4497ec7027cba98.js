_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[61],{FrMF:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a={900:"#2B3445",800:"#373F50",700:"#4B566B",600:"#7D879C",500:"#AEB4BE",400:"#DAE1E7",300:"#E3E9EF",200:"#F3F5F9",100:"#F6F9FC",white:"#FFFFFF"},n={primary:a[900],secondary:a[800],hint:a[600],muted:a[600],disabled:a[400]},o={default:{light:n.secondary,main:n.primary,dark:n.primary,text:n.primary},primary:{light:"#FFE1E6",main:"#E94560",dark:"#4F4CB6",text:"#ffffff"},secondary:{light:"rgba(15, 52, 96, 0.2)",main:"rgba(15, 52, 96, 1)",dark:"#303A47",text:"#ffffff",900:"#041533",100:"#F3F6F9"},warn:{main:"#FFCD4E",text:n.primary},error:{main:"#E94560",light:"#FFE1E6",text:n.primary},success:{main:"rgba(51, 208, 103, 1)",light:"rgba(51, 208, 103, 0.15)",text:n.primary},text:n,body:{text:n.primary,default:a[100],paper:a.white},gray:a}},KLw1:function(e,t,r){"use strict";var a=r("HALo"),n=r("dhJC"),o=r("q1tI"),i=r.n(o),l=r("OJSm"),c=r("vOnD"),m=r("za5s"),s=r("c+yx"),d=c.c.textarea.withConfig({displayName:"TextAreaStyle__SyledTextArea",componentId:"sc-1br6tef-0"})((function(e){return Object(l.a)({display:"block",padding:"8px 12px",minHeight:"40px",fontSize:"inherit",color:"body.text",borderRadius:5,border:"1px solid",borderColor:"text.disabled",width:e.fullwidth?"100%":"inherit",outline:"none",overflow:"auto",fontFamily:"inherit","&:hover":{borderColor:"gray.500"},"&:focus":{outlineColor:"primary.main",borderColor:"primary.main",boxShadow:"1px 1px 8px 4px rgba(".concat(Object(s.a)(e.theme.colors.primary.light),", 0.1)")}})}),Object(m.c)(m.b,m.a)),p=c.c.div.withConfig({displayName:"TextAreaStyle__TextAreaWrapper",componentId:"sc-1br6tef-1"})((function(e){return Object(l.a)({width:e.fullwidth?"100%":"inherit","& label":{display:"block",marginBottom:"0.5rem",fontSize:"0.875rem",color:"text.hint"},"& small":{display:"block",color:"error.main",marginTop:"0.25rem",marginLeft:"0.25rem"}})}),Object(m.c)(m.b,m.i)),u=i.a.createElement,f=function(e){var t=e.id,r=e.label,o=e.errorText,i=e.labelColor,l=Object(n.a)(e,["id","label","errorText","labelColor"]),c={},m={};for(var s in l)s.startsWith("m")||s.startsWith("p")?c[s]=l[s]:m[s]=l[s];return u(p,Object(a.a)({color:i&&"".concat(i,".main"),fullwidth:l.fullwidth},c),r&&u("label",{htmlFor:t},r),u(d,Object(a.a)({id:t},m)),o&&u("small",null,o))};f.defaultProps={id:"textArea",color:"default"};t.a=f},Pcdq:function(e,t,r){"use strict";var a=r("vOnD"),n=r("za5s"),o=r("c+yx"),i=a.c.div.withConfig({displayName:"TableRow",componentId:"sc-1sslxri-0"})(["display:flex;flex-wrap:wrap;align-items:center;border-radius:10px;box-shadow:",";& > *{flex:1 1 0;}.pre{white-space:pre;}"," "," ",""],(function(e){var t=e.boxShadow;return Object(o.c)("shadows.".concat(t||"small"))}),n.i,n.b,n.a);i.defaultProps={bg:"body.paper"},t.a=i},b7Ho:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),o=r("TBFr"),i=r("CmMq"),l=r("v/do"),c=r("kM1Z"),m=r("X4gC"),s=r("20a2"),d=r("BGYt"),p=r("0DLD"),u=r("jVRT"),f=n.a.createElement,x=[{href:"/vendor/dashboard",title:"Dashboard",iconName:"board"},{href:"/vendor/products",title:"Products",iconName:"box",count:300},{href:"/vendor/add-product",title:"Add New Product",iconName:"upload"},{href:"/vendor/orders",title:"Orders",iconName:"shopping-cart",count:40},{href:"/vendor/account-settings",title:"Account Settings",iconName:"gear-2"}],b=function(){var e=Object(s.useRouter)().pathname;return f(u.a,{px:"0px",py:"1.5rem",color:"gray.900"},x.map((function(t){return f(u.b,{isCurrentPath:e.includes(t.href),href:t.href,key:t.title,px:"1.5rem",mb:"1.25rem"},f(d.a,{alignItems:"center"},f(m.a,{className:"dashboard-nav-icon-holder"},f(p.a,{variant:"small",defaultcolor:"currentColor",mr:"10px"},t.iconName)),f("span",null,t.title)),f("span",null,t.count))})))},h=r("RKUm"),y=n.a.createElement;t.a=function(e){var t=e.children;return y(h.a,{navbar:y(c.a,null)},y(o.a,{my:"2rem"},y(i.a,{container:!0,spacing:6},y(l.a,{as:i.a,item:!0,lg:3,xs:12,down:1024},y(b,null)),y(i.a,{item:!0,lg:9,xs:12},t))))}},c95n:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vendor/orders/[id]",function(){return r("yMXy")}])},jVRT:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return m}));var a=r("vOnD"),n=r("c+yx"),o=r("vzgc"),i=r("BGYt"),l=r("yYdi"),c=Object(a.c)(o.a).withConfig({displayName:"DashboardStyle__DashboardNavigationWrapper",componentId:"sc-1ux2xvt-0"})(["@media only screen and (max-width:768px){height:calc(100vh - 64px);box-shadow:none;overflow-y:auto;}"]),m=Object(a.c)(l.a).withConfig({displayName:"DashboardStyle__StyledDashboardNav",componentId:"sc-1ux2xvt-1"})(["display:flex;justify-content:space-between;align-items:center;border-left:4px solid;color:",";border-left-color:",";.dashboard-nav-icon-holder{color:",";}:hover{border-left-color:",";.dashboard-nav-icon-holder{color:",";}}"],(function(e){return e.isCurrentPath?Object(n.c)("colors.primary.main"):"inherit"}),(function(e){return e.isCurrentPath?Object(n.c)("colors.primary.main"):"transparent"}),Object(n.c)("colors.gray.600"),Object(n.c)("colors.primary.main"),Object(n.c)("colors.primary.main"));Object(a.c)(i.a).withConfig({displayName:"DashboardStyle__StyledDashboardPageTitle",componentId:"sc-1ux2xvt-2"})([""])},kYTh:function(e,t,r){"use strict";var a=r("X4gC"),n=r("20a2"),o=r("q1tI"),i=r.n(o),l=r("BGYt"),c=r("0DLD"),m=r("6uqF"),s=r("jVRT"),d=i.a.createElement,p=[{title:"DASHBOARD",list:[{href:"/orders",title:"Orders",iconName:"bag",count:5},{href:"/wish-list",title:"Wishlist",iconName:"heart",count:19},{href:"/support-tickets",title:"Support Tickets",iconName:"customer-service",count:1}]},{title:"ACCOUNT SETTINGS",list:[{href:"/profile",title:"Profile Info",iconName:"user",count:3},{href:"/address",title:"Addresses",iconName:"pin",count:16},{href:"/payment-methods",title:"Payment Methods",iconName:"credit-card",count:4}]}];t.a=function(){var e=Object(n.useRouter)().pathname;return d(s.a,{px:"0px",pb:"1.5rem",color:"gray.900"},p.map((function(t){return d(o.Fragment,{key:t.title},d(m.l,{p:"26px 30px 1rem",color:"text.muted",fontSize:"12px"},t.title),t.list.map((function(t){return d(s.b,{isCurrentPath:e.includes(t.href),href:t.href,key:t.title,px:"1.5rem",mb:"1.25rem"},d(l.a,{alignItems:"center"},d(a.a,{className:"dashboard-nav-icon-holder"},d(c.a,{variant:"small",defaultcolor:"currentColor",mr:"10px"},t.iconName)),d("span",null,t.title)),d("span",null,t.count))})))})))}},yEnQ:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),o=r("1PzU"),i=r("X4gC"),l=r("BGYt"),c=r("0DLD"),m=r("Pd93"),s=r("6uqF"),d=r("kYTh"),p=n.a.createElement;t.a=function(e){var t=e.iconName,r=e.title,a=e.button,n=Object(o.a)()<1025;return p(i.a,{mb:"1.5rem",mt:"-1rem"},p(l.a,{justifyContent:"space-between",alignItems:"center",mt:"1rem"},p(l.a,{alignItems:"center"},p(c.a,{color:"primary"},t),p(s.b,{ml:"12px",my:"0px",lineHeight:"1",whitespace:"pre"},r)),n&&p(m.a,{position:"left",handle:p(c.a,{mx:"1rem"},"menu")},p(d.a,null)),!n&&a),n&&!!a&&p(i.a,{mt:"1rem"},a))}},yMXy:function(e,t,r){"use strict";r.r(t);var a=r("7E9o"),n=r("X4gC"),o=r("pvl1"),i=r("lm1b"),l=r("vzgc"),c=r("2ekl"),m=r("BGYt"),s=r("CmMq"),d=r("0DLD"),p=r("yEnQ"),u=r("b7Ho"),f=r("s11I"),x=r("Pcdq"),b=r("Xiu9"),h=r("KLw1"),y=r("6uqF"),g=r("sWYD"),v=r("YFqc"),w=r.n(v),C=r("20a2"),N=r("q1tI"),S=r.n(N).a.createElement,F=function(){var e=Object(C.useRouter)().query.id;return S("div",null,S(p.a,{title:"Order Details",iconName:"bag_filled",button:S(w.a,{href:"/vendor/orders"},S(o.a,{color:"primary",bg:"primary.light",px:"2rem"},"Back to Order List"))}),S(l.a,{p:"0px",mb:"30px",overflow:"hidden"},S(x.a,{bg:"gray.200",p:"12px",boxShadow:"none",borderRadius:0},S(m.a,{className:"pre",flex:"0 0 0 !important",m:"6px",alignItems:"center"},S(y.l,{fontSize:"14px",color:"text.muted",mr:"4px"},"Order ID:"),S(y.l,{fontSize:"14px"},e)),S(m.a,{className:"pre",m:"6px",alignItems:"center"},S(y.l,{fontSize:"14px",color:"text.muted",mr:"4px"},"Placed on:"),S(y.l,{fontSize:"14px"},Object(g.a)(new Date,"dd MMM, yyyy"))),S(n.a,{maxWidth:"160px"},S(f.a,{placeholder:"Order Status",options:O}))),S(n.a,{p:"1rem 1.5rem 10px"},S(b.a,{label:"Add Product",fullwidth:!0})),S(n.a,{py:"0.5rem"},[1,2,3,4].map((function(e){return S(m.a,{px:"1rem",py:"0.5rem",flexWrap:"wrap",alignItems:"center",key:e},S(m.a,{flex:"2 2 260px",m:"6px",alignItems:"center"},S(a.a,{src:"/assets/images/products/imagetree.png",size:64}),S(n.a,{ml:"20px"},S(y.f,{my:"0px"},"Nike React Phantom Run Flyknit 2"),S(m.a,{alignItems:"center"},S(y.l,{fontSize:"14px",color:"text.muted"},"$145 x"),S(n.a,{maxWidth:"60px",ml:"8px",mt:"0.25rem"},S(b.a,{defaultValue:3,type:"number",fullwidth:!0}))))),S(m.a,{flex:"1 1 260px",m:"6px",alignItems:"center"},S(y.l,{fontSize:"14px",color:"text.muted"},"Product properties: Black, L")),S(m.a,{flex:"0 0 0 !important",m:"6px",alignItems:"center"},S(i.a,{size:"small"},S(d.a,{variant:"small"},"delete"))))})))),S(s.a,{container:!0,spacing:6},S(s.a,{item:!0,lg:6,md:6,xs:12},S(l.a,{p:"20px 30px",mb:"1.5rem"},S(y.e,{mt:"0px",mb:"14px"},"Shipping Address"),S(h.a,{defaultValue:"Kelly Williams 777 Brockton Avenue, Abington MA 2351",rows:5,borderRadius:10,fullwidth:!0})),S(l.a,{p:"20px 30px"},S(y.e,{mt:"0px",mb:"14px"},"Customer's Note"),S(h.a,{defaultValue:"Please deliver ASAP.",rows:5,borderRadius:10,fullwidth:!0}))),S(s.a,{item:!0,lg:6,md:6,xs:12},S(l.a,{p:"20px 30px",mb:"1.5rem"},S(y.e,{mt:"0px",mb:"14px"},"Total Summary"),S(m.a,{justifyContent:"space-between",alignItems:"center",mb:"0.5rem"},S(y.l,{fontSize:"14px",color:"text.hint"},"Subtotal:"),S(y.f,{my:"0px"},"$335")),S(m.a,{justifyContent:"space-between",alignItems:"center",mb:"0.5rem"},S(y.l,{fontSize:"14px",color:"text.hint"},"Shipping fee:"),S(m.a,{alignItems:"center",maxWidth:"100px",ml:"8px",mt:"0.25rem"},S(y.l,{mr:"0.5rem"},"$"),S(b.a,{defaultValue:10,type:"number",fullwidth:!0}))),S(m.a,{justifyContent:"space-between",alignItems:"center",mb:"0.5rem"},S(y.l,{fontSize:"14px",color:"text.hint"},"Discount:"),S(m.a,{alignItems:"center",maxWidth:"100px",ml:"8px",mt:"0.25rem"},S(y.l,{mr:"0.5rem"},"-$"),S(b.a,{defaultValue:30,type:"number",fullwidth:!0}))),S(c.a,{mb:"0.5rem"}),S(m.a,{justifyContent:"space-between",alignItems:"center",mb:"1rem"},S(y.f,{my:"0px"},"Total"),S(y.f,{my:"0px"},"$315")),S(y.l,{fontSize:"14px"},"Paid by Credit/Debit Card")),S(o.a,{variant:"contained",color:"primary",ml:"auto"},"Save Changes"))))},O=[{label:"Processing",value:"Processing"},{label:"Pending",value:"Pending"},{label:"Delivered",value:"Delivered"},{label:"Cancelled",value:"Cancelled"}];F.layout=u.a,t.default=F}},[["c95n",0,2,6,1,3,4,5,7,8,9,10,11,13,15]]]);