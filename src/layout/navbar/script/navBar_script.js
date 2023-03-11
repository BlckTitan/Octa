const highlightNavigation = () =>{
    let navigation_link = document.querySelectorAll('li.navigation_link');

    navigation_link.forEach(element => {
        
        //let navigation_link_anchor = element.firstChild;
    
        element.addEventListener('click', () =>{
            alert(1)
            console.log(window.location.pathname)
            //console.log(navigation_link_anchor.getAttribute('href').innerText)
        })
    })
}
highlightNavigation()