document.addEventListener('DOMContentLoaded', () => {
    

    const primaryNav = document.querySelector('.primary-navigation')
    const navToggle = document.querySelector('.mobile-nav-toggle')
    // CODE TO CHANGE SCALE OF DESCRIPTIO BOX ON MOUSEENTER/LEAVE
    const proj1  = document.querySelectorAll('.proj-1');
    const proj2  = document.querySelectorAll('.proj-2');
    const image = document.querySelectorAll('.image-wrapper');
    const screenWidth = window.innerWidth;
    console.log();

    navToggle.addEventListener('click', () => {
       
        const visibility = primaryNav.getAttribute("data-visible");

        if (visibility === "false") {
          primaryNav.setAttribute("data-visible", "true");
          navToggle.setAttribute("aria-expanded", true)
        } else if (visibility === "true") {
          primaryNav.setAttribute("data-visible", "false");
          navToggle.setAttribute("aria-expanded", false)
        }
    })




    ///////////////////// CODE FOR PROJ1
    if (screenWidth > 480){
    for (var i =0; i < proj1.length; i++){
        const description = proj1[i].querySelector('.project-description')
        description.addEventListener('mouseenter', () => {
            console.log("sup")
            if(screenWidth>767 && screenWidth<1025){
                description.style.transform = 'translateX(-57%) scale(1.021111)';
            }else{
                description.style.transform = 'translateX(-34%) scale(1.021111)';
            }

            
        });
    
        description.addEventListener('mouseleave', () => {
            if(screenWidth>767 && screenWidth<1025){
                description.style.transform = 'translateX(-57%) scale(1)';
            }else{
                description.style.transform = 'translateX(-34%) scale(1)';
            }

            // description.style.transform = 'translateX(-34%) scale(1)';
            // description.style.transform = 'translateX(-59%) scale(1)';
        });
          
    }
    ///////////////////////////// CODE FOR PROJ2
    for (var i =0; i < proj2.length; i++){
        const description = proj2[i].querySelector('.project-description')
        description.addEventListener('mouseenter', () => {
            description.style.transform = 'translateX(-6%) scale(1.021111)';
        });
    
        description.addEventListener('mouseleave', () => {
            description.style.transform = 'translateX(-6%) scale(1)';
        });
          
    }

    ///////////////////////////// IMAGES
    for (var i =0; i < image.length; i++){
        
        const img = image[i].querySelector('img')
        img.addEventListener('mouseenter', () => {
            img.style.filter = 'drop-shadow( -6px 1px 5px #10161f) brightness(1)';
        });
    
        img.addEventListener('mouseleave', () => {
            img.style.filter = 'drop-shadow( -6px 1px 5px #10161f) brightness(0.5)';
        });
          
    }    
}
  });
  

