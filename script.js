
// slide show
let i=0;
Slides();
function Slides() {
    if(i==0){
        document.getElementById("dvImage").style.backgroundImage="url('mainservice_side1.png')";
        i++
    }
    else if (i ==1){
        document.getElementById("dvImage").style.backgroundImage="url('mainservice_side2.png')";
        i++;
    }
    else{
        document.getElementById("dvImage").style.backgroundImage="url('mainservice_side3.png')";
        i=0;

    }
    setTimeout(Slides, 3000);
}

// slide show end



// side bar
let a= document.querySelector('.side_menu').classList;
    var c=0;
    function abc(){
        if(c==0){
        a.add("active");
       c++;
       }
       else{
        a.remove("active");
        c=0;
       }
    }



// show_hide Search bar


function show_search(){
        document.getElementById('search').style.opacity="1"
      

}


function hide_search(){
    
    document.getElementById('search').style.opacity="0"
}






// Arrow shift work start
function arrow_shift_left(){
    var container_shift = document.getElementById('abcde');
    sideScroll(container_shift,'left',25,100,10);
}
function arrow_shift_right(){
    var container_shift = document.getElementById('abcde');
    sideScroll(container_shift,'right',25,100,10);
}

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}
// Arrow shift work end








// hide show fresh_buy_cart start

function show_fresh_buy_cart1(){
    document.getElementById('fresh_buy_cart1').style.opacity="1"
}

function hide_fresh_buy_cart1(){
    document.getElementById('fresh_buy_cart1').style.opacity="0"
}
function show_fresh_buy_cart2(){
    document.getElementById('fresh_buy_cart2').style.opacity="1"
}

function hide_fresh_buy_cart2(){
    document.getElementById('fresh_buy_cart2').style.opacity="0"
}
function show_fresh_buy_cart3(){
    document.getElementById('fresh_buy_cart3').style.opacity="1"
}

function hide_fresh_buy_cart3(){
    document.getElementById('fresh_buy_cart3').style.opacity="0"
}
function show_fresh_buy_cart4(){
    document.getElementById('fresh_buy_cart4').style.opacity="1"
}

function hide_fresh_buy_cart4(){
    document.getElementById('fresh_buy_cart4').style.opacity="0"
}
// hide show fresh_buy_cart end







function buyItem(){
    // var a=document.getElementById("buyItem").
    alert("Item added to cart")
}



// for changing image in product section start
// front image man dress shirt
function change_img1(){
    document.getElementById("c11").src="c2.webp"
}
function change_img2(){
    document.getElementById("c12").src="c4.webp"
}
function change_img3(){
    document.getElementById("c13").src="c6.webp"
}
function change_img4(){
    document.getElementById("c14").src="c8.webp"
}
function change_img5(){
    document.getElementById("c15").src="c10.webp"
}
function change_img6(){
    document.getElementById("c16").src="c12.webp"
}
function change_img7(){
    document.getElementById("c17").src="c14.webp"
}
// back image man dress shirt
function back_img1(){
    document.getElementById("c11").src="c1.webp"
}
function back_img2(){
    document.getElementById("c12").src="c3.webp"
}
function back_img3(){
    document.getElementById("c13").src="c5.webp"
}
function back_img4(){
    document.getElementById("c14").src="c7.webp"
}
function back_img5(){
    document.getElementById("c15").src="c9.webp"
}
function back_img6(){
    document.getElementById("c16").src="c11.webp"
}
function back_img7(){
    document.getElementById("c17").src="c13.webp"
}




// front image man dress pant
function change_img20(){
    document.getElementById("b20").src="b2.webp"
}
function change_img21(){
    document.getElementById("b21").src="b4.webp"
}
function change_img22(){
    document.getElementById("b22").src="b6.webp"
}
function change_img23(){
    document.getElementById("b23").src="b8.webp"
}
function change_img24(){
    document.getElementById("b24").src="b10.webp"
}
function change_img25(){
    document.getElementById("b25").src="b12.webp"
}
function change_img26(){
    document.getElementById("b26").src="b14.webp"
}
// back image man dress pant
function back_img20(){
    document.getElementById("b20").src="b1.webp"
}
function back_img21(){
    document.getElementById("b21").src="b3.webp"
}
function back_img22(){
    document.getElementById("b22").src="b5.webp"
}
function back_img23(){
    document.getElementById("b23").src="b7.webp"
}
function back_img24(){
    document.getElementById("b24").src="b9.webp"
}
function back_img25(){
    document.getElementById("b25").src="b11.webp"
}
function back_img26(){
    document.getElementById("b26").src="b13.webp"
}




// front image man dress shoe
function change_img30(){
    document.getElementById("f30").src="f2.webp"
}
function change_img31(){
    document.getElementById("f31").src="f4.webp"
}
function change_img32(){
    document.getElementById("f32").src="f6.webp"
}
function change_img33(){
    document.getElementById("f33").src="f8.webp"
}
function change_img34(){
    document.getElementById("f34").src="f10.webp"
}
function change_img35(){
    document.getElementById("f35").src="f12.webp"
}
function change_img36(){
    document.getElementById("f36").src="f14.webp"
}
// back image man dress shoe
function back_img30(){
    document.getElementById("f30").src="f1.webp"
}
function back_img31(){
    document.getElementById("f31").src="f3.webp"
}
function back_img32(){
    document.getElementById("f32").src="f5.webp"
}
function back_img33(){
    document.getElementById("f33").src="f7.webp"
}
function back_img34(){
    document.getElementById("f34").src="f9.webp"
}
function back_img35(){
    document.getElementById("f35").src="f11.webp"
}
function back_img36(){
    document.getElementById("f36").src="f13.webp"
}








// front image man dress groom
function change_img41(){
    document.getElementById("g41").src="g2.webp"
}
function change_img43(){
    document.getElementById("g43").src="g4.webp"
}
function change_img45(){
    document.getElementById("g45").src="g6.webp"
}
function change_img47(){
    document.getElementById("g47").src="g8.webp"
}
function change_img49(){
    document.getElementById("g49").src="g10.webp"
}
function change_img51(){
    document.getElementById("g51").src="g12.webp"
}
function change_img53(){
    document.getElementById("g53").src="g14.webp"
}
// back image man dress groom
function back_img41(){
    document.getElementById("g41").src="g1.webp"
}
function back_img43(){
    document.getElementById("g43").src="g3.webp"
}
function back_img45(){
    document.getElementById("g45").src="g5.webp"
}
function back_img47(){
    document.getElementById("g47").src="g7.webp"
}
function back_img49(){
    document.getElementById("g49").src="g9.webp"
}
function back_img51(){
    document.getElementById("g51").src="g11.webp"
}
function back_img53(){
    document.getElementById("g53").src="g13.webp"
}












// front image man dress Accessories
function change_img61(){
    document.getElementById("61").src="mg2.webp"
}
function change_img62(){
    document.getElementById("62").src="mg4.webp"
}
function change_img63(){
    document.getElementById("63").src="mg6.webp"
}
function change_img64(){
    document.getElementById("64").src="mg8.webp"
}
function change_img65(){
    document.getElementById("65").src="mg10.webp"
}
function change_img66(){
    document.getElementById("66").src="mg12.webp"
}
function change_img67(){
    document.getElementById("67").src="mg14.webp"
}
// back image man dress Accessories
function back_img61(){
    document.getElementById("61").src="mg1.webp"
}
function back_img62(){
    document.getElementById("62").src="mg3.webp"
}
function back_img63(){
    document.getElementById("63").src="mg5.webp"
}
function back_img64(){
    document.getElementById("64").src="mg7.webp"
}
function back_img65(){
    document.getElementById("65").src="mg9.webp"
}
function back_img66(){
    document.getElementById("66").src="mg11.webp"
}
function back_img67(){
    document.getElementById("67").src="mg13.webp"
}





// for changing image in product section end