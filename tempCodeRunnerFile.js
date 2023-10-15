    ///////////////////// CODE FOR PROJ1
    for (var i =0; i < proj1.length; i++){
        const description = proj1[i].querySelector('.project-description')
        description.addEventListener('mouseenter', () => {
            // alert("sup")
            description.style.transform = 'translateX(-34%) scale(1.021111)';
        });
    
        description.addEventListener('mouseleave', () => {
            description.style.transform = 'translateX(-34%) scale(1)';
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