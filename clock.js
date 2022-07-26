const clock= document.querySelector('.clock');

const tick = () =>{

    const now = new Date();

    let h=now.getHours();
    let m=now.getMinutes();
    let s=now.getSeconds();
    h=String(h).padStart(2, '0');
    m=String(m).padStart(2,'0');
    s=String(s).padStart(2,'0');
    let ampm="PM";
    if(13<h<23){
        ampm="AM";
    }
    // console.log(`${h}:${m}:${s}`);
    const html = `<h1>
                 <span>${h}</span>
                 :
                 <span>${m}</span>
                 :
                 <span>${s}</span>
                 
                 <span>${ampm}</span>
                 </h1>`;
                
    clock.innerHTML = html;

};

setInterval(tick,1000);