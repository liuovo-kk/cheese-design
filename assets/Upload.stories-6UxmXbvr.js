import{a as e,n as t,r as n}from"./chunk-BneVvdWh.js";import{t as r}from"./react-D1sJ83FZ.js";import{t as i}from"./jsx-runtime-fcfuQg7E.js";import{i as a,n as o,t as s}from"./src-B0ljGAvY.js";var c=n({Basic:()=>m,CustomItemRender:()=>g,DragSimulation:()=>h,PictureCard:()=>p,__namedExportsOrder:()=>_,default:()=>d}),l,u,d,f,p,m,h,g,_,v=t((()=>{l=e(r()),s(),u=i(),d={title:`数据录入组件/Upload 上传`,component:o},f=()=>{let[e,t]=(0,l.useState)(!1),[n,r]=(0,l.useState)(``),[i,a]=(0,l.useState)(``);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,{action:`https://jsonplaceholder.typicode.com/posts/`,listType:`picture-card`,multiple:!0,accept:`image/*`,onPreview:e=>{r(e.thumbUrl||``),a(e.name||``),t(!0)},children:(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,color:`#999`},children:[(0,u.jsx)(`span`,{style:{fontSize:24,marginBottom:8},children:`+`}),(0,u.jsx)(`span`,{children:`上传照片`})]})}),e&&(0,u.jsxs)(`div`,{style:{position:`fixed`,top:0,left:0,width:`100vw`,height:`100vh`,backgroundColor:`rgba(0, 0, 0, 0.85)`,zIndex:9999,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`},onClick:()=>t(!1),children:[(0,u.jsx)(`span`,{style:{position:`absolute`,top:20,right:30,color:`#fff`,fontSize:32,cursor:`pointer`},children:`×`}),(0,u.jsx)(`img`,{src:n,alt:`预览`,style:{maxWidth:`80%`,maxHeight:`80%`,objectFit:`contain`,borderRadius:8},onClick:e=>e.stopPropagation()}),(0,u.jsx)(`span`,{style:{color:`#fff`,marginTop:16,fontSize:16},children:i})]})]})},p={render:()=>(0,u.jsx)(f,{})},m={args:{action:`https://jsonplaceholder.typicode.com/posts/`,name:`fileName`,multiple:!0,beforeUpload:e=>{let t=e.size/1024<500;return t||alert(`文件 ${e.name} 太大了！为了测试，请上传 500KB 以下的文件。`),t},children:(0,u.jsx)(a,{type:`primary`,size:`large`,children:`点击上传文件`})}},h={args:{action:`https://jsonplaceholder.typicode.com/posts/`,drag:!0,listType:`picture-card`,children:(0,u.jsxs)(`div`,{style:{padding:`40px 0`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`},children:[(0,u.jsx)(`span`,{style:{fontSize:32,marginBottom:8},children:`📁`}),(0,u.jsx)(`span`,{style:{color:`#333`,fontWeight:`bold`},children:`点击或将文件拖拽到这里上传`}),(0,u.jsx)(`span`,{style:{color:`#999`,fontSize:12,marginTop:4},children:`支持单次或批量拖拽上传`})]})}},g={args:{action:`https://jsonplaceholder.typicode.com/posts/`,multiple:!0,itemRender:(e,t)=>(0,u.jsxs)(`div`,{style:{border:`1px solid #1677ff`,borderRadius:8,padding:12,marginTop:10,background:`linear-gradient(90deg, #e6f4ff 0%, #ffffff 100%)`,display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{style:{fontSize:20,marginRight:8},children:`🤖`}),(0,u.jsxs)(`span`,{style:{fontWeight:`bold`,color:`#1677ff`},children:[`解析文档：`,t.name]})]}),(0,u.jsx)(`div`,{children:t.status===`uploading`?(0,u.jsxs)(`span`,{style:{color:`#faad14`},children:[`模型读取中 (`,t.percent,`%) ...`]}):(0,u.jsx)(`button`,{style:{background:`#1677ff`,color:`#fff`,border:`none`,padding:`4px 12px`,borderRadius:4,cursor:`pointer`},children:`提取上下文`})})]}),children:(0,u.jsx)(a,{type:`primary`,children:`上传知识库文档`})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <PictureCardDemo />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    // 使用一个免费的公共 JSONPlaceholder API 来模拟 POST 请求
    // 注意：这个接口响应极快，如果是小文件，进度条可能会瞬间 100%
    action: 'https://jsonplaceholder.typicode.com/posts/',
    name: 'fileName',
    multiple: true,
    // 开启多选测试
    beforeUpload: (file: File) => {
      // 【拦截器测试】：只允许上传小于 500KB 的文件
      const isLt500K = file.size / 1024 < 500;
      if (!isLt500K) {
        alert(\`文件 \${file.name} 太大了！为了测试，请上传 500KB 以下的文件。\`);
      }
      return isLt500K;
    },
    children: <Button type="primary" size="large">
        点击上传文件
      </Button>
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    action: 'https://jsonplaceholder.typicode.com/posts/',
    drag: true,
    listType: 'picture-card',
    children: <div style={{
      padding: '40px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        <span style={{
        fontSize: 32,
        marginBottom: 8
      }}>📁</span>
        <span style={{
        color: '#333',
        fontWeight: 'bold'
      }}>
          点击或将文件拖拽到这里上传
        </span>
        <span style={{
        color: '#999',
        fontSize: 12,
        marginTop: 4
      }}>
          支持单次或批量拖拽上传
        </span>
      </div>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    action: 'https://jsonplaceholder.typicode.com/posts/',
    multiple: true,
    itemRender: (originNode, file) => {
      // 极其自由！我们可以完全抛弃 originNode，自己画一个新的
      return <div style={{
        border: '1px solid #1677ff',
        borderRadius: 8,
        padding: 12,
        marginTop: 10,
        background: 'linear-gradient(90deg, #e6f4ff 0%, #ffffff 100%)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
          <div>
            <span style={{
            fontSize: 20,
            marginRight: 8
          }}>🤖</span>
            <span style={{
            fontWeight: 'bold',
            color: '#1677ff'
          }}>
              解析文档：{file.name}
            </span>
          </div>
          <div>
            {file.status === 'uploading' ? <span style={{
            color: '#faad14'
          }}>
                模型读取中 ({file.percent}%) ...
              </span> : <button style={{
            background: '#1677ff',
            color: '#fff',
            border: 'none',
            padding: '4px 12px',
            borderRadius: 4,
            cursor: 'pointer'
          }}>
                提取上下文
              </button>}
          </div>
        </div>;
    },
    children: <Button type="primary">上传知识库文档</Button>
  }
}`,...g.parameters?.docs?.source}}},_=[`PictureCard`,`Basic`,`DragSimulation`,`CustomItemRender`]}));v();export{m as Basic,g as CustomItemRender,h as DragSimulation,p as PictureCard,_ as __namedExportsOrder,d as default,v as n,c as t};