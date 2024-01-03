const g=({type:r,label:b,onClick:o})=>{const e=document.createElement("button");return e.type="button",e.innerText=b,o&&e.addEventListener("click",o),e.className="button",r&&e.classList.add(r),e},B={title:"Components/Button",tags:["autodocs"],render:r=>g(r),argTypes:{type:{control:{type:"select"},options:["primary","secondary","plain"],description:"There are three different types of buttons: primary, secondary, and plain."},label:{control:"text"},onClick:{action:"onClick"}}},t={args:{label:"Primary Button"}},a={args:{label:"Secondary Button",type:"secondary"}},n={args:{label:"Plain Button",type:"plain"}};var s,c,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Primary Button'
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var i,p,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Button',
    type: 'secondary'
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,m,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Plain Button',
    type: 'plain'
  }
}`,...(y=(m=n.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const P=["Primary","Secondary","Plain"];export{n as Plain,t as Primary,a as Secondary,P as __namedExportsOrder,B as default};
