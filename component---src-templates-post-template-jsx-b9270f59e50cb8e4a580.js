(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{168:function(t,e,M){"use strict";M.r(e);var N=M(9),a=M.n(N),i=M(0),u=M.n(i),n=M(172),j=M.n(n),L=M(173),c=M(65),r=M(191),s=M.n(r),D=M(43),I=M.n(D),T=M(258),y=M.n(T),l=function(t){function e(e){var M;return(M=t.call(this,e)||this).state={toasts:[]},M.notifyAboutComment=M.notifyAboutComment.bind(I()(M)),M.onSnackbarDismiss=M.onSnackbarDismiss.bind(I()(M)),M}a()(e,t);var M=e.prototype;return M.onSnackbarDismiss=function(){var t=this.state.toasts.slice(1);this.setState({toasts:t})},M.notifyAboutComment=function(){var t=this.state.toasts.slice();t.push({text:"New comment available!!"}),this.setState({toasts:t})},M.render=function(){var t=this.props,e=t.postNode,M=t.siteMetadata;if(!M.disqusShortname)return null;var N=e.frontmatter,a=M.url+e.fields.slug;return u.a.createElement(y.a,{shortname:M.disqusShortname,identifier:N.title,title:N.title,url:a,category_id:N.category_id,onNewComment:this.notifyAboutComment})},e}(i.Component),g=(M(260),M(178)),o=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata,e=(t.subtitle,t.author,t.menu,this.props.data.markdownRemark),M=e.fields.tagSlugs,N=(u.a.createElement("div",null,u.a.createElement(c.Link,{className:"post-single__home-button",to:"/"},"Home")),u.a.createElement("div",{className:"post-single__tags"},u.a.createElement("ul",{className:"post-single__tags-list"},M&&M.map(function(t,M){return u.a.createElement("li",{className:"post-single__tags-list-item",key:t},u.a.createElement(c.Link,{to:t,className:"post-single__tags-list-item-link"},e.frontmatter.tags[M]))})))),a=u.a.createElement("div",null,u.a.createElement(l,{postNode:e,siteMetadata:this.props.data.site.siteMetadata}));return u.a.createElement("div",null,u.a.createElement(g.a,this.props),u.a.createElement("div",{className:"content"},u.a.createElement("div",{className:"post-single"},u.a.createElement("div",{className:"post-single__inner"},u.a.createElement("h1",{className:"post-single__title"},e.frontmatter.title),u.a.createElement("div",{className:"post-single__body",dangerouslySetInnerHTML:{__html:e.html}}),u.a.createElement("div",{className:"post-single__date"},u.a.createElement("em",null,"Published ",s()(e.frontmatter.date).format("D MMM YYYY")))),u.a.createElement("div",{className:"post-single__footer"},N,a))))},e}(u.a.Component);M.d(e,"pageQuery",function(){return E});var A=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata,e=t.title,M=t.subtitle,N=this.props.data.markdownRemark.frontmatter,a=N.title,i=N.description,n=null!==i?i:M;return u.a.createElement(L.a,null,u.a.createElement("div",null,u.a.createElement(j.a,null,u.a.createElement("title",null,a+" - "+e),u.a.createElement("meta",{name:"description",content:n})),u.a.createElement(o,this.props)))},e}(u.a.Component),E=(e.default=A,"3674884277")},173:function(t,e,M){"use strict";var N=M(9),a=M.n(N),i=M(0),u=M.n(i),n=M(172),j=M.n(n),L=(M(179),function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=this.props.children;return u.a.createElement("div",{className:"layout"},u.a.createElement(j.a,{defaultTitle:"muskula.xyz"}),t)},e}(u.a.Component));e.a=L},174:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjAwIDEyMDAiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiM2Mzl9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjAwLDBDMjY4LjYsMCwwLDI2OC42LDAsNjAwczI2OC42LDYwMCw2MDAsNjAwczYwMC0yNjguNiw2MDAtNjAwUzkzMS40LDAsNjAwLDB6IE0yNjYuNiw5MzMuMwlDMTc2LjEsODQyLjgsMTMxLDcyNC42LDEyOS42LDYwNkw1OTQsMTA3MC40QzQ3NS40LDEwNjksMzU3LjIsMTAyMy45LDI2Ni42LDkzMy4zeiBNNzA0LjMsMTA1OS40TDE0MC42LDQ5NS43CWM0Ny41LTIxMC4xLDIzNS0zNjcuMSw0NTkuNC0zNjcuMWMxNTYuOSwwLDI5NS41LDc3LDM4MS4yLDE5NC45TDkxNS42LDM3OUM4NDUuOCwyNzkuNSw3MzAuNSwyMTQuMyw2MDAsMjE0LjMJYy0xNjcuNywwLTMxMC4zLDEwNy43LTM2My4zLDI1Ny41bDQ5MS42LDQ5MS42YzEyMy40LTQzLjcsMjE4LTE0OC4yLDI0Ny42LTI3Ny42SDc3MS40VjYwMGgzMDAJQzEwNzEuNCw4MjQuNSw5MTQuNCwxMDExLjksNzA0LjMsMTA1OS40eiIvPjwvc3ZnPgo="},175:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgdmlld0JveD0iMCAwIDI1NiAyMzAiPjxwYXRoIGQ9Ik0uNzU0IDExNC43NWMwIDE5LjIxNSAxOC43NjMgMzcuMTUyIDQ4LjM0MyA0Ny4yNjMtNS45MDcgMjkuNzM3LTEuMDU4IDUzLjcwNiAxNS4xMzYgNjMuMDQ1IDE2LjY0NSA5LjYgNDEuNDQzIDIuOTU1IDY0Ljk4LTE3LjYyIDIyLjk0MyAxOS43NDQgNDYuMTMgMjcuNTE0IDYyLjMxIDE4LjE0OCAxNi42My05LjYyNyAyMS42ODctMzUuMjIxIDE1LjYxNy02NS44ODcgMzAuODEtMTAuMTg2IDQ4LjA0NC0yNS40ODEgNDguMDQ0LTQ0Ljk0OSAwLTE4Ljc2OS0xOC43OTctMzUuMDA2LTQ3Ljk3OS00NS4wNTIgNi41MzUtMzEuOTMzLjk5OC01NS4zMi0xNS44NjctNjUuMDQ1LTE2LjI1OS05LjM3Ni0zOS43MTYtMS4yMDQtNjIuOTk2IDE5LjA1NkMxMDQuMTIyIDIuMjA1IDgwLjg5Ny00LjM2IDY0LjA1IDUuMzkyIDQ3LjgwNiAxNC43OTUgNDMuMTcxIDM5LjIgNDkuMDk3IDY5LjQ4NyAyMC41MTUgNzkuNDUyLjc1NCA5Ni4wNTcuNzU0IDExNC43NXoiIGZpbGw9IiNEREQiLz48cGF0aCBkPSJNMjAxLjAyNSA3OS42NzRhMTUxLjM2NCAxNTEuMzY0IDAgMCAwLTcuMjc0LTIuMjkyIDEzNy41IDEzNy41IDAgMCAwIDEuMTI0LTQuOTYxYzUuNTA2LTI2LjcyOCAxLjkwNi00OC4yNi0xMC4zODgtNTUuMzQ4LTExLjc4Ny02Ljc5OC0zMS4wNjUuMjktNTAuNTM1IDE3LjIzM2ExNTEuMTM2IDE1MS4xMzYgMCAwIDAtNS42MjYgNS4xNjMgMTM3LjU3MyAxMzcuNTczIDAgMCAwLTMuNzQ0LTMuNDU4Yy0yMC40MDUtMTguMTE4LTQwLjg1OC0yNS43NTItNTMuMTM5LTE4LjY0My0xMS43NzYgNi44MTctMTUuMjY0IDI3LjA2LTEwLjMwNyA1Mi4zOWExNTAuOTEgMTUwLjkxIDAgMCAwIDEuNjcgNy40ODRjLTIuODk0LjgyMi01LjY4OSAxLjY5OC04LjM2MyAyLjYzLTIzLjkyMiA4LjM0LTM5LjIgMjEuNDEyLTM5LjIgMzQuOTcgMCAxNC4wMDQgMTYuNCAyOC4wNSA0MS4zMTggMzYuNTY2YTEyOC40NCAxMjguNDQgMCAwIDAgNi4xMSAxLjkxIDE0Ny44MTMgMTQ3LjgxMyAwIDAgMC0xLjc3NSA4LjA2N2MtNC43MjYgMjQuODktMS4wMzUgNDQuNjUzIDEwLjcxIDUxLjQyOCAxMi4xMzEgNi45OTUgMzIuNDkxLS4xOTUgNTIuMzE3LTE3LjUyNSAxLjU2Ny0xLjM3IDMuMTQtMi44MjMgNC43MTUtNC4zNDZhMTQ4LjM0IDE0OC4zNCAwIDAgMCA2LjEwOCA1LjU3M2MxOS4yMDQgMTYuNTI1IDM4LjE3IDIzLjE5OCA0OS45MDUgMTYuNDA1IDEyLjEyLTcuMDE2IDE2LjA1OC0yOC4yNDcgMTAuOTQ0LTU0LjA3OC0uMzktMS45NzMtLjg0NS0zLjk4OC0xLjM1NS02LjA0IDEuNDMtLjQyMiAyLjgzMy0uODU4IDQuMjAyLTEuMzEyIDI1LjkwNC04LjU4MiA0Mi43NTctMjIuNDU3IDQyLjc1Ny0zNi42NDggMC0xMy42MDctMTUuNzctMjYuNzY3LTQwLjE3NC0zNS4xNjh6IiBmaWxsPSIjNTNDMURFIi8+PHBhdGggZD0iTTE5NS40MDYgMTQyLjMyOGMtMS4yMzUuNDA5LTIuNTAzLjgwNC0zLjc5NSAxLjE4Ny0yLjg2LTkuMDUzLTYuNzItMTguNjgtMTEuNDQyLTI4LjYyNSA0LjUwNy05LjcxIDguMjE3LTE5LjIxMyAxMC45OTctMjguMjA4IDIuMzExLjY3IDQuNTU1IDEuMzc1IDYuNzE3IDIuMTIgMjAuOTEgNy4xOTcgMzMuNjY0IDE3Ljg0IDMzLjY2NCAyNi4wNCAwIDguNzM1LTEzLjc3NSAyMC4wNzUtMzYuMTQgMjcuNDg2em0tOS4yOCAxOC4zODljMi4yNjEgMTEuNDIyIDIuNTg0IDIxLjc0OSAxLjA4NiAyOS44MjItMS4zNDYgNy4yNTQtNC4wNTIgMTIuMDktNy4zOTggMTQuMDI3LTcuMTIxIDQuMTIyLTIyLjM1LTEuMjM2LTM4Ljc3Mi0xNS4zNjgtMS44ODMtMS42Mi0zLjc4LTMuMzUtNS42ODItNS4xOCA2LjM2Ny02Ljk2NCAxMi43My0xNS4wNiAxOC45NC0yNC4wNSAxMC45MjQtLjk2OSAyMS4yNDQtMi41NTQgMzAuNjAzLTQuNzE3LjQ2IDEuODYuODcgMy42ODMgMS4yMjMgNS40NjZ6bS05My44NSA0My4xMzdjLTYuOTU3IDIuNDU3LTEyLjQ5OCAyLjUyNy0xNS44NDcuNTk2LTcuMTI4LTQuMTEtMTAuMDktMTkuOTgtNi4wNDktNDEuMjY1YTEzOC41MDcgMTM4LjUwNyAwIDAgMSAxLjY1LTcuNTAyYzkuMjU1IDIuMDQ3IDE5LjUgMy41MiAzMC40NSA0LjQwOCA2LjI1MSA4Ljc5NyAxMi43OTggMTYuODgzIDE5LjM5NiAyMy45NjRhMTE4Ljg2MyAxMTguODYzIDAgMCAxLTQuMzA1IDMuOTY0Yy04Ljc2NyA3LjY2NC0xNy41NTIgMTMuMS0yNS4yOTQgMTUuODM1em0tMzIuNTkzLTYxLjU4Yy0xMS4wMTgtMy43NjYtMjAuMTE3LTguNjYtMjYuMzU0LTE0LTUuNjA0LTQuOC04LjQzNC05LjU2NS04LjQzNC0xMy40MzIgMC04LjIyNyAxMi4yNjctMTguNzIyIDMyLjcyNi0yNS44NTVhMTM5LjI3NiAxMzkuMjc2IDAgMCAxIDcuNzc3LTIuNDQ3YzIuODI4IDkuMTk3IDYuNTM3IDE4LjgxMyAxMS4wMTMgMjguNTM3LTQuNTM0IDkuODY5LTguMjk2IDE5LjYzOC0xMS4xNSAyOC45NDNhMTE4LjkwOCAxMTguOTA4IDAgMCAxLTUuNTc4LTEuNzQ2em0xMC45MjYtNzQuMzdjLTQuMjQ3LTIxLjcwMy0xLjQyNy0zOC4wNzQgNS42Ny00Mi4xODIgNy41Ni00LjM3NiAyNC4yNzUgMS44NjQgNDEuODkzIDE3LjUwNyAxLjEyNiAxIDIuMjU3IDIuMDQ3IDMuMzkgMy4xMy02LjU2NCA3LjA0OS0xMy4wNTEgMTUuMDc0LTE5LjI0OCAyMy44Mi0xMC42MjcuOTg1LTIwLjggMi41NjctMzAuMTUyIDQuNjg2YTE0MS41MjUgMTQxLjUyNSAwIDAgMS0xLjU1My02Ljk2MnptOTcuNDY3IDI0LjA2N2EzMDYuOTgyIDMwNi45ODIgMCAwIDAtNi44NzEtMTEuM2M3LjIxLjkxIDE0LjExNyAyLjEyIDIwLjYwMyAzLjYwMS0xLjk0NyA2LjI0MS00LjM3NCAxMi43NjctNy4yMzIgMTkuNDU3YTMzNi40MiAzMzYuNDIgMCAwIDAtNi41LTExLjc1OHptLTM5Ljc0Ny0zOC43MTRjNC40NTIgNC44MjMgOC45MTEgMTAuMjA5IDEzLjI5NyAxNi4wNTJhMjg0LjI0NSAyODQuMjQ1IDAgMCAwLTI2LjcwNi0uMDA2YzQuMzktNS43ODkgOC44ODctMTEuMTY3IDEzLjQwOS0xNi4wNDZ6bS00MC4wMDIgMzguNzhhMjg1LjI0IDI4NS4yNCAwIDAgMC02LjM3OCAxMS42ODVjLTIuODExLTYuNjY3LTUuMjE2LTEzLjIyMi03LjE4LTE5LjU1MiA2LjQ0Ny0xLjQ0MyAxMy4zMjItMi42MjIgMjAuNDg1LTMuNTE3YTI4My43OSAyODMuNzkgMCAwIDAtNi45MjcgMTEuMzg0em03LjEzMyA1Ny42ODNjLTcuNC0uODI2LTE0LjM3OS0xLjk0NS0yMC44MjQtMy4zNDggMS45OTUtNi40NDIgNC40NTMtMTMuMTM4IDcuMzI0LTE5Ljk0OGEyODMuNDk0IDI4My40OTQgMCAwIDAgNi40MDYgMTEuNjkyIDI4NS4yNyAyODUuMjcgMCAwIDAgNy4wOTQgMTEuNjA0em0zMy4xMzYgMjcuMzg5Yy00LjU3NS00LjkzNy05LjEzOC0xMC4zOTctMTMuNTk1LTE2LjI3IDQuMzI2LjE3IDguNzM3LjI1NiAxMy4yMi4yNTYgNC42MDYgMCA5LjE1OS0uMTAzIDEzLjY0LS4zMDMtNC40IDUuOTgtOC44NDMgMTEuNDQ4LTEzLjI2NSAxNi4zMTd6bTQ2LjA3Mi01MS4wMzJjMy4wMiA2Ljg4NCA1LjU2NiAxMy41NDQgNy41ODggMTkuODc3LTYuNTUyIDEuNDk1LTEzLjYyNSAyLjY5OS0yMS4wNzggMy41OTNhMzM3LjUzNyAzMzcuNTM3IDAgMCAwIDYuOTM3LTExLjQ5OCAzMDYuNjMyIDMwNi42MzIgMCAwIDAgNi41NTMtMTEuOTcyem0tMTQuOTE1IDcuMTVhMzE2LjQ3OCAzMTYuNDc4IDAgMCAxLTEwLjg0IDE3LjQ5Yy02LjcwNC40NzktMTMuNjMyLjcyNi0yMC42OTIuNzI2LTcuMDMxIDAtMTMuODcxLS4yMTktMjAuNDU4LS42NDZBMjczLjc5OCAyNzMuNzk4IDAgMCAxIDk2LjcyIDEzMy4yOGEyNzEuMzM0IDI3MS4zMzQgMCAwIDEtOS42NC0xOC4yMDYgMjczLjg2NCAyNzMuODY0IDAgMCAxIDkuNjExLTE4LjIxNnYuMDAyYTI3MS4yNTIgMjcxLjI1MiAwIDAgMSAxMC45NTYtMTcuNDQyYzYuNzItLjUwOCAxMy42MS0uNzc0IDIwLjU3NS0uNzc0IDYuOTk2IDAgMTMuODk1LjI2OCAyMC42MTMuNzhhMjkwLjcwNCAyOTAuNzA0IDAgMCAxIDEwLjg4NyAxNy4zODMgMzE2LjQxOCAzMTYuNDE4IDAgMCAxIDkuNzQxIDE4LjEzIDI5MC44MDYgMjkwLjgwNiAwIDAgMS05LjcwOSAxOC4yOXptMTkuOTEzLTEwNy43OTJjNy41NjYgNC4zNjQgMTAuNTA5IDIxLjk2MSA1Ljc1NSA0NS4wMzhhMTI3LjUyNSAxMjcuNTI1IDAgMCAxLTEuMDE2IDQuNDkyYy05LjM3NC0yLjE2My0xOS41NTQtMy43NzMtMzAuMjEyLTQuNzczLTYuMjA5LTguODQxLTEyLjY0Mi0xNi44OC0xOS4xLTIzLjgzOGExNDEuOTIgMTQxLjkyIDAgMCAxIDUuMTk2LTQuNzY2YzE2LjY4Mi0xNC41MTggMzIuMjczLTIwLjI1IDM5LjM3Ny0xNi4xNTN6IiBmaWxsPSIjRkZGIi8+PHBhdGggZD0iTTEyOC4yMjEgOTQuNjY1YzExLjE0NCAwIDIwLjE3NyA5LjAzNCAyMC4xNzcgMjAuMTc3IDAgMTEuMTQ0LTkuMDMzIDIwLjE3OC0yMC4xNzcgMjAuMTc4LTExLjE0MyAwLTIwLjE3Ny05LjAzNC0yMC4xNzctMjAuMTc4IDAtMTEuMTQzIDkuMDM0LTIwLjE3NyAyMC4xNzctMjAuMTc3IiBmaWxsPSIjNTNDMURFIi8+PC9zdmc+Cg=="},176:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cGF0aCBmaWxsPSIjRTEwMDk4IiBkPSJNNTcuNDY4IDMwMi42NmwtMTQuMzc2LTguMyAxNjAuMTUtMjc3LjM4IDE0LjM3NiA4LjN6Ii8+PHBhdGggZmlsbD0iI0UxMDA5OCIgZD0iTTM5LjggMjcyLjJoMzIwLjN2MTYuNkgzOS44eiIvPjxwYXRoIGZpbGw9IiNFMTAwOTgiIGQ9Ik0yMDYuMzQ4IDM3NC4wMjZsLTE2MC4yMS05Mi41IDguMy0xNC4zNzYgMTYwLjIxIDkyLjV6TTM0NS41MjIgMTMyLjk0N2wtMTYwLjIxLTkyLjUgOC4zLTE0LjM3NiAxNjAuMjEgOTIuNXoiLz48cGF0aCBmaWxsPSIjRTEwMDk4IiBkPSJNNTQuNDgyIDEzMi44ODNsLTguMy0xNC4zNzUgMTYwLjIxLTkyLjUgOC4zIDE0LjM3NnoiLz48cGF0aCBmaWxsPSIjRTEwMDk4IiBkPSJNMzQyLjU2OCAzMDIuNjYzbC0xNjAuMTUtMjc3LjM4IDE0LjM3Ni04LjMgMTYwLjE1IDI3Ny4zOHpNNTIuNSAxMDcuNWgxNi42djE4NUg1Mi41ek0zMzAuOSAxMDcuNWgxNi42djE4NWgtMTYuNnoiLz48cGF0aCBmaWxsPSIjRTEwMDk4IiBkPSJNMjAzLjUyMiAzNjdsLTcuMjUtMTIuNTU4IDEzOS4zNC04MC40NSA3LjI1IDEyLjU1N3oiLz48cGF0aCBmaWxsPSIjRTEwMDk4IiBkPSJNMzY5LjUgMjk3LjljLTkuNiAxNi43LTMxIDIyLjQtNDcuNyAxMi44LTE2LjctOS42LTIyLjQtMzEtMTIuOC00Ny43IDkuNi0xNi43IDMxLTIyLjQgNDcuNy0xMi44IDE2LjggOS43IDIyLjUgMzEgMTIuOCA0Ny43TTkwLjkgMTM3Yy05LjYgMTYuNy0zMSAyMi40LTQ3LjcgMTIuOC0xNi43LTkuNi0yMi40LTMxLTEyLjgtNDcuNyA5LjYtMTYuNyAzMS0yMi40IDQ3LjctMTIuOCAxNi43IDkuNyAyMi40IDMxIDEyLjggNDcuN00zMC41IDI5Ny45Yy05LjYtMTYuNy0zLjktMzggMTIuOC00Ny43IDE2LjctOS42IDM4LTMuOSA0Ny43IDEyLjggOS42IDE2LjcgMy45IDM4LTEyLjggNDcuNy0xNi44IDkuNi0zOC4xIDMuOS00Ny43LTEyLjhNMzA5LjEgMTM3Yy05LjYtMTYuNy0zLjktMzggMTIuOC00Ny43IDE2LjctOS42IDM4LTMuOSA0Ny43IDEyLjggOS42IDE2LjcgMy45IDM4LTEyLjggNDcuNy0xNi43IDkuNi0zOC4xIDMuOS00Ny43LTEyLjhNMjAwIDM5NS44Yy0xOS4zIDAtMzQuOS0xNS42LTM0LjktMzQuOSAwLTE5LjMgMTUuNi0zNC45IDM0LjktMzQuOSAxOS4zIDAgMzQuOSAxNS42IDM0LjkgMzQuOSAwIDE5LjItMTUuNiAzNC45LTM0LjkgMzQuOU0yMDAgNzRjLTE5LjMgMC0zNC45LTE1LjYtMzQuOS0zNC45IDAtMTkuMyAxNS42LTM0LjkgMzQuOS0zNC45IDE5LjMgMCAzNC45IDE1LjYgMzQuOSAzNC45IDAgMTkuMy0xNS42IDM0LjktMzQuOSAzNC45Ii8+PC9zdmc+Cg=="},177:function(t,e,M){t.exports=M.p+"static/photo-e1c5161a07e39c66ebd5cbfdfa4545e2.jpg"},178:function(t,e,M){"use strict";M(180);var N=M(9),a=M.n(N),i=M(0),u=M.n(i),n=M(181),j=M.n(n),L=M(65),c=(M(182),function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=this.props.data,e=u.a.createElement("ul",{className:"menu__list"},t.map(function(t){return u.a.createElement("li",{className:"menu__list-item",key:t.path},u.a.createElement(L.Link,{to:t.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},t.label))}));return u.a.createElement("nav",{className:"menu"},e)},e}(u.a.Component)),r=(M(183),M(184),M(174)),s=M.n(r),D=M(175),I=M.n(D),T=M(176),y=M.n(T),l=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=this.props.data,e=t.twitter,M=t.github,N=(t.rss,t.email),a=t.linkedin;return u.a.createElement("div",{className:"links"},u.a.createElement("ul",{className:"links__list"},u.a.createElement("li",{className:"links__list-item"},u.a.createElement("a",{href:"https://www.twitter.com/"+e,target:"_blank",rel:"noopener noreferrer"},u.a.createElement("i",{className:"icon-twitter"}))),u.a.createElement("li",{className:"links__list-item"},u.a.createElement("a",{href:"https://www.github.com/"+M,target:"_blank",rel:"noopener noreferrer"},u.a.createElement("i",{className:"icon-github"}))),u.a.createElement("li",{className:"links__list-item"},u.a.createElement("a",{href:"mailto:"+N},u.a.createElement("i",{className:"icon-mail"}))),u.a.createElement("li",{className:"links__list-item"},u.a.createElement("a",{href:"https://www.linkedin.com/in/"+a},u.a.createElement("i",{className:"icon-linkedin"})))),u.a.createElement("i",{className:"links__list-item"},"Built with:"),u.a.createElement("ul",{className:"links__list"},u.a.createElement("li",{className:"links__list-item"},u.a.createElement("a",{href:"https://gatsby.org"},u.a.createElement("img",{src:s.a}))),u.a.createElement("li",{className:"links__list-item"},u.a.createElement("a",{href:"https://reactjs.org"},u.a.createElement("img",{src:I.a}))),u.a.createElement("li",{className:"links__list-item"},u.a.createElement("a",{href:"https://graphql.org"},u.a.createElement("img",{src:y.a})))))},e}(u.a.Component),g=M(177),o=M.n(g),A=(M(185),function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=this.props.location,e=this.props.data.site.siteMetadata,M=e.author,N=e.subtitle,a=e.copyright,i=e.menu,n="/"===j()(t,"pathname","/"),r=u.a.createElement("div",null,u.a.createElement(L.Link,{to:"/"},u.a.createElement("img",{src:o.a,className:"sidebar__author-photo",width:"150",height:"150",alt:M.name})),n?u.a.createElement("h1",{className:"sidebar__author-title"},u.a.createElement(L.Link,{className:"sidebar__author-title-link",to:"/"},M.name)):u.a.createElement("h2",{className:"sidebar__author-title"},u.a.createElement(L.Link,{className:"sidebar__author-title-link",to:"/"},M.name)),u.a.createElement("p",{className:"sidebar__author-subtitle"},N));return u.a.createElement("div",{className:"sidebar"},u.a.createElement("div",{className:"sidebar__inner"},u.a.createElement("div",{className:"sidebar__author"},r),u.a.createElement("div",null,u.a.createElement(c,{data:i}),u.a.createElement(l,{data:M}),u.a.createElement("p",{className:"sidebar__copyright"},a))))},e}(u.a.Component));e.a=A},258:function(t,e,M){"use strict";t.exports=M(259)},259:function(t,e,M){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var N=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var M=arguments[e];for(var N in M)Object.prototype.hasOwnProperty.call(M,N)&&(t[N]=M[N])}return t},a=function(){function t(t,e){for(var M=0;M<e.length;M++){var N=e[M];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(t,N.key,N)}}return function(e,M,N){return M&&t(e.prototype,M),N&&t(e,N),e}}(),i=n(M(0)),u=n(M(1));function n(t){return t&&t.__esModule?t:{default:t}}var j=["shortname","identifier","title","url","category_id","onNewComment","language"],L=!1;function c(t,e){var M=e.onNewComment,N=e.language,a=function(t,e){var M={};for(var N in t)e.indexOf(N)>=0||Object.prototype.hasOwnProperty.call(t,N)&&(M[N]=t[N]);return M}(e,["onNewComment","language"]);for(var i in a)t.page[i]=a[i];t.language=N,M&&(t.callbacks={onNewComment:[M]})}var r=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,i.default.Component),a(e,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(t,e){return t.identifier!==this.props.identifier}},{key:"render",value:function(){var t=this,e=Object.keys(this.props).reduce(function(e,M){return j.some(function(t){return t===M})?e:N({},e,function(t,e,M){return e in t?Object.defineProperty(t,e,{value:M,enumerable:!0,configurable:!0,writable:!0}):t[e]=M,t}({},M,t.props[M]))},{});return i.default.createElement("div",e,i.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!L){var t=this.disqus=document.createElement("script"),e=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];t.async=!0,t.type="text/javascript",t.src="//"+this.props.shortname+".disqus.com/embed.js",e.appendChild(t),L=!0}}},{key:"loadDisqus",value:function(){var t=this,e={};j.forEach(function(M){"shortname"!==M&&t.props[M]&&(e[M]=t.props[M])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){c(this,e),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){c(this,e)},this.addDisqusScript())}}]),e}();r.displayName="DisqusThread",r.propTypes={id:u.default.string,shortname:u.default.string.isRequired,identifier:u.default.string,title:u.default.string,url:u.default.string,category_id:u.default.string,onNewComment:u.default.func,language:u.default.string},r.defaultProps={url:"undefined"==typeof window?null:window.location.href},e.default=r}}]);
//# sourceMappingURL=component---src-templates-post-template-jsx-b9270f59e50cb8e4a580.js.map