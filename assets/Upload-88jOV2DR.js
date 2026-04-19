import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-DJaLQcJe.js";import{t as n}from"./jsx-runtime-fcfuQg7E.js";import{c as r,o as i,r as a,s as o}from"./blocks-CAsJhdZ_.js";import{n as s,r as c,t as l}from"./CodePreview-D2cxVGff.js";import{Basic as u,DragSimulation as d,PictureCard as f,n as p,t as m}from"./Upload.stories-6UxmXbvr.js";function h(e){let n={h1:`h1`,h2:`h2`,hr:`hr`,li:`li`,p:`p`,ul:`ul`,...t(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{of:m}),`
`,(0,_.jsx)(n.h1,{id:`upload-上传`,children:`Upload 上传`}),`
`,(0,_.jsx)(n.p,{children:`极其优雅、支持拖拽与照片墙的企业级数据录入组件，为用户提供极其顺滑的文件上传体验。`}),`
`,(0,_.jsx)(n.h2,{id:`-何时使用`,children:`💡 何时使用`}),`
`,(0,_.jsxs)(n.ul,{children:[`
`,(0,_.jsx)(n.li,{children:`当你需要将本地的图片、文档、视频等文件上传至服务器时。`}),`
`,(0,_.jsx)(n.li,{children:`当你需要大厂级别的交互体验（如拖拽上传、精准进度条、大图全屏预览）时。`}),`
`,(0,_.jsx)(n.li,{children:`当你需要在一个表单中收集用户的多媒体资料时。`}),`
`]}),`
`,(0,_.jsx)(n.hr,{}),`
`,(0,_.jsx)(n.h2,{id:`-代码演示`,children:`🚀 代码演示`}),`
`,(0,_.jsx)(l,{title:`1. 基础点击上传`,desc:`最经典的上传模式。结合 beforeUpload 拦截器，可以轻松限制文件大小或格式。`,code:`<Upload 
action="https://jsonplaceholder.typicode.com/posts/"
name="fileName"
multiple={true}
beforeUpload={(file) => file.size / 1024 < 500}
>
<Button type="primary">点击上传文件</Button>
</Upload>`,children:(0,_.jsx)(o,{of:u})}),`
`,(0,_.jsx)(l,{title:`2. 拖拽上传 (Dragger)`,desc:`把文件拖入指定区域，即可极其丝滑地完成上传，支持单次或批量拖拽。底层完美解决了 HTML5 原生拖放 API 的种种陷阱。`,code:`<Upload 
action="https://jsonplaceholder.typicode.com/posts/"
drag={true}
multiple={true}
>
<div className="custom-drag-area">
  <span>📁 点击或将文件拖拽到这里上传</span>
</div>
</Upload>`,children:(0,_.jsx)(o,{of:d})}),`
`,(0,_.jsx)(l,{title:`3. 极其华丽的照片墙 (Picture Card)`,desc:`专为电商主图、社交分享、头像上传等“重视觉”场景打造。上传完毕后自动生成极具质感的正方形缩略图，并支持点击全屏放大预览。`,code:`<Upload 
action="https://jsonplaceholder.typicode.com/posts/"
listType="picture-card"
multiple={true}
accept="image/*"
onPreview={(file) => handlePreview(file)}
>
<div className="upload-btn">+ 上传照片</div>
</Upload>`,children:(0,_.jsx)(o,{of:f})}),`
`,(0,_.jsx)(n.hr,{}),`
`,(0,_.jsx)(n.h2,{id:`️-api-字典`,children:`⚙️ API 字典`}),`
`,(0,_.jsx)(n.p,{children:`极其严谨的底层接口设计，完美支持各种高度定制化的业务需求。`}),`
`,(0,_.jsx)(a,{}),`
`,(0,_.jsxs)(`table`,{children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`属性`}),(0,_.jsx)(`th`,{children:`说明`}),(0,_.jsx)(`th`,{children:`类型`}),(0,_.jsx)(`th`,{children:`默认值`})]})}),(0,_.jsxs)(`tbody`,{children:[(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:(0,_.jsx)(`strong`,{children:(0,_.jsx)(`code`,{children:`action`})})}),(0,_.jsx)(`td`,{children:`极其核心：必填！上传的接口地址`}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`string`})}),(0,_.jsx)(`td`,{children:`-`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:(0,_.jsx)(`strong`,{children:(0,_.jsx)(`code`,{children:`accept`})})}),(0,_.jsx)(`td`,{children:`接受上传的文件类型`}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`string`})}),(0,_.jsx)(`td`,{children:`-`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:(0,_.jsx)(`strong`,{children:(0,_.jsx)(`code`,{children:`multiple`})})}),(0,_.jsx)(`td`,{children:`是否开启多文件批量选择`}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`boolean`})}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`false`})})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:(0,_.jsx)(`strong`,{children:(0,_.jsx)(`code`,{children:`drag`})})}),(0,_.jsx)(`td`,{children:`是否开启拖拽上传`}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`boolean`})}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`false`})})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:(0,_.jsx)(`strong`,{children:(0,_.jsx)(`code`,{children:`listType`})})}),(0,_.jsx)(`td`,{children:`列表极其丰富的渲染模式`}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`'text' | 'picture' | 'picture-card'`})}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`'text'`})})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:(0,_.jsx)(`strong`,{children:(0,_.jsx)(`code`,{children:`beforeUpload`})})}),(0,_.jsx)(`td`,{children:`上传文件之前的拦截钩子`}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`(file: File) => boolean`})}),(0,_.jsx)(`td`,{children:`-`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:(0,_.jsx)(`strong`,{children:(0,_.jsx)(`code`,{children:`onProgress`})})}),(0,_.jsx)(`td`,{children:`文件上传进度发生变化时的回调`}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`(percent: number, file: File) => void`})}),(0,_.jsx)(`td`,{children:`-`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:(0,_.jsx)(`strong`,{children:(0,_.jsx)(`code`,{children:`onSuccess`})})}),(0,_.jsx)(`td`,{children:`文件上传成功的回调`}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`(data: any, file: File) => void`})}),(0,_.jsx)(`td`,{children:`-`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:(0,_.jsx)(`strong`,{children:(0,_.jsx)(`code`,{children:`onError`})})}),(0,_.jsx)(`td`,{children:`文件上传失败时的回调`}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`(err: any, file: File) => void`})}),(0,_.jsx)(`td`,{children:`-`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:(0,_.jsx)(`strong`,{children:(0,_.jsx)(`code`,{children:`onChange`})})}),(0,_.jsx)(`td`,{children:`文件状态发生变化时的回调`}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`(file: UploadFile) => void`})}),(0,_.jsx)(`td`,{children:`-`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:(0,_.jsx)(`strong`,{children:(0,_.jsx)(`code`,{children:`onPreview`})})}),(0,_.jsx)(`td`,{children:`点击缩略图进行预览时的回调`}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`(file: UploadFile) => void`})}),(0,_.jsx)(`td`,{children:`-`})]})]})]})]})}function g(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,_.jsx)(n,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=n(),c(),r(),p(),s()}))();export{g as default};