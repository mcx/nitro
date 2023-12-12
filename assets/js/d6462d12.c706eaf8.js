"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3933],{64705:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=s(85893),i=s(11151);const l={title:"Installation",slug:"/install",description:"How to install Nitro"},a="Nitro Installation Guide",o={id:"new/install",title:"Installation",description:"How to install Nitro",source:"@site/docs/new/install.md",sourceDirName:"new",slug:"/install",permalink:"/install",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/nitro/tree/main/docs/docs/new/install.md",tags:[],version:"current",lastUpdatedBy:"hiento09",lastUpdatedAt:1702355743,formattedLastUpdatedAt:"Dec 12, 2023",frontMatter:{title:"Installation",slug:"/install",description:"How to install Nitro"},sidebar:"docsSidebar",previous:{title:"Quickstart",permalink:"/quickstart"},next:{title:"Build From Source",permalink:"/build-source"}},r={},d=[{value:"Features",id:"features",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation Instructions",id:"installation-instructions",level:2},{value:"Linux and macOS",id:"linux-and-macos",level:3},{value:"Windows",id:"windows",level:3},{value:"Usage",id:"usage",level:2},{value:"Uninstallation",id:"uninstallation",level:2}];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"nitro-installation-guide",children:"Nitro Installation Guide"}),"\n",(0,t.jsxs)(e.p,{children:["This guide provides instructions for installing Nitro using the provided ",(0,t.jsx)(e.a,{href:"https://github.com/janhq/nitro/blob/main/install.sh",children:"install.sh"})," and ",(0,t.jsx)(e.a,{href:"https://github.com/janhq/nitro/blob/main/install.bat",children:"install.bat"})," scripts for Linux, macOS, and Windows systems."]}),"\n",(0,t.jsx)(e.h2,{id:"features",children:"Features"}),"\n",(0,t.jsx)(e.p,{children:"The installation script offers the following features:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Root Privilege Check"}),": Ensures the script is run with root privileges to avoid permission issues."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Dependency Check"}),": Checks for and advises on the installation of ",(0,t.jsx)(e.code,{children:"jq"})," and ",(0,t.jsx)(e.code,{children:"unzip"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Automated Nitro Installation"}),": Downloads and installs the appropriate Nitro version based on the user's OS and architecture."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Uninstall Script Creation"}),": Generates an uninstall script for easy removal of Nitro if needed."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Enhanced User Experience"}),": Offers clear and colored output messages during the installation process."]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Linux and macOS"}),": ",(0,t.jsx)(e.code,{children:"jq"}),", ",(0,t.jsx)(e.code,{children:"curl"})," and ",(0,t.jsx)(e.code,{children:"sudo"})," are required. If ",(0,t.jsx)(e.code,{children:"sudo"})," is not available, the user must have passwordless sudo privileges. If ",(0,t.jsx)(e.code,{children:"jq"})," or ",(0,t.jsx)(e.code,{children:"curl"})," are not available, the script will attempt to suggest installation commands for these packages."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Windows"}),": ",(0,t.jsx)(e.code,{children:"PowerShell"})," are required."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"GPU Version"}),": GPU is supported on Linux and Windows only. ",(0,t.jsx)(e.a,{href:"https://developer.nvidia.com/cuda-toolkit",children:"nvidia-cuda-toolkits-12.x"})," is required on both Linux and Windows."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"installation-instructions",children:"Installation Instructions"}),"\n",(0,t.jsx)(e.h3,{id:"linux-and-macos",children:"Linux and macOS"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Latest version (CPU is default):"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"curl -sfL https://raw.githubusercontent.com/janhq/nitro/main/install.sh | sudo /bin/bash -\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Specific Version Installation:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"curl -sfL https://raw.githubusercontent.com/janhq/nitro/main/install.sh -o /tmp/install.sh && chmod +x /tmp/install.sh && sudo bash /tmp/install.sh --version 0.1.7 && rm /tmp/install.sh\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"GPU Version Installation:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"curl -sfL https://raw.githubusercontent.com/janhq/nitro/main/install.sh -o /tmp/install.sh && chmod +x /tmp/install.sh && sudo bash /tmp/install.sh --gpu && rm /tmp/install.sh\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"GPU Version Installation Specific Version:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"curl -sfL https://raw.githubusercontent.com/janhq/nitro/main/install.sh -o /tmp/install.sh && chmod +x /tmp/install.sh && sudo bash /tmp/install.sh --gpu --version 0.1.7 && rm /tmp/install.sh\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Manual Installation by downloaing the script loacally and run with different arguments:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'# Download the script\ncurl -sfL https://raw.githubusercontent.com/janhq/nitro/main/install.sh -o ./install.sh\n\n# Make the script executable\nchmod +x ./install.sh\n\n# Arguments supported\n#   --version: Specify the version to install for example "--version 0.1.7", default is latest, list version of nitro can be found in https://github.com/janhq/nitro/releases\n#   --gpu: Install the GPU version of nitro, default is CPU version\n\n# Run one of the following commands\n\n# Download and install the latest version of nitro\nsudo ./install.sh\n\n# Download and install the specific version of nitro\nsudo ./install.sh --version 0.1.7\n\n# Download and install the GPU version of nitro\nsudo ./install.sh --gpu\n\n# Download and install the GPU version of nitro with specific version\nsudo ./install.sh --gpu --version 0.1.7\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"windows",children:"Windows"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Latest version (CPU is default)"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"powershell -Command \"& { Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/janhq/nitro/main/install.bat' -OutFile 'install.bat'; .\\install.bat; Remove-Item -Path 'install.bat' }\"\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Specific Version Installation:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"powershell -Command \"& { Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/janhq/nitro/main/install.bat' -OutFile 'install.bat'; .\\install.bat --version 0.1.7; Remove-Item -Path 'install.bat' }\"\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"GPU Version Installation:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"powershell -Command \"& { Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/janhq/nitro/main/install.bat' -OutFile 'install.bat'; .\\install.bat --gpu; Remove-Item -Path 'install.bat' }\"\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"GPU Version Installation Specific Version:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"powershell -Command \"& { Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/janhq/nitro/main/install.bat' -OutFile 'install.bat'; .\\install.bat --gpu --version 0.1.7; Remove-Item -Path 'install.bat' }\"\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Manual Installation by downloaing the script loacally and run with different arguments"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# Download the script\nInvoke-WebRequest -Uri 'https://raw.githubusercontent.com/janhq/nitro/main/install.bat' -OutFile 'install.bat'\n\n# Arguments supported\n#   --version: Specify the version to install for example \"--version 0.1.7\", default is latest, list version of nitro can be found in https://github.com/janhq/nitro/releases\n#   --gpu: Install the GPU version of nitro, default is CPU version\n# Run one of the following commands\n# Download and install the latest version of nitro\n.\\install.bat\n\n# Download and install the specific version of nitro\n.\\install.bat --version 0.1.7\n\n# Download and install the GPU version of nitro\n.\\install.bat --gpu\n\n# Download and install the GPU version of nitro with specific version\n.\\install.bat --gpu --version 0.1.7\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(e.p,{children:["After installation, launch Nitro by typing ",(0,t.jsx)(e.code,{children:"nitro"})," (or ",(0,t.jsx)(e.code,{children:"nitro.exe"})," on Windows) in a new terminal or PowerShell window. This will start the Nitro server."]}),"\n",(0,t.jsx)(e.p,{children:"Simple testcase with nitro, after starting the server, you can run the following command to test the server in a new terminal or powershell session:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"On Linux and MacOS:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",metastring:'title="Linux and Macos"',children:'# Download tiny model\nDOWNLOAD_URL=https://huggingface.co/TheBloke/TinyLlama-1.1B-Chat-v0.3-GGUF/resolve/main/tinyllama-1.1b-chat-v0.3.Q2_K.gguf\n# Check if /tmp/testmodel exists, if not, download it\nif [[ ! -f "/tmp/testmodel" ]]; then\n    wget $DOWNLOAD_URL -O /tmp/testmodel\nfi\n# Load the model to nitro\ncurl -s --location \'http://localhost:3928/inferences/llamacpp/loadModel\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "llama_model_path": "/tmp/testmodel",\n    "ctx_len": 2048,\n    "ngl": 32,\n    "embedding": false\n}\'\n# Send a prompt request to nitro\ncurl -s --location \'http://localhost:3928/v1/chat/completions\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n        "messages": [\n            {"content": "Hello there", "role": "assistant"},\n            {"content": "Write a long and sad story for me", "role": "user"}\n        ],\n        "stream": true,\n        "max_tokens": 100,\n        "stop": ["hello"],\n        "frequency_penalty": 0,\n        "presence_penalty": 0,\n        "temperature": 0.7\n    }\'\n'})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"On Windows:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",metastring:'title="Windows"',children:'# Download tiny model\nset "MODEL_PATH=%TEMP%\\testmodel"\nif not exist "%MODEL_PATH%" (\n    bitsadmin.exe /transfer "DownloadTestModel" %DOWNLOAD_URL% "%MODEL_PATH%"\n)\n\n# Load the model to nitro\ncall set "MODEL_PATH_STRING=%%MODEL_PATH:\\=\\\\%%"\nset "curl_data1={\\"llama_model_path\\":\\"%MODEL_PATH_STRING%\\"}"\ncurl.exe -s -w "%%{http_code}" --location "http://localhost:3928/inferences/llamacpp/loadModel" --header "Content-Type: application/json" --data "%curl_data1%"\n\n# Send a prompt request to nitro\nset "curl_data2={\\"messages\\":[{\\"content\\":\\"Hello there\\",\\"role\\":\\"assistant\\"},{\\"content\\":\\"Write a long and sad story for me\\",\\"role\\":\\"user\\"}],\\"stream\\":true,\\"model\\":\\"gpt-3.5-turbo\\",\\"max_tokens\\":100,\\"stop\\":[\\"hello\\"],\\"frequency_penalty\\":0,\\"presence_penalty\\":0,\\"temperature\\":0.7}"\ncurl.exe -s -w "%%{http_code}" --location "http://localhost:3928/v1/chat/completions" ^\n--header "Content-Type: application/json" ^\n--data "%curl_data2%"\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"uninstallation",children:"Uninstallation"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Linux and macOS"}),": Run ",(0,t.jsx)(e.code,{children:"sudo uninstall_nitro.sh"})," from anywhere (the script is added to PATH)."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Windows"}),": Open PowerShell and run ",(0,t.jsx)(e.code,{children:"uninstallnitro.bat"})," from anywhere (the script is added to PATH)."]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},11151:(n,e,s)=>{s.d(e,{Z:()=>o,a:()=>a});var t=s(67294);const i={},l=t.createContext(i);function a(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);