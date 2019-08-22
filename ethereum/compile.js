const path = require('path');
const solc = require('solc');
const fs =  require('fs-extra');
const buildpath= path.resolve(__dirname,'build');
fs.removeSync(buildpath);  //移除build目录
const CampainPath= path.resolve(__dirname,'contracts','campaign.sol');
const source=fs.readFileSync(CampainPath,'utf8');
const output= solc.compile(source,1).contracts;
//console.log(output);
fs.ensureDirSync(buildpath);  //创建build目录
for(let contract in output){
  //contract 带有:号，需将冒号替换掉
fs.outputJsonSync(path.resolve(buildpath,contract.replace(":","") + '.json'),output[contract]);
}
