const clock= document.querySelector('.clock');

const tick = () =>{

    const now = new Date();

    const h=now.getHours();
    const m=now.getMinutes();
    const s=now.getSeconds();

    // console.log(`${h}:${m}:${s}`);
    const html = `<h1>
                 <span>${h}</span>
                 :
                 <span>${m}</span>
                 :
                 <span>${s}</span>
                 </h1>`;
                
    clock.innerHTML = html;

};

setInterval(tick,1000);