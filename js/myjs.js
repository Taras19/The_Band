
var button=document.querySelector(".button");
var containerNav=document.querySelector(".container-nav");
    button.addEventListener("click",function(){
        button.classList.toggle("button--open");
        containerNav.classList.toggle("container-nav--open");
            });

var mainMenuElementAll=document.querySelectorAll(".main-menu__element");
    for(var i=0;i<mainMenuElementAll.length;i++){
            mainMenuElementAll[i].addEventListener("click",function(){
                        button.classList.toggle("button--open");
                        containerNav.classList.toggle("container-nav--open");
                    });
        }
var faBars=document.querySelector(".fa-bars");
var soundMenu=document.querySelector(".sound__menu");
    faBars.addEventListener("click",function(){
       soundMenu.classList.toggle("sound__menu--open");
       faBars.classList.toggle("fa-bars--active"); 
    });
/*for slider ban automatic advancement*/
$('#carousel-example-generic').carousel('pause');
$('#carousel-tour').carousel('pause');

/*work with date performance*/
var addressSpeech=document.querySelectorAll(".address__speech");
var roundTour=document.querySelectorAll(".round-tour");
var performance=document.querySelectorAll(".performance");
var dataToday=Date.parse(new Date());
var dataPerformance;
    document.addEventListener("DOMContentLoaded",function(){
                         
        for(var i=0;i<addressSpeech.length;i++){
            dataPerformance=addressSpeech[i].getAttribute('data-performance');
            dataPerformance=Date.parse(dataPerformance);
            if(dataToday<dataPerformance){
                addressSpeech[i].classList.add("active--performance");
                roundTour[i].classList.add("round-tour--active");
                performance[i].classList.add("performance-active");
                    }
            }
        });
            
/*smooth scrolling*/
$('.to-home').click(function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop:$('.main-page').position().top}, 300);
    });
$('.to-about').click(function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop:$('.container-meet-band').position().top}, 300);
    });
$('.to-music').click(function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop:$('.discography').position().top}, 300);
    });
$('.to-tours').click(function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop:$('.tour-dates').position().top}, 300);
    });
$('.to-contact').click(function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop:$('.contact-block').position().top}, 300);
    });

   /*loaded with page inserts the name of the active album and the name of the active track volume*/
    document.querySelector(".now-playing__album").innerHTML=document.querySelector(".listen-active").getAttribute('data-album-title');    
    document.querySelector(".now-playing__song__name").innerHTML=document.querySelector(".song-list--active .song--active .song__name").innerHTML;
var volumeDisplay=document.querySelector(".volume__display");
    volumeDisplay.innerHTML=document.querySelector(".song-list--active .song--active audio").volume*100;     
/*script for audio player*/

/*start button to listen variables*/
var songListHeroesOfTheSun=document.querySelector(".song-list--Heroes-Of-The-Sun");
var listenHeroesOfTheSun=document.querySelector(".listen--Heroes-Of-The-Sun");
        
var listenSurpriseWithoutFlaws=document.querySelector(".listen--Surprise-Without-Flaws");
var listenMistsOfAShadow=document.querySelector(".listen--Mists-Of-A-Shadow");
var listenAll=document.querySelectorAll(".listen");
var songListAll=document.querySelectorAll(".song-list");
var songListSurpriseWithoutFlaws=document.querySelector(".song-list--Surprise-Without-Flaws");
var songListMistsOfAShadow=document.querySelector(".song-list--Mists-Of-A-Shadow");
/*end button to listen variables*/

//start player
var fastFaBackward=document.querySelector(".fa-fast-backward");
var fastFaForward=document.querySelector(".fa-fast-forward");
var pause=document.querySelector(".fa-pause");
var songAll=document.querySelectorAll(".song-list--active .song");
var songAudioAll=document.querySelectorAll(".song-list--active audio");
//end player

//variable to store the track position
var codeActiveSongs;

//Script for button 1 preview
    listenSurpriseWithoutFlaws.addEventListener("click",function(){
        getCleaningStory();
        document.querySelector(".window--list").scrollTop=(0,0);/*повертаю прокрутку в початок*/
        songListSurpriseWithoutFlaws.classList.add("song-list--active");
        listenSurpriseWithoutFlaws.classList.add("listen-active");
        getCreatingWithANewStory();
        getWorkWithANewStory();
        });

//Script for button 2 preview
    listenMistsOfAShadow.addEventListener("click",function(){
        getCleaningStory();
        document.querySelector(".window--list").scrollTop=(0,0);/*повертаю прокрутку в початок*/
        songListMistsOfAShadow.classList.add("song-list--active");
        listenMistsOfAShadow.classList.add("listen-active");
        getCreatingWithANewStory();
        getWorkWithANewStory();

        });

//Script for button 3 preview
    listenHeroesOfTheSun.addEventListener("click",function(){
        getCleaningStory();
        document.querySelector(".window--list").scrollTop=(0,0);/*повертаю прокрутку в початок*/
        songListHeroesOfTheSun.classList.add("song-list--active");
        listenHeroesOfTheSun.classList.add("listen-active");
        getCreatingWithANewStory();
        getWorkWithANewStory();

        });

//script to work with a new story
    getWorkWithANewStory();

        
          
            
/* statr code for paused*/
    pause.addEventListener("click",getPause);
/* end code for paused*/

/* statr code for forward*/


    fastFaForward.addEventListener("click",function(){
        getPauseLight();
        document.querySelector(".song-list--active .song--active audio").currentTime=0;//програний час попереднього треку=0
        document.querySelector(".song-list--active .song--active audio").volume=1;
        getRemoveActiveClass();
        pause.classList.remove("pause--active");
        codeActiveSongs=+codeActiveSongs+1;
                
            if(codeActiveSongs>songAudioAll.length-1){
                    codeActiveSongs=0;
                }
            else if(isNaN(codeActiveSongs)){
                    codeActiveSongs=1;
                    
                }
                
            songAudioAll[+codeActiveSongs].play();
            songAll[+codeActiveSongs].classList.add("song--active");
            document.querySelector(".now-playing__song__name").innerHTML=document.querySelector(".song-list--active .song--active .song__name").innerHTML;
            volumeDisplay.innerHTML=document.querySelector(".song-list--active .song--active audio").volume*100; 
            
            //Scrolling through the list of songs
            var windowStyle=getComputedStyle(document.querySelector(".window--list"));
            var songListActiveStyle=getComputedStyle(document.querySelector(".song-list--active"));
            var lengthScrol=parseFloat(songListActiveStyle.height)-parseFloat(windowStyle.height);
            var numberTracks=songAudioAll.length;
            var lengthScrolTrack=lengthScrol/numberTracks;
            if(codeActiveSongs==songAudioAll.length-1){
                document.querySelector(".window--list").scrollTop=(0,lengthScrol);}
            else{ document.querySelector(".window--list").scrollTop=(0,(codeActiveSongs*lengthScrolTrack));}   
            
            });
/* end code for forward*/

/* statr code for backward*/
    fastFaBackward.addEventListener("click",function(){
        getPauseLight();
        document.querySelector(".song-list--active .song--active audio").currentTime=0;//програний час попереднього треку=0
        document.querySelector(".song-list--active .song--active audio").volume=1;
        getRemoveActiveClass();
                       
        pause.classList.remove("pause--active");
        codeActiveSongs=+codeActiveSongs-1;
        
        if(codeActiveSongs<0){
            codeActiveSongs=songAudioAll.length-1;
            }
        else if(isNaN(codeActiveSongs)){
            codeActiveSongs=songAudioAll.length-1;
            }
            songAudioAll[+codeActiveSongs].play();
            songAll[+codeActiveSongs].classList.add("song--active");
            document.querySelector(".now-playing__song__name").innerHTML=document.querySelector(".song-list--active .song--active .song__name").innerHTML;
            volumeDisplay.innerHTML=document.querySelector(".song-list--active .song--active audio").volume*100; 
        
        /*Scrolling through the list of songs */
        var windowStyle=getComputedStyle(document.querySelector(".window--list"));
        var songListActiveStyle=getComputedStyle(document.querySelector(".song-list--active"));
        var lengthScrol=parseFloat(songListActiveStyle.height)-parseFloat(windowStyle.height);
        var numberTracks=songAudioAll.length;
        var lengthScrolTrack=lengthScrol/numberTracks;
        if(codeActiveSongs==songAudioAll.length-1){
            document.querySelector(".window--list").scrollTop=(0,lengthScrol);}
        else{ document.querySelector(".window--list").scrollTop=(0,(codeActiveSongs*lengthScrolTrack));}   
                    
            });
/* end code for backward*/

/* statr code for  faBackward and faForward*/
var faBackward=document.querySelector(".fa-backward");
var faForward=document.querySelector(".fa-forward");
    
    faForward.addEventListener("click",function(){
        document.querySelector(".song-list--active .song--active audio").pause();
        document.querySelector(".song-list--active .song--active audio").currentTime=currentTime+15;
        document.querySelector(".song-list--active .song--active audio").play();
        
    });

    faBackward.addEventListener("click",function(){
        document.querySelector(".song-list--active .song--active audio").pause();
        document.querySelector(".song-list--active .song--active audio").currentTime=currentTime-15;
        document.querySelector(".song-list--active .song--active audio").play();
        
    })


//add function

function getCleaningStory(){
            document.querySelector(".song-list--active .song--active audio").currentTime=0;//програний час попереднього треку=0
            
            soon.style.width=0+"%";
            for(i=0;i<songAll.length;i++) {
                songAll[i].classList.remove("song--active"); //всі li remove song--active
                }
            for( i=0;i<listenAll.length;i++) {
                listenAll[i].classList.remove("listen-active"); //всі кнопки
                }
            for(i=0;i<songListAll.length;i++){
                songListAll[i].classList.remove("song-list--active");//всі альбоми
                }
            for( i=0;i<songAudioAll.length;i++) {
                songAudioAll[i].pause();
                songAudioAll[i].volume=1;  
                }
            pause.classList.remove("pause--active");

            codeActiveSongs=0;
            }
function getCreatingWithANewStory(){
            songAll=document.querySelectorAll(".song-list--active .song");
            songAll[0].classList.add("song--active");
            songAudioAll=document.querySelectorAll(".song-list--active audio");
            codeActiveSongs;
            document.querySelector(".now-playing__album").innerHTML=document.querySelector(".listen-active").getAttribute('data-album-title');    
            document.querySelector(".now-playing__song__name").innerHTML=document.querySelector(".song-list--active .song--active .song__name").innerHTML;
            volumeDisplay.innerHTML=document.querySelector(".song-list--active .song--active audio").volume*100; 
            }
        
function getWorkWithANewStory(){
            for(i=0;i<songAll.length;i++) {
                songAll[i].setAttribute("data-position",i);
                songAll[i].addEventListener("click",function(){
                    getPauseLight();
                    document.querySelector(".song-list--active .song--active audio").currentTime=0;//програний час попереднього треку=0
                    document.querySelector(".song-list--active .song--active audio").volume=1;
                    getRemoveActiveClass();
                    pause.classList.remove("pause--active");
                    codeActiveSongs=this.getAttribute('data-position');
                    songAudioAll[codeActiveSongs].play();
                    this.classList.add("song--active");
                    document.querySelector(".now-playing__song__name").innerHTML=document.querySelector(".song-list--active .song--active .song__name").innerHTML;
                    volumeDisplay.innerHTML=document.querySelector(".song-list--active .song--active audio").volume*100;         
                    });
                }
            } 
function getPlay(){
            getPause();
            songAudio.play();
            }
            
function getPause(){
            for(var j=0;j<songAudioAll.length;j++){
                songAudioAll[j].pause();
                }                        
            if(codeActiveSongs!==undefined){
                pause.classList.add("pause--active");
                }
                        
            }
function getPauseLight(){
            for( j=0;j<songAudioAll.length;j++){
                songAudioAll[j].pause();
                            
                }
            }
function getRemoveActiveClass(){
            for(var k=0;k<songAll.length;k++){
                songAll[k].classList.remove("song--active");
                }
                
        }
            
    


        
/*duration, time listened, listened output time Ad Meter*/

var duration=document.querySelector(".song-list--active .song--active audio").duration;
var currentTime=document.querySelector(".song-list--active .song--active audio").currentTime;
    currentTime=currentTime.toString(10);
    currentTime=+currentTime;
var currentTimeInner;
var soon=document.querySelector(".soon");

        
//ad timer
var timer1= window.setInterval("getTime();",500);
        
function getTime(){
            duration=document.querySelector(".song-list--active .song--active audio").duration;
            currentTime=document.querySelector(".song-list--active .song--active audio").currentTime;
            currentTime=currentTime.toString(10);
            
            currentTime=+currentTime;
            
                if(currentTime){
                    soon.style.width=(currentTime/(duration/100))+"%";
                }

            currentTimeInner= currentTime/60;
            currentTimeInner=currentTimeInner.toFixed(2);
            currentTimeInner.indexOf(".");
            currentTimeInner=currentTimeInner.slice(0,currentTimeInner.indexOf("."))+":"+currentTimeInner.slice(currentTimeInner.indexOf(".")+1);
            document.querySelector(".now-playing__song__currentTime").innerHTML=currentTimeInner;

            
            
        }
/*Scrolling track using the click event yet on the block parent (the coordinates of the block parent, the coordinates of which took place
click them to translate the difference in% of the length and duration multiplied by 200 is the width of the block parent
*/
var parent=document.querySelector(".parent");
var rect = parent.getBoundingClientRect();
var e = e || window.event;
    window.addEventListener("resize",function(){
        rect = parent.getBoundingClientRect();
     });

    parent.addEventListener("click",function(e){
            var parentWidth=getComputedStyle(parent);
            document.querySelector(".song-list--active .song--active audio").currentTime=duration*(((e.pageX-rect.left)/(parseFloat(parentWidth.width)/100))/100);
            document.querySelector(".song-list--active .song--active audio").play();   
             parentTitle.classList.remove("parent__title--visible");   
            });
    
var parentTitle=document.querySelector(".parent__title");
    
    parent.addEventListener("mousemove",function(e){
        parentTitle.classList.add("parent__title--visible");
        var parentTitleWidth=getComputedStyle(parentTitle);
        parentTitle.style.left=(e.pageX-rect.left)-(parseFloat(parentTitleWidth.width)/2)+"px";
        var parentWidth=getComputedStyle(parent);
        var currentTimeInner;
        if((e.pageX-rect.left)<0){
            currentTimeInner= 0;
        }

            else{currentTimeInner= (duration*(((e.pageX-rect.left)/(parseFloat(parentWidth.width)/100)/100)))/60}
        
        currentTimeInner=currentTimeInner.toFixed(2);
        currentTimeInner.indexOf(".");
        currentTimeInner=currentTimeInner.slice(0,currentTimeInner.indexOf("."))+":"+currentTimeInner.slice(currentTimeInner.indexOf(".")+1);
        parentTitle.innerHTML=currentTimeInner;
    });
    

    parent.addEventListener("mouseout",function(){
        parentTitle.classList.remove("parent__title--visible");
    });
    
if ('ontouchend' in window) {
  
    var parentTitleWidth=getComputedStyle(parentTitle);
    var parentTitleWidthWidth=parseFloat(parentTitleWidth.width);
    var targetTouchesClientX;
    parent.addEventListener("touchmove",function(e){
        parentTitle.classList.add("parent__title--visible");
        parentTitleWidthWidth=parseFloat(parentTitleWidth.width);
        targetTouchesClientX=e.targetTouches[0].clientX;
        parentTitle.style.left=(e.targetTouches[0].clientX-rect.left)-(parentTitleWidthWidth/2)+"px";
        var parentWidth=getComputedStyle(parent);
        var currentTimeInner;
        if((e.targetTouches[0].clientX-rect.left)<=0){
            currentTimeInner= 0;
            
            parentTitle.style.left="0px";
        }
        else if((e.targetTouches[0].clientX-rect.left)>200){
            parentTitle.style.left=180+"px";
            currentTimeInner=duration/60;
            
        }

        else{
            currentTimeInner= (duration*(((e.targetTouches[0].clientX-rect.left)/(parseFloat(parentWidth.width)/100)/100)))/60;
            
            parentTitle.style.left=(e.targetTouches[0].clientX-rect.left)-(parentTitleWidthWidth/2)+"px";
        }
        
        currentTimeInner=currentTimeInner.toFixed(2);
        
        currentTimeInner.indexOf(".");
        currentTimeInner=currentTimeInner.slice(0,currentTimeInner.indexOf("."))+":"+currentTimeInner.slice(currentTimeInner.indexOf(".")+1);
        parentTitle.innerHTML=currentTimeInner;
        
    });
   parent.addEventListener("touchend",function(e){
        parentTitle.classList.remove("parent__title--visible");
        
         document.querySelector(".song-list--active .song--active audio").play();
        
        if((targetTouchesClientX-rect.left)<=0){
            document.querySelector(".song-list--active .song--active audio").currentTime=0;
            document.querySelector(".song-list--active .song--active audio").play();
        }
        else if((targetTouchesClientX-rect.left)>200){
            document.querySelector(".song-list--active .song--active audio").currentTime=duration;
            
        }
        else{
       document.querySelector(".song-list--active .song--active audio").currentTime=duration*((parseFloat(parentTitle.style.left)+(parentTitleWidthWidth/2))/200);
        document.querySelector(".song-list--active .song--active audio").play();
        
        } 
    },false);
}
      
 /* declare variables to change the volume*/   
var volumeUp=document.querySelector(".fa-volume-up");
var volumeDown=document.querySelector(".fa-volume-down");
var volumeOff=document.querySelector(".fa-volume-off");

/* mute*/
    volumeOff.addEventListener("click",function(){
        var volume=document.querySelector(".song-list--active .song--active audio").volume;
        //console.log(volume);
            if(volume>0){document.querySelector(".song-list--active .song--active audio").volume=0.0;}
            else{document.querySelector(".song-list--active .song--active audio").volume=1;}
            volumeDisplay.innerHTML=document.querySelector(".song-list--active .song--active audio").volume*100;
        });

/* volume Down*/
    volumeDown.addEventListener("click",function(){
        var volume=document.querySelector(".song-list--active .song--active audio").volume;
        //console.log(volume);
            if(volume>0){document.querySelector(".song-list--active .song--active audio").volume=((volume*100)-10)/100;}
            else{document.querySelector(".song-list--active .song--active audio").volume=0;}
            volumeDisplay.innerHTML=document.querySelector(".song-list--active .song--active audio").volume*100;
        });

/*volume Up*/
    volumeUp.addEventListener("click",function(){
        var volume=document.querySelector(".song-list--active .song--active audio").volume;
        //console.log(volume);
            if(volume<0.9){document.querySelector(".song-list--active .song--active audio").volume=((volume*100)+10)/100;}
            else{document.querySelector(".song-list--active .song--active audio").volume=1.0;}
            volumeDisplay.innerHTML=document.querySelector(".song-list--active .song--active audio").volume*100;
        });

var containerNav=document.querySelector(".container-nav");
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  
  if(scrolled>100){
        containerNav.classList.add("container-nav-fixed");
  }
  else{containerNav.classList.remove("container-nav-fixed");}
}
