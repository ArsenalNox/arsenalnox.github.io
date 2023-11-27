var current_image = 0

var images = document.getElementsByClassName('img-wrapper')

function next_image(){
    if (current_image + 1 > images.length-1){
        console.log('Stop')
        current_image = 0
    } else {
        current_image+=1
    }

    for (let image of images){
        image.classList.add('disabled')
        image.classList.remove('active_image')

    }

    images[current_image].classList.remove('disabled')
    images[current_image].classList.add('active_image')
}


function prev_image(){
    if (current_image - 1 < 0){
        console.log('Stop')
        current_image = images.length - 1
    } else {
        current_image-=1
    }

    for (let image of images){
        console.log(image)
        image.classList.add('disabled')
        image.classList.remove('active_image')
    }

    images[current_image].classList.remove('disabled')
    images[current_image].classList.add('active_image')
}