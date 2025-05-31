
let count = 0;

function switchScreen(screen) {
    count += 0.5;
    
    let showViewer  = screen == 'model-viewer' ? 'block' : 'none';
    let showMovie   = screen != 'model-viewer' ? 'block' : 'none';
    
    document.querySelector('video').style.display = showMovie;
    document.querySelector('#D-button').style.display = showMovie;
    
    document.querySelector('model-viewer').style.display = showViewer;
    document.querySelector('#movie-button').style.display = showViewer;
    
    if(!document.querySelector('model-viewer').canActivateAR) {
    document.querySelector('#movie-button').classList.add('center')
    }
    
    if(count % 2 == 0) {
    document.querySelector('video').src = 'assets/salida_pequeña.mp4'
    } else {
    document.querySelector('video').src = 'assets/splat.mp4'
    }
    
}