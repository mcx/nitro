"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3933],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>h});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,i=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=p(n),d=l,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(h,r(r({ref:e},m),{},{components:n})):a.createElement(h,r({ref:e},m))}));function h(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:l,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3388:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const i={title:"Installation",slug:"/install"},r="Nitro Installation Guide",o={unversionedId:"new/install",id:"new/install",title:"Installation",description:"This guide provides instructions for installing Nitro using the provided install.sh and install.bat scripts for Linux, macOS, and Windows systems.",source:"@site/docs/new/install.md",sourceDirName:"new",slug:"/install",permalink:"/install",draft:!1,editUrl:"https://github.com/janhq/nitro/tree/main/docs/docs/new/install.md",tags:[],version:"current",lastUpdatedBy:"automaticcat",lastUpdatedAt:1700452306,formattedLastUpdatedAt:"Nov 20, 2023",frontMatter:{title:"Installation",slug:"/install"},sidebar:"docsSidebar",previous:{title:"Quickstart",permalink:"/new/quickstart"},next:{title:"Build From Source",permalink:"/new/build-source"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation Instructions",id:"installation-instructions",level:2},{value:"Linux and macOS",id:"linux-and-macos",level:3},{value:"Windows",id:"windows",level:3},{value:"Usage",id:"usage",level:2},{value:"Uninstallation",id:"uninstallation",level:2}],m={toc:p},u="wrapper";function c(t){let{components:e,...n}=t;return(0,l.kt)(u,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nitro-installation-guide"},"Nitro Installation Guide"),(0,l.kt)("p",null,"This guide provides instructions for installing Nitro using the provided ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/janhq/nitro/blob/main/install.sh"},"install.sh")," and ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/janhq/nitro/blob/main/install.bat"},"install.bat")," scripts for Linux, macOS, and Windows systems."),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("p",null,"The installation script offers the following features:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Root Privilege Check"),": Ensures the script is run with root privileges to avoid permission issues."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Dependency Check"),": Checks for and advises on the installation of ",(0,l.kt)("inlineCode",{parentName:"li"},"jq")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"unzip"),"."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Automated Nitro Installation"),": Downloads and installs the appropriate Nitro version based on the user's OS and architecture."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Uninstall Script Creation"),": Generates an uninstall script for easy removal of Nitro if needed."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Enhanced User Experience"),": Offers clear and colored output messages during the installation process.")),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Linux and macOS"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"jq"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"curl")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo")," are required. If ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo")," is not available, the user must have passwordless sudo privileges. If ",(0,l.kt)("inlineCode",{parentName:"p"},"jq")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"curl")," are not available, the script will attempt to suggest installation commands for these packages.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Windows"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"PowerShell")," are required.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"GPU Version"),": GPU is supported on Linux and Windows only. ",(0,l.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/cuda-toolkit"},"nvidia-cuda-toolkits-12.x")," is required on both Linux and Windows. "))),(0,l.kt)("h2",{id:"installation-instructions"},"Installation Instructions"),(0,l.kt)("h3",{id:"linux-and-macos"},"Linux and macOS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Latest version (CPU is default):")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://raw.githubusercontent.com/janhq/nitro/main/install.sh | sudo /bin/bash -\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Specific Version Installation:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://raw.githubusercontent.com/janhq/nitro/main/install.sh -o /tmp/install.sh && chmod +x /tmp/install.sh && sudo bash /tmp/install.sh --version 0.1.7 && rm /tmp/install.sh\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"GPU Version Installation:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://raw.githubusercontent.com/janhq/nitro/main/install.sh -o /tmp/install.sh && chmod +x /tmp/install.sh && sudo bash /tmp/install.sh --gpu && rm /tmp/install.sh\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"GPU Version Installation Specific Version:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://raw.githubusercontent.com/janhq/nitro/main/install.sh -o /tmp/install.sh && chmod +x /tmp/install.sh && sudo bash /tmp/install.sh --gpu --version 0.1.7 && rm /tmp/install.sh\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Manual Installation by downloaing the script loacally and run with different arguments:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Download the script\ncurl -sfL https://raw.githubusercontent.com/janhq/nitro/main/install.sh -o ./install.sh\n\n# Make the script executable\nchmod +x ./install.sh\n\n# Arguments supported\n#   --version: Specify the version to install for example "--version 0.1.7", default is latest, list version of nitro can be found in https://github.com/janhq/nitro/releases\n#   --gpu: Install the GPU version of nitro, default is CPU version\n\n# Run one of the following commands\n\n# Download and install the latest version of nitro\nsudo ./install.sh\n\n# Download and install the specific version of nitro\nsudo ./install.sh --version 0.1.7\n\n# Download and install the GPU version of nitro\nsudo ./install.sh --gpu\n\n# Download and install the GPU version of nitro with specific version\nsudo ./install.sh --gpu --version 0.1.7\n')))),(0,l.kt)("h3",{id:"windows"},"Windows"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Latest version (CPU is default)")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"powershell -Command \"& { Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/janhq/nitro/main/install.bat' -OutFile 'install.bat'; .\\install.bat; Remove-Item -Path 'install.bat' }\"\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Specific Version Installation:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"powershell -Command \"& { Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/janhq/nitro/main/install.bat' -OutFile 'install.bat'; .\\install.bat --version 0.1.7; Remove-Item -Path 'install.bat' }\"\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"GPU Version Installation:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"powershell -Command \"& { Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/janhq/nitro/main/install.bat' -OutFile 'install.bat'; .\\install.bat --gpu; Remove-Item -Path 'install.bat' }\"\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"GPU Version Installation Specific Version:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"powershell -Command \"& { Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/janhq/nitro/main/install.bat' -OutFile 'install.bat'; .\\install.bat --gpu --version 0.1.7; Remove-Item -Path 'install.bat' }\"\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Manual Installation by downloaing the script loacally and run with different arguments")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Download the script\nInvoke-WebRequest -Uri 'https://raw.githubusercontent.com/janhq/nitro/main/install.bat' -OutFile 'install.bat'\n\n# Arguments supported\n#   --version: Specify the version to install for example \"--version 0.1.7\", default is latest, list version of nitro can be found in https://github.com/janhq/nitro/releases\n#   --gpu: Install the GPU version of nitro, default is CPU version\n# Run one of the following commands\n# Download and install the latest version of nitro\n.\\install.bat\n\n# Download and install the specific version of nitro\n.\\install.bat --version 0.1.7\n\n# Download and install the GPU version of nitro\n.\\install.bat --gpu\n\n# Download and install the GPU version of nitro with specific version\n.\\install.bat --gpu --version 0.1.7\n")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"After installation, launch Nitro by typing ",(0,l.kt)("inlineCode",{parentName:"p"},"nitro")," (or ",(0,l.kt)("inlineCode",{parentName:"p"},"nitro.exe")," on Windows) in a new terminal or PowerShell window. This will start the Nitro server."),(0,l.kt)("p",null,"Simple testcase with nitro, after starting the server, you can run the following command to test the server in a new terminal or powershell session:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"On Linux and MacOS:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Linux and Macos"',title:'"Linux',and:!0,'Macos"':!0},'# Download tiny model\nDOWNLOAD_URL=https://huggingface.co/TheBloke/TinyLlama-1.1B-Chat-v0.3-GGUF/resolve/main/tinyllama-1.1b-chat-v0.3.Q2_K.gguf\n# Check if /tmp/testmodel exists, if not, download it\nif [[ ! -f "/tmp/testmodel" ]]; then\n    wget $DOWNLOAD_URL -O /tmp/testmodel\nfi\n# Load the model to nitro\ncurl -s --location \'http://localhost:3928/inferences/llamacpp/loadModel\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "llama_model_path": "/tmp/testmodel",\n    "ctx_len": 2048,\n    "ngl": 32,\n    "embedding": false\n}\'\n# Send a prompt request to nitro\ncurl -s --location \'http://localhost:3928/inferences/llamacpp/chat_completion\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n        "messages": [\n            {"content": "Hello there", "role": "assistant"},\n            {"content": "Write a long and sad story for me", "role": "user"}\n        ],\n        "stream": true,\n        "max_tokens": 100,\n        "stop": ["hello"],\n        "frequency_penalty": 0,\n        "presence_penalty": 0,\n        "temperature": 0.7\n    }\'\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"On Windows:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Windows"',title:'"Windows"'},'# Download tiny model\nset "MODEL_PATH=%TEMP%\\testmodel"\nif not exist "%MODEL_PATH%" (\n    bitsadmin.exe /transfer "DownloadTestModel" %DOWNLOAD_URL% "%MODEL_PATH%"\n)\n\n# Load the model to nitro\ncall set "MODEL_PATH_STRING=%%MODEL_PATH:\\=\\\\%%"\nset "curl_data1={\\"llama_model_path\\":\\"%MODEL_PATH_STRING%\\"}"\ncurl.exe -s -w "%%{http_code}" --location "http://localhost:3928/inferences/llamacpp/loadModel" --header "Content-Type: application/json" --data "%curl_data1%"\n\n# Send a prompt request to nitro\nset "curl_data2={\\"messages\\":[{\\"content\\":\\"Hello there\\",\\"role\\":\\"assistant\\"},{\\"content\\":\\"Write a long and sad story for me\\",\\"role\\":\\"user\\"}],\\"stream\\":true,\\"model\\":\\"gpt-3.5-turbo\\",\\"max_tokens\\":100,\\"stop\\":[\\"hello\\"],\\"frequency_penalty\\":0,\\"presence_penalty\\":0,\\"temperature\\":0.7}"\ncurl.exe -s -w "%%{http_code}" --location "http://localhost:3928/inferences/llamacpp/chat_completion" ^\n--header "Content-Type: application/json" ^\n--data "%curl_data2%"\n')))),(0,l.kt)("h2",{id:"uninstallation"},"Uninstallation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Linux and macOS"),": Run ",(0,l.kt)("inlineCode",{parentName:"li"},"sudo uninstall_nitro.sh")," from anywhere (the script is added to PATH)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Windows"),": Open PowerShell and run ",(0,l.kt)("inlineCode",{parentName:"li"},"uninstallnitro.bat")," from anywhere (the script is added to PATH).")))}c.isMDXComponent=!0}}]);