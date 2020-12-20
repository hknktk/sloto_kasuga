'use strict'

{
  class panel{
    constructor(){
      const section=document.createElement('section');
      section.classList.add('panel');

      this.img=document.createElement('img');
      this.img.src=this.getRandomImage();

      this.timeoutId=undefined;

      this.stop=document.createElement('div');
      this.stop.textContent='STOP';
      this.stop.classList.add('stop');
      this.stop.addEventListener('click',()=>{
        clearTimeout(this.timeoutId);

        panelsLeft--;

        if (panelsLeft===0){
          checkResult();
        }
      })

      section.appendChild(this.img);
      section.appendChild(this.stop);

      const main=document.querySelector('main');
      main.appendChild(section);
    }

      getRandomImage(){
        const images=[
          'img/tooth.png',
          'img/apa.png',
          'img/oni.png',
        ];
        return images[Math.floor(Math.random()*images.length)];
      }

      spin() {
        this.img.src =this.getRandomImage();
        this.timeoutId=setTimeout(()=>{
          this.spin();
        },50);
      }
    

     isUnmatched(p1,p2) {
      // if(this.img.src !==p1.img.src && this.img.src !== p2.img.src){
      //   return true;
      // }else{
      //   return false;
      return this.img.src !== p1.img.src && this.img.src !== p2.img.src;
    }

    unmatch() {
      this.img.classList.add('unmatched');
    }
  }

    function checkResult(){
      if(panels[0].isUnmatched(panels[1],panels[2])){
        panels[0].unmatch();
      }
      if(panels[1].isUnmatched(panels[0],panels[2])){
        panels[1].unmatch();
      }
      if(panels[2].isUnmatched(panels[0],panels[3])){
        panels[2].unmatch();
      }
    }

  const panels=[
    new panel(),
    new panel(),
    new panel(),
  ];

  let panelsLeft=3;

  const spin =document.getElementById('spin');
  spin.addEventListener('click',()=>{
    panels.forEach(panel =>{
      panel.spin();
    });
  });
}