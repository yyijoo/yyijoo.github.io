(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(e,t,n){"use strict";n.r(t);var a=n(145),r=n.n(a),i=n(0),l=n.n(i),c=n(149),o=n(148),m={techSkill:{category:"Technical Skills",contents:[{itemName:"Experienced",items:["Javascript","HTML/CSS","Redux","styled-componenets","eslint"]},{itemName:"Basic",items:["Node.js","Express","sequelize"]},{itemName:"Interested/Love",items:["Aframe"]}]},projects:{category:"Projects",contents:[{project:"Codestates Admin",role:"Front-end Engineer",term:"2019.02 - 2019.03",desc:"통합 수강생 관리, 웹사이트 콘텐츠 관리, 결제 관리를 위한 관리자 페이지",item:["템플릿 기반 웹앱 기획 및 클라이언트 구조 설계","수강생 정보 CRUD 인터페이스 및 REST API 구현"]},{project:"Codestates Website",role:"Front-end",term:"2019.02 - 2019.03",desc:"코스 안내, 신청, 결제 및 상담이 이뤄지는 공식 웹사이트",item:["React, Redux, styled - component를 활용한 통합 수강생 관리 페이지 개발","수강신청, 코스소개, 메인 페이지 UI 개편","브라우저 사이즈별 반응형 대응","hotfix 대응 등 유지보수"]},{project:"Jobstates",role:"Front-end Engineer",term:"2018.12 - 2018.12",desc:"통합 수강생 관리, 웹사이트 콘텐츠 관리, 결제 관리를 위한 관리자 페이지",item:["React & Redux를 사용한 웹앱 구조 설계","전체 레이아웃 설계 및 구현","이력서 페이지 구현","Google vision API를 이용한 이미지 텍스트 추출 기능 구현","AWS S3 클라이언트 앱 배포"]},{project:"My-Log",role:"Front-end & Back-end Engineer",term:"2018.11 - 2018.11",desc:"사진 및 텍스트로 일상을 기록 및 관리하는 온라인 일기 서비스",item:["Express & Sequelize로 CRUD","AWS S3 이미지 업로드 기능","AWS EC2 서버 앱 배포"]}]}};function s(){var e=r()(["\n  display: flex;\n  margin-bottom: 2rem;\n\n  #basic-info {\n    font-size: 2rem;\n    font-weight: bold;\n  }\n\n  .left-category {\n    width: 250px;\n\n    font-size: 1.3rem;\n    font-weight: bold;\n  }\n\n  .right-items {\n    .item-name {\n      font-size: 1.1rem;\n      font-weight: bold;\n    }\n\n    .item {\n      margin-bottom: 1rem;\n    }\n  }\n\n  .smaller-text {\n    font-size: 0.8rem;\n    font-weight: normal;\n    margin-left: 1rem;\n  }\n"]);return s=function(){return e},e}function d(){var e=r()(["\n  margin: 3rem;\n"]);return d=function(){return e},e}var u=o.a.div(d()),g=o.a.div(s());t.default=function(){return l.a.createElement(c.a,null,l.a.createElement(u,null,l.a.createElement(g,null,l.a.createElement("div",{className:"left-category",id:"basic-info"},"이주연"),l.a.createElement("div",{className:"right-items"},"010 - 2415 - 2026",l.a.createElement("br",null),"yyijoo@gmail.com",l.a.createElement("br",null),"github.com/yyijoo")),l.a.createElement(g,null,l.a.createElement("div",{className:"left-category"},m.techSkill.category),l.a.createElement("div",{className:"right-items"},m.techSkill.contents.map(function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"item-name"},e.itemName),l.a.createElement("div",{className:"item"},e.items.map(function(e){return l.a.createElement("span",null,e," ")})))}))),l.a.createElement(g,null,l.a.createElement("div",{className:"left-category"},m.projects.category),l.a.createElement("div",{className:"right-items"},m.projects.contents.map(function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"item-name"},e.project,", [",e.role,"]"," ",l.a.createElement("span",{className:"smaller-text"},e.term)),l.a.createElement("div",{className:"smaller-text"},e.desc),l.a.createElement("div",null,e.item.map(function(e){return l.a.createElement("div",null,"- ",e)})))})))))}},144:function(e,t,n){var a;e.exports=(a=n(147))&&a.default||a},146:function(e,t,n){e.exports=n.p+"static/logo-6764e35e0e8db33ed31dab5f164ad83d.png"},147:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),l=n.n(i),c=n(55),o=n(2),m=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};m.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=m},149:function(e,t,n){"use strict";var a=n(145),r=n.n(a),i=n(0),l=n.n(i),c=n(146),o=n.n(c),m=n(4),s=n.n(m),d=n(33),u=n.n(d);n(144),l.a.createContext({});function g(){var e=r()(["\n  width: 100%;\n  height: 70px;\n  poistion: relative;\n  border-bottom: solid 0.5px #d3d3d3;\n  vertical-align: middle;\n  line-height: 70px;\n  display: flex;\n  align-items: center;\n\n  .link {\n    margin-left: 2rem;\n    text-decoration: none;\n    color: black;\n    font-size: 1rem;\n  }\n\n  .logo-img {\n    height: auto;\n    width: auto;\n    max-width: 50px;\n    max-height: 45px;\n  }\n"]);return g=function(){return e},e}s.a.object,s.a.string.isRequired,s.a.func,s.a.func;var f=n(148).a.div(g());t.a=function(e){var t=e.children;return l.a.createElement(i.Fragment,null,l.a.createElement(f,null,l.a.createElement("img",{src:o.a,className:"logo-img"}),l.a.createElement(u.a,{to:"/resume/",className:"link"},"resume")),t)}}}]);
//# sourceMappingURL=component---src-pages-resume-js-b555298c7defb6e5d62a.js.map