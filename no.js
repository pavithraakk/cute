const catchElement = document.getElementById('catch');
catchElement.addEventListener('mouseover', () => { // to say what will happen when mouse is over
    const maxx = window.innerWidth - catchElement.offsetWidth;
    const maxy = window.innerHeight - catchElement.offsetHeight;
    const randomx = Math.floor(Math.random()*maxx);
    const randomy = Math.floor(Math.random()*maxy);
    catchElement.style.left = randomx + 'px';
    catchElement.style.top = randomy + 'px';
    

    // Add your logic here
});