import{_ as r}from"./entry.j-2EdQzp.js";const s=async e=>{const a=await r(()=>import("./onig.mBJmD8D5.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default);return WebAssembly.instantiate(a,e).then(t=>t.instance.exports)};export{s as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
