import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-DJaLQcJe.js";import{t as n}from"./jsx-runtime-fcfuQg7E.js";import{c as r,o as i}from"./blocks-CAsJhdZ_.js";import{r as a,t as o}from"./src-B0ljGAvY.js";import{n as s,r as c,t as l}from"./CodePreview-D2cxVGff.js";import{n as u,t as d}from"./Input.stories-BHW4MkaP.js";function f(e){let n={code:`code`,h1:`h1`,h2:`h2`,hr:`hr`,li:`li`,p:`p`,ul:`ul`,...t(),...e.components};return a||m(`Input`,!1),a.Password||m(`Input.Password`,!0),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{of:d}),`
`,(0,h.jsx)(n.h1,{id:`input-输入框`,children:`Input 输入框`}),`
`,(0,h.jsx)(n.p,{children:`通过鼠标或键盘输入内容，是最基础的表单域的包装。`}),`
`,(0,h.jsx)(n.h2,{id:`何时使用`,children:`何时使用`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsx)(n.li,{children:`需要用户输入表单域内容时。`}),`
`,(0,h.jsx)(n.li,{children:`提供组合型输入框，带搜索的输入框，以及带密码显示的输入框。`}),`
`]}),`
`,(0,h.jsx)(n.hr,{}),`
`,(0,h.jsx)(n.h2,{id:`代码演示结合自定义-preview-组件`,children:`代码演示（结合自定义 Preview 组件）`}),`
`,(0,h.jsxs)(n.p,{children:[`抛弃臃肿的官方底层，我们自主封装了运行时 `,(0,h.jsx)(n.code,{children:`CodePreview`}),` 组件，结合 `,(0,h.jsx)(n.code,{children:`highlight.js`}),` 实现了组件渲染与源码高亮的无缝分离！`]}),`
`,(0,h.jsx)(l,{code:`import { Input } from '@cheese-design/components';

export default () => (
<Input.Password placeholder="请输入密码..." />
);`,children:(0,h.jsx)(a.Password,{placeholder:`请输入密码...`})})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(f,{...e})}):f(e)}function m(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var h;e((()=>{h=n(),c(),r(),o(),u(),s()}))();export{p as default};