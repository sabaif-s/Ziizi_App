import{r,j as e,a}from"./index-BgspwcSr.js";function o({selectedNames:s}){const[n,l]=r.useState(!1);r.useEffect(()=>{window.addEventListener("resize",()=>window.innerWidth>=960&&l(!1))},[]),r.useEffect(()=>{console.log("common loaded")},[]);const i=e.jsxs("ul",{className:"mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6",children:[e.jsx(a.Typography,{as:"li",variant:"small",color:"blue-gray",className:"p-1 font-normal",children:e.jsx("a",{href:`#${s.firstNameLink}`,className:"flex items-center",children:s.firstNameLink})}),e.jsx(a.Typography,{as:"li",variant:"small",color:"blue-gray",className:"p-1 font-normal",children:e.jsx("a",{href:`#${s.secondNameLink}`,className:"flex items-center",children:s.secondNameLink})}),e.jsx(a.Typography,{as:"li",variant:"small",color:"blue-gray",className:"p-1 font-normal",children:e.jsx("a",{href:`#${s.thirdNameLink}`,className:"flex items-center",children:s.thirdNameLink})}),e.jsx(a.Typography,{as:"li",variant:"small",color:"blue-gray",className:"p-1 font-normal",children:e.jsx("a",{href:`#${s.fourthNameLink}`,className:"flex items-center",children:s.fourthNameLink})})]});return e.jsx("div",{className:"mt-6 max-h-[768px] w-[calc(100%+48px)]",children:e.jsxs(a.Navbar,{color:"cyan",fullWidth:!0,className:"sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4",children:[e.jsxs("div",{className:"flex items-center justify-between text-blue-gray-900 pr-8",children:[e.jsx(a.Typography,{as:"a",href:"#",className:"mr-4 cursor-pointer py-1.5 font-medium",children:s.brandName}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"mr-4 hidden lg:block",children:i}),e.jsxs("div",{className:"flex items-center gap-x-1",children:[e.jsx(a.Button,{variant:"text",size:"sm",className:"hidden lg:inline-block",children:e.jsx("span",{children:"Log In"})}),e.jsx(a.Button,{variant:"gradient",size:"sm",className:"hidden lg:inline-block",children:e.jsx("span",{children:"Sign in"})})]}),e.jsx(a.IconButton,{variant:"text",className:"ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden",ripple:!1,onClick:()=>l(!n),children:n?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",className:"h-6 w-6",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}):e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",stroke:"currentColor",strokeWidth:2,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"})})})]})]}),e.jsxs(a.MobileNav,{open:n,children:[i,e.jsxs("div",{className:"flex items-center gap-x-1",children:[e.jsx(a.Button,{fullWidth:!0,variant:"text",size:"sm",className:"",children:e.jsx("span",{children:"Log In"})}),e.jsx(a.Button,{fullWidth:!0,variant:"gradient",size:"sm",className:"",children:e.jsx("span",{children:"Sign in"})})]})]})]})})}export{o as default};
