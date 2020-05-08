const t=async(t,o)=>{try{const a=await t.fetch(`${o}.json`);return await a.json()}catch(t){console.error(t)}};export{t as u};
