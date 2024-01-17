"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2758],{90207:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var n=t(85893),g=t(11151);const a={title:"Nitro with Autogen",description:"Nitro intergration guide for using Autogen.",keywords:["Nitro","autogen","autogen studio","autogen 2.0","litellm","ollama","Jan","fast inference","inference server","local AI","large language model","OpenAI compatible","open source","llama"]},o=void 0,s={id:"examples/autogen",title:"Nitro with Autogen",description:"Nitro intergration guide for using Autogen.",source:"@site/docs/examples/autogen.md",sourceDirName:"examples",slug:"/examples/autogen",permalink:"/examples/autogen",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/nitro/tree/main/docs/docs/examples/autogen.md",tags:[],version:"current",lastUpdatedBy:"automaticcat",lastUpdatedAt:1705507395,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{title:"Nitro with Autogen",description:"Nitro intergration guide for using Autogen.",keywords:["Nitro","autogen","autogen studio","autogen 2.0","litellm","ollama","Jan","fast inference","inference server","local AI","large language model","OpenAI compatible","open source","llama"]},sidebar:"docsSidebar",previous:{title:"Nitro with ChatGPTBox",permalink:"/examples/chatboxgpt"},next:{title:"FAQs",permalink:"/faq"}},l={},i=[{value:"What is AutoGen?",id:"what-is-autogen",level:2},{value:"Setting Up",id:"setting-up",level:2},{value:"Install AutoGen Studio",id:"install-autogen-studio",level:3},{value:"Launch AutoGen Studio",id:"launch-autogen-studio",level:3},{value:"Using a Local Model with Nitro",id:"using-a-local-model-with-nitro",level:2},{value:"Setting Up a Local Agent",id:"setting-up-a-local-agent",level:2},{value:"Crafting a Workflow",id:"crafting-a-workflow",level:2},{value:"Set a dummy OpenAI API Key",id:"set-a-dummy-openai-api-key",level:2}];function r(A){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,g.a)(),...A.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"This guide demonstrates how to use Nitro with Autogen to develope a multi-agent framework."}),"\n",(0,n.jsx)(e.h2,{id:"what-is-autogen",children:"What is AutoGen?"}),"\n",(0,n.jsx)(e.p,{children:"AutoGen makes developing multi-agent conversations a breeze. It's perfect for complex Language Model (LLM) projects, offering flexible, interactive agents. These agents can work with LLMs, human input, and other tools in various combinations."}),"\n",(0,n.jsx)(e.p,{children:"AutoGen Studio upgrades AutoGen with a user-friendly drag-and-drop interface. It simplifies creating and tweaking agents and workflows. You can start chat sessions, track chat history and files, and monitor time spent. It also lets users add extra skills to agents and share their projects easily, catering to all user levels."}),"\n",(0,n.jsx)(e.h2,{id:"setting-up",children:"Setting Up"}),"\n",(0,n.jsx)(e.h3,{id:"install-autogen-studio",children:"Install AutoGen Studio"}),"\n",(0,n.jsx)(e.p,{children:"Just run:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"pip install autogenstudio\n"})}),"\n",(0,n.jsx)(e.h3,{id:"launch-autogen-studio",children:"Launch AutoGen Studio"}),"\n",(0,n.jsx)(e.p,{children:"Use this command:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"autogenstudio ui --port 8000\n"})}),"\n",(0,n.jsxs)(e.p,{children:["For more on AutoGen, visit their ",(0,n.jsx)(e.a,{href:"https://microsoft.github.io/autogen/blog/2023/12/01/AutoGenStudio/",children:"page"}),"."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Autogen Studio page",src:t(66817).Z+"",width:"1236",height:"669"})}),"\n",(0,n.jsx)(e.h2,{id:"using-a-local-model-with-nitro",children:"Using a Local Model with Nitro"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"1. Start Nitro Server"})}),"\n",(0,n.jsx)(e.p,{children:"Open your terminal and run:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"nitro\n"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"2. Download Model"})}),"\n",(0,n.jsxs)(e.p,{children:["To get the ",(0,n.jsx)(e.a,{href:"https://huggingface.co/janhq/stealth-v1.3-GGUF",children:"Stealth 7B"})," model, enter:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",metastring:'title="Get a model"',children:"mkdir model && cd model\nwget -O stealth-7b-model.gguf https://huggingface.co/janhq/stealth-v1.3-GGUF/resolve/main/stealth-v1.3.Q4_K_M.gguf\n"})}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsxs)(e.p,{children:["Explore more models at ",(0,n.jsx)(e.a,{href:"https://huggingface.co/TheBloke",children:"The Bloke"}),"."]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"3. Load the Model"})}),"\n",(0,n.jsx)(e.p,{children:"Run this to load the model:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",metastring:'title="Load model to the server"',children:'curl http://localhost:3928/inferences/llamacpp/loadmodel \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "llama_model_path": "model/stealth-7b-model.gguf",\n    "ctx_len": 512,\n    "ngl": 100,\n  }\'\n'})}),"\n",(0,n.jsx)(e.h2,{id:"setting-up-a-local-agent",children:"Setting Up a Local Agent"}),"\n",(0,n.jsx)(e.p,{children:"In AutoGen Studio, go to the `Agent`` tab and set up a new agent."}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Key setting:"})," In ",(0,n.jsx)(e.code,{children:"Model"})," section, use ",(0,n.jsx)(e.code,{children:"Base URL"}),": ",(0,n.jsx)(e.a,{href:"http://localhost:3928/v1",children:"http://localhost:3928/v1"}),"."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Local LLM with AutoGen",src:t(87178).Z+"",width:"1235",height:"670"})}),"\n",(0,n.jsx)(e.h2,{id:"crafting-a-workflow",children:"Crafting a Workflow"}),"\n",(0,n.jsxs)(e.p,{children:["Create a new workflow in ",(0,n.jsx)(e.code,{children:"Workflows"})," tab"]}),"\n",(0,n.jsxs)(e.p,{children:["Navigate to the ",(0,n.jsx)(e.code,{children:"Workflows"})," tab to create a new workflow. Change the ",(0,n.jsx)(e.code,{children:"Sender"})," model to your Stealth model."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Create local LLM work flow with AutoGen",src:t(22577).Z+"",width:"1233",height:"669"})}),"\n",(0,n.jsxs)(e.p,{children:["Make sure the ",(0,n.jsx)(e.code,{children:"Receiver"})," uses the agent you just set up."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Configure Receiver in AutoGen",src:t(57566).Z+"",width:"800",height:"142"})}),"\n",(0,n.jsx)(e.h2,{id:"set-a-dummy-openai-api-key",children:"Set a dummy OpenAI API Key"}),"\n",(0,n.jsx)(e.p,{children:"Set a dummy enviroment variable for OpenAI"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"export OPENAI_API_KEY=sk-***\n"})}),"\n",(0,n.jsxs)(e.p,{children:["You're all set! Test your agent in the ",(0,n.jsx)(e.code,{children:"Playground"}),"."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Example local LLM with Autogen",src:t(970).Z+"",width:"1236",height:"668"})})]})}function d(A={}){const{wrapper:e}={...(0,g.a)(),...A.components};return e?(0,n.jsx)(e,{...A,children:(0,n.jsx)(r,{...A})}):r(A)}},87178:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/autogen_localllm-d2467a3c91fc5037067b570cd364a565.png"},66817:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/autogen_page-fee66237c8104df0ca8f86bff6838b94.png"},57566:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"},970:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/autogen_stealth-6c3e8a8cd6e7508385dba73fc5625398.png"},22577:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/autogen_workflow-ec4d74427ef4cda109cff6d3703cf9d2.png"},11151:(A,e,t)=>{t.d(e,{Z:()=>s,a:()=>o});var n=t(67294);const g={},a=n.createContext(g);function o(A){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function s(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(g):A.components||g:o(A.components),n.createElement(a.Provider,{value:e},A.children)}}}]);