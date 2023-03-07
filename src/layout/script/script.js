const scrollToTop = () =>{
    let scroll_progress = document.querySelector('.scrollProgress');
    let scroll_progress_value = document.querySelector('.scrollProgressValue');
    let scroll_position = document.documentElement.scrollTop;
    let scroll_height =  
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
    
    let scroll_height_percent = Math.round((scroll_position * 100) / scroll_height)

    if (scroll_position > 100){
        scroll_progress.style.display = 'grid';
    }else{
        scroll_progress.style.display = 'none';
    }
    
    scroll_progress.addEventListener('click', () => {
        document.documentElement.scrollTop = 0
    })
    scroll_progress.style.background = `conic-gradient(#64b5f6 ${scroll_height_percent}%,
        #d7d7d7 ${scroll_height_percent}%)`;
}

window.onload = scrollToTop;
window.onscroll = scrollToTop;