import{bD as e,a6 as t,a0 as n,r as i,am as l,a7 as a,aE as o,bW as r,bX as c,V as s,Z as d,D as u,M as m,K as p,t as h,J as g}from"./index-52b3c3fe.js";import{C as f}from"./CheckOutlined-e689fa35.js";const b=e=>{const{multipleSelectItemHeight:n,paddingXXS:i,lineWidth:l,INTERNAL_FIXED_ITEM_MARGIN:a}=e,o=e.max(e.calc(i).sub(l).equal(),0);return{basePadding:o,containerPadding:e.max(e.calc(o).sub(a).equal(),0),itemHeight:t(n),itemLineHeight:t(e.calc(n).sub(e.calc(e.lineWidth).mul(2)).equal())}},I=t=>{const{componentCls:n,iconCls:i,borderRadiusSM:l,motionDurationSlow:a,paddingXS:o,multipleItemColorDisabled:r,multipleItemBorderColorDisabled:c,colorIcon:s,colorIconHover:d,INTERNAL_FIXED_ITEM_MARGIN:u}=t,m=`${n}-selection-overflow`;return{[m]:{position:"relative",display:"flex",flex:"auto",flexWrap:"wrap",maxWidth:"100%","&-item":{flex:"none",alignSelf:"center",maxWidth:"100%",display:"inline-flex"},[`${n}-selection-item`]:{display:"flex",alignSelf:"center",flex:"none",boxSizing:"border-box",maxWidth:"100%",marginBlock:u,borderRadius:l,cursor:"default",transition:`font-size ${a}, line-height ${a}, height ${a}`,marginInlineEnd:t.calc(u).mul(2).equal(),paddingInlineStart:o,paddingInlineEnd:t.calc(o).div(2).equal(),[`${n}-disabled&`]:{color:r,borderColor:c,cursor:"not-allowed"},"&-content":{display:"inline-block",marginInlineEnd:t.calc(o).div(2).equal(),overflow:"hidden",whiteSpace:"pre",textOverflow:"ellipsis"},"&-remove":Object.assign(Object.assign({},e()),{display:"inline-flex",alignItems:"center",color:s,fontWeight:"bold",fontSize:10,lineHeight:"inherit",cursor:"pointer",[`> ${i}`]:{verticalAlign:"-0.2em"},"&:hover":{color:d}})}}}},S=(e,n)=>{const{componentCls:i,INTERNAL_FIXED_ITEM_MARGIN:l}=e,a=`${i}-selection-overflow`,o=e.multipleSelectItemHeight,r=(e=>{const{multipleSelectItemHeight:t,selectHeight:n,lineWidth:i}=e;return e.calc(n).sub(t).div(2).sub(i).equal()})(e),c=n?`${i}-${n}`:"",s=b(e);return{[`${i}-multiple${c}`]:Object.assign(Object.assign({},I(e)),{[`${i}-selector`]:{display:"flex",flexWrap:"wrap",alignItems:"center",height:"100%",paddingInline:s.basePadding,paddingBlock:s.containerPadding,borderRadius:e.borderRadius,[`${i}-disabled&`]:{background:e.multipleSelectorBgDisabled,cursor:"not-allowed"},"&:after":{display:"inline-block",width:0,margin:`${t(l)} 0`,lineHeight:t(o),visibility:"hidden",content:'"\\a0"'}},[`${i}-selection-item`]:{height:s.itemHeight,lineHeight:t(s.itemLineHeight)},[`${a}-item + ${a}-item`]:{[`${i}-selection-search`]:{marginInlineStart:0}},[`${a}-item-suffix`]:{height:"100%"},[`${i}-selection-search`]:{display:"inline-flex",position:"relative",maxWidth:"100%",marginInlineStart:e.calc(e.inputPaddingHorizontalBase).sub(r).equal(),"\n          &-input,\n          &-mirror\n        ":{height:o,fontFamily:e.fontFamily,lineHeight:t(o),transition:`all ${e.motionDurationSlow}`},"&-input":{width:"100%",minWidth:4.1},"&-mirror":{position:"absolute",top:0,insetInlineStart:0,insetInlineEnd:"auto",zIndex:999,whiteSpace:"pre",visibility:"hidden"}},[`${i}-selection-placeholder`]:{position:"absolute",top:"50%",insetInlineStart:e.inputPaddingHorizontalBase,insetInlineEnd:e.inputPaddingHorizontalBase,transform:"translateY(-50%)",transition:`all ${e.motionDurationSlow}`}})}};function $(e,t){const{componentCls:n}=e,i=t?`${n}-${t}`:"",l={[`${n}-multiple${i}`]:{fontSize:e.fontSize,[`${n}-selector`]:{[`${n}-show-search&`]:{cursor:"text"}},[`\n        &${n}-show-arrow ${n}-selector,\n        &${n}-allow-clear ${n}-selector\n      `]:{paddingInlineEnd:e.calc(e.fontSizeIcon).add(e.controlPaddingHorizontal).equal()}}};return[S(e,t),l]}const v=e=>{const{componentCls:t}=e,i=n(e,{selectHeight:e.controlHeightSM,multipleSelectItemHeight:e.multipleItemHeightSM,borderRadius:e.borderRadiusSM,borderRadiusSM:e.borderRadiusXS}),l=n(e,{fontSize:e.fontSizeLG,selectHeight:e.controlHeightLG,multipleSelectItemHeight:e.multipleItemHeightLG,borderRadius:e.borderRadiusLG,borderRadiusSM:e.borderRadius});return[$(e),$(i,"sm"),{[`${t}-multiple${t}-sm`]:{[`${t}-selection-placeholder`]:{insetInline:e.calc(e.controlPaddingHorizontalSM).sub(e.lineWidth).equal()},[`${t}-selection-search`]:{marginInlineStart:2}}},$(l,"lg")]};function x(e){let{suffixIcon:t,clearIcon:n,menuItemSelectedIcon:s,removeIcon:d,loading:u,multiple:m,hasFeedback:p,prefixCls:h,showSuffixIcon:g,feedbackIcon:b,showArrow:I,componentName:S}=e;const $=null!=n?n:i.createElement(l,null),v=e=>null!==t||p||I?i.createElement(i.Fragment,null,!1!==g&&e,p&&b):null;let x=null;if(void 0!==t)x=v(t);else if(u)x=v(i.createElement(o,{spin:!0}));else{const e=`${h}-suffix`;x=t=>{let{open:n,showSearch:l}=t;return v(n&&l?i.createElement(r,{className:e}):i.createElement(c,{className:e}))}}let E=null;E=void 0!==s?s:m?i.createElement(f,null):null;let H=null;return H=void 0!==d?d:i.createElement(a,null),{clearIcon:$,suffixIcon:x,itemIcon:E,removeIcon:H}}var E=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],H=i.forwardRef((function(e,t){var n=e.prefixCls,l=void 0===n?"rc-checkbox":n,a=e.className,o=e.style,r=e.checked,c=e.disabled,f=e.defaultChecked,b=void 0!==f&&f,I=e.type,S=void 0===I?"checkbox":I,$=e.title,v=e.onChange,x=s(e,E),H=i.useRef(null),w=d(b,{value:r}),k=u(w,2),R=k[0],y=k[1];i.useImperativeHandle(t,(function(){return{focus:function(e){var t;null===(t=H.current)||void 0===t||t.focus(e)},blur:function(){var e;null===(e=H.current)||void 0===e||e.blur()},input:H.current}}));var C=m(l,a,p(p({},"".concat(l,"-checked"),R),"".concat(l,"-disabled"),c));return i.createElement("span",{className:C,title:$,style:o},i.createElement("input",h({},x,{className:"".concat(l,"-input"),ref:H,onChange:function(t){c||("checked"in e||y(t.target.checked),null==v||v({target:g(g({},e),{},{type:S,checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))},disabled:c,checked:!!R,type:S})),i.createElement("span",{className:"".concat(l,"-inner")}))}));export{H as C,I as a,b,v as g,x as u};
