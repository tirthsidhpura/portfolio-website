window.onload = function() {

    var d = new Date();
    var time = d.getHours();
    if (time < 12) {
        var greet = 'Good morning!'
    }
    if (time > 17) {
        var greet = 'Good Evening!'
    }
    if (time > 12 && time < 17) {
        var greet = "Good Afternoon"
    }
    document.getElementById('pername').innerHTML = name + '&nbsp;' + greet;
  };
  

const number = document.querySelectorAll('.numb')
//    console.log(number)
   const speed = 200;
   number.forEach(element => {
    incNumber(element)
   });
    function incNumber(elem){
        let text =+ elem.innerText
        const value =+ elem.getAttribute('data-target')
        // console.log(value)
        // Math.ceil
        const inc = value/speed
        if(text<value){
            elem.innerText=inc+text;
            // elem.innerText=`${Math.ceil(inc)}`;
           
            setTimeout(() => {
                incNumber(elem)
            }, 20);
        }
    }
    
    $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

      $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
      }, 800);
    });
    

    function thehello(){
        var elem = $('.images')
        for(var i =0 ;i<=elem.length;i++)
        {
            elem[i].style.transform = 'scale(1)';
            elem[i].style.opacity = '100%';
        }
    }
  
    function emname() {
        var elem = $('.images')
        for (var i =0 ; i<=elem.length;i++){
            elem[i].style.visibility = 'hidden';
        }

    
    }
    
    // emname();

    function hello(h) {


        var elem = $('.images')
        for(var i=0 ;i<=elem.length;i++) {
            if(i==h){
                elem[h].style.transform = 'scale(1.4)';
                // elem[h].style.visibility = 'hidden';
            }
            else {
                elem[i].style.transform = 'scale(0.7)';
                // elem[i].style.visibility = 'hidden';
                elem[i].style.opacity = '20%';
            }
        }
    }


    var btn = document.getElementsByClassName('btn');
    var slide = document.getElementById('slide');



    btn[0].onclick = function() {
        slide.style.transform = 'translatex(0px)';
        for(i=0;i<4;i++){
            btn[i].classList.remove('active');
        }
        this.classList.add('active');
    }


    btn[1].onclick = function() {
        slide.style.transform = 'translatex(-800px)';
        for(i=0;i<4;i++){
            btn[i].classList.remove('active')
        }
        this.classList.add('active')
    }

    btn[2].onclick = function() {
        slide.style.transform = 'translatex(-1600px)'; 
        for(i=0;i<4;i++){
            btn[i].classList.remove('active')
        }
        this.classList.add('active')
    }

    btn[3].onclick = function() {
        slide.style.transform = 'translatex(-2400px)';
        for(i=0;i<4;i++){
            btn[i].classList.remove('active')
        }
        this.classList.add('active');
    }

