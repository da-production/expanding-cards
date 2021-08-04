window.addEventListener('load',()=>{
    config = {
        duration: 5,
    }
    // store all panel as array inside panels variable
    const panels = document.querySelectorAll('.panel');
    const bars = document.querySelectorAll('.panel .bar');

    // init i = 0 
    let i = 0;

    
    for(let j = 0; j < panels.length; j++){
        if(panels[j].classList.contains('active'))
        {
            i = j + 1;

            if(i == (panels.length)){
                i = 0;
            }
        }
    }
    
    bars.forEach((bar) => {
        bar.style.transitionDuration = config.duration + 's';
    });
    
    panels.forEach((panel) => {
        panel.addEventListener('click', () => {
            removeActiveClass();
            panel.querySelector('.bar').style.transitionDuration = config.duration + 's';
            panel.classList.add('active');
        });
    });

    // remove active classe from all panels
    function removeActiveClass(){
        panels.forEach((panel) => {
            panel.querySelector('.bar').style.transitionDuration = .5 + 's';
            panel.classList.remove('active');
        });
        
    }

    (function(){
        setInterval(() => {
            removeActiveClass()
            panels[i].classList.add('active');
            panels[i].querySelector('.bar').style.transitionDuration = config.duration + 's';
            i++;
            if(i == (panels.length)){
                i = 0;
            }
        },(config.duration * 1000));
    })();
});