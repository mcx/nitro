"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4785],{87499:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(85893),i=t(11151);const s={title:"Nitro with openai-node",description:"Nitro intergration guide for Node.js."},r=void 0,a={id:"examples/openai-node",title:"Nitro with openai-node",description:"Nitro intergration guide for Node.js.",source:"@site/docs/examples/openai-node.md",sourceDirName:"examples",slug:"/examples/openai-node",permalink:"/examples/openai-node",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/nitro/tree/main/docs/docs/examples/openai-node.md",tags:[],version:"current",lastUpdatedBy:"hiento09",lastUpdatedAt:1702355743,formattedLastUpdatedAt:"Dec 12, 2023",frontMatter:{title:"Nitro with openai-node",description:"Nitro intergration guide for Node.js."},sidebar:"docsSidebar",previous:{title:"Nitro with Pal Chat",permalink:"/examples/palchat"},next:{title:"Nitro with openai-python",permalink:"/examples/openai-python"}},c={},d=[{value:"Chat Completion",id:"chat-completion",level:2},{value:"Embedding",id:"embedding",level:2},{value:"Audio",id:"audio",level:2},{value:"How to reproduce",id:"how-to-reproduce",level:2}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"You can migrate from OAI API or Azure OpenAI to Nitro using your existing NodeJS code quickly"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"ONLY"})," thing you need to do is to override ",(0,o.jsx)(n.code,{children:"baseURL"})," in ",(0,o.jsx)(n.code,{children:"openai"})," init with ",(0,o.jsx)(n.code,{children:"Nitro"})," URL"]}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["NodeJS OpenAI SDK: ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/openai",children:"https://www.npmjs.com/package/openai"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"chat-completion",children:"Chat Completion"}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:" Engine "}),(0,o.jsx)("td",{children:" Typescript Code "})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:" Nitro "}),(0,o.jsx)("td",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import OpenAI from 'openai';\n\nconst openai = new OpenAI({\n  apiKey: '', // defaults to process.env[\"OPENAI_API_KEY\"]\n  baseURL: \"http://localhost:3928/v1/\" // https://api.openai.com/v1\n});\n\nasync function chatCompletion() {\n  const stream = await openai.beta.chat.completions.stream({\n    model: 'gpt-3.5-turbo',\n    messages: [{ role: 'user', content: 'Say this is a test' }],\n    stream: true,\n  });\n\n  stream.on('content', (delta, snapshot) => {\n    process.stdout.write(delta);\n  });\n\n  for await (const chunk of stream) {\n    process.stdout.write(chunk.choices[0]?.delta?.content || '');\n  }\n\n  const chatCompletion = await stream.finalChatCompletion();\n  console.log(chatCompletion); // {id: \"\u2026\", choices: [\u2026], \u2026}\n}\nchatCompletion()\n"})})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:" OAI "}),(0,o.jsx)("td",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import OpenAI from 'openai';\n\nconst openai = new OpenAI({\n  apiKey: '', // defaults to process.env[\"OPENAI_API_KEY\"]\n});\n\nasync function chatCompletion() {\n  const stream = await openai.beta.chat.completions.stream({\n    model: 'gpt-3.5-turbo',\n    messages: [{ role: 'user', content: 'Say this is a test' }],\n    stream: true,\n  });\n\n  stream.on('content', (delta, snapshot) => {\n    process.stdout.write(delta);\n  });\n\n  for await (const chunk of stream) {\n    process.stdout.write(chunk.choices[0]?.delta?.content || '');\n  }\n\n  const chatCompletion = await stream.finalChatCompletion();\n  console.log(chatCompletion); // {id: \"\u2026\", choices: [\u2026], \u2026}\n}\nchatCompletion()\n"})})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:" Azure OAI "}),(0,o.jsx)("td",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import OpenAI from 'openai';\n\nconst resource = '<your resource name>';\nconst model = '<your model>';\nconst apiVersion = '2023-06-01-preview';\nconst apiKey = process.env['AZURE_OPENAI_API_KEY'];\n\nif (!apiKey) {\n  throw new Error('The AZURE_OPENAI_API_KEY variable is missing.');\n}\n\nconst baseURL = `https://${resource}.openai.azure.com/openai/` +\n                `deployments/${model}`;\n\nconst openai = new OpenAI({\n  apiKey,\n  baseURL,\n  defaultQuery: { 'api-version': apiVersion },\n  defaultHeaders: { 'api-key': apiKey },\n});\n\nasync function chatCompletion() {\n  try {\n    const stream = await openai.beta.chat.completions.stream({\n      model: 'gpt-3.5-turbo',\n      messages: [{ role: 'user', content: 'Say this is a test' }],\n      stream: true,\n    });\n\n    stream.on('content', (delta, snapshot) => {\n      process.stdout.write(delta);\n    });\n\n    for await (const chunk of stream) {\n      process.stdout.write(chunk.choices[0]?.delta?.content || '');\n    }\n\n    const chatCompletion = await stream.finalChatCompletion();\n    console.log(chatCompletion); // Log the final completion\n  } catch (error) {\n    console.error('Error in chat completion:', error);\n  }\n}\n\nchatCompletion();\n"})})})]})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Resource:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#create-a-resource",children:"Azure Create a resource"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/ai-services/openai/reference#rest-api-versioning",children:"Azure-OAI Rest API versoning"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"embedding",children:"Embedding"}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:" Engine "}),(0,o.jsx)("td",{children:" Embedding "})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:" Nitro "}),(0,o.jsx)("td",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import OpenAI from 'openai';\n\nconst openai = new OpenAI({\n  apiKey: '', // Defaults to process.env[\"OPENAI_API_KEY\"]\n  baseURL: 'http://localhost:3928/v1/'\n  // 'https://api.openai.com/v1'\n});\n\nasync function embedding() {\n  try {\n    const response = await openai.embeddings.create({\n      input: 'Hello How are you?',\n      model: 'text-embedding-ada-002'\n    });\n    console.log(response); // Log the response\n  } catch (error) {\n    console.error('Error in fetching embedding:', error);\n  }\n}\n\nembedding();\n"})})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:" OAI "}),(0,o.jsx)("td",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import OpenAI from 'openai';\n\nconst openai = new OpenAI({\n  apiKey: '', // defaults to process.env[\"OPENAI_API_KEY\"]\n});\n\nasync function embedding() {\n  const embedding = await openai.embeddings.create({\n    input: 'Hello How are you?',\n    model: 'text-embedding-ada-002'\n  });\n  console.log(embedding); // {object: \"list\", data: [\u2026], \u2026}\n}\n\nembedding();\n"})})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:" Azure OAI "}),(0,o.jsx)("td",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import OpenAI from 'openai';\n\nconst resource = '<your resource name>';\nconst model = '<your model>';\nconst apiVersion = '2023-06-01-preview';\nconst apiKey = process.env['AZURE_OPENAI_API_KEY'];\n\nif (!apiKey) {\n  throw new Error('The AZURE_OPENAI_API_KEY variable is missing.');\n}\n\n// Splitting the baseURL into concatenated parts for readability\nconst baseURL = `https://${resource}.openai.azure.com/openai/` +\n                `deployments/${model}`;\n\nconst openai = new OpenAI({\n  apiKey,\n  baseURL,\n  defaultQuery: { 'api-version': apiVersion },\n  defaultHeaders: { 'api-key': apiKey },\n});\n\nasync function embedding() {\n  const embedding = await openai.embeddings.create({\n    input: 'Hello How are you?',\n    model: 'text-embedding-ada-002'\n  });\n  console.log(embedding); // {object: \"list\", data: [\u2026], \u2026}\n}\n\nembedding();\n"})})})]})]}),"\n",(0,o.jsx)(n.h2,{id:"audio",children:"Audio"}),"\n",(0,o.jsx)(n.admonition,{title:"Coming soon",type:"info"}),"\n",(0,o.jsx)(n.h2,{id:"how-to-reproduce",children:"How to reproduce"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Step 1:"})," Dependencies installation"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install --save openai typescript\n# or\nyarn add openai\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Step 2:"})," Fill ",(0,o.jsx)(n.code,{children:"tsconfig.json"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'{\n  "compilerOptions": {\n    "moduleResolution": "node",\n    "sourceMap": true,\n    "outDir": "dist",\n    "target": "es2020",\n    "lib": ["es2020"],\n    "module": "commonjs",\n  },\n  "lib": ["es2015"]\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Step 3:"})," Fill ",(0,o.jsx)(n.code,{children:"index.ts"})," file with code."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Step 4:"})," Build with ",(0,o.jsx)(n.code,{children:"npx tsc"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Step 5:"})," Run the code with ",(0,o.jsx)(n.code,{children:"node dist/index.js"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var o=t(67294);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);