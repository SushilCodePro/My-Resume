// var navMenuAnchorTags= document.querySelectorAll('.nav-menu a');
// //var interval;
// for(var i=0; i<navMenuAnchorTags.length; i++){
//     navMenuAnchorTags[i].addEventListener('click' ,function(event){
//         event.preventDefault();
//         var targetSectionId= this.textContent.trim().toLowerCase();
//         var targetSection= document.getElementById(targetSectionId);
//         var interval= setInterval(function(){  //var interval= setInterval(scroll, 50, targetSection);
//             var targetSectionCor= targetSection.getBoundingClientRect();
//             if(targetSectionCor.top<=0){
//                 clearInterval(interval);
//                 return;
//             }
//             window.scrollBy(0,50);
//         },50);
//     });
// }

// function scroll(targetSection){
//     var targetSectionCor= targetSection.getBoundingClientRect();
//             if(targetSectionCor.top<=0){
//                 clearInterval(interval);
//                 return;
//             }
//             window.scrollBy(0,50);
// }

var progressBar= document.querySelectorAll('.skill-progress > div');
var skillsContainer= document.getElementById('skills-Container');
window.addEventListener('scroll', checkScroll);
var animationDone=false;

function intialiseBar(){
    for(let bar of progressBar){
        bar.style.width=0+'%';
    }
}

intialiseBar();

function fillBar(){
     for(let bar of progressBar){
        let targetWidth=bar.getAttribute('data-bar-width');
        let currWidth=0;
        let interval=setInterval(function(){
            if(currWidth> targetWidth){
                clearInterval(interval);
                return;
            }
            currWidth++;
            bar.style.width=currWidth +'%';
        }, 1);
     }
}
function checkScroll(){
    var coardinates=skillsContainer.getBoundingClientRect();
    if(!animationDone && coardinates.top <= window.innerHeight){
         animationDone=true;
         fillBar();
    }else if(coardinates.top> window.innerHeight){
        animationDone=false;
        intialiseBar();
    }
    }