var show = document.getElementById("image")
var image = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg"
]
    var index = 0;
    
    function changeImage(){

        index = (index+1)%image.length
        show.src = image[index]
        
    }
    show.setAttribute('class','img')
    
    setInterval(changeImage , 3000)
    