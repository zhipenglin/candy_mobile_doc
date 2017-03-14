export default function(code,lang){
    return Promise.all([import('highlight.js'),import('highlight.js/styles/androidstudio.css')]).then(([highlight])=>{
        highlight.configure({
            useBR:true
        });
        return new Promise(resolve=>{
            setTimeout(()=>{
                if(lang){
                    resolve(highlight.highlight(lang,code).value);
                }else{
                    resolve(highlight.highlightAuto(code).value);
                }
            },0);
        });
    });
}