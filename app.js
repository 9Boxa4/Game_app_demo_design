 
 
 //Introduction page
    const introBtn = document.querySelector('.intro-button')

    if(introBtn)
    {

        introBtn.addEventListener('click',()=>
     {
        // location.replace('../games/games.html') //ostavio sam kao referencu da moze i ovako, ali napornije da se vracamo na prethodne strane
        location.href ='../games/games.html'
     })
    }

// Game page

const gameSelection = document.querySelector('.game-selection')
if(gameSelection)
{

    gameSelection.addEventListener('click',function(e){
        e.preventDefault()
        if(e.target === this.firstElementChild)location.href ='./memory/memory.html';
        if(e.target === this.children[1])location.href ='./quiz/quiz.html';
        if(e.target === this.lastElementChild)location.href ='./swipe/swipe.html';
        
        //moglo je i if/else ali primetih da se u praksi vise ovako koristi
        //koristio ovaj nacin da prosaram malo :) 
    })
}


// QUIZ buttons

if(document.querySelector('.quiz-selection'))
{
    document.querySelector('.quiz-selection').addEventListener('click',function()
    {
        location.href ='../../registration/registration.html'
    }) 
}


//Swipe
if(document.querySelector('.arrow--right'))
{
    document.querySelector('.arrow--right').addEventListener('click',()=>location.href ='../../registration/registration.html')
    document.querySelector('#answer-button2').addEventListener('click',()=>location.href ='../../registration/registration.html')

    document.querySelector('.arrow--left').addEventListener('click',()=>history.back())
    document.querySelector('#answer-button1').addEventListener('click',()=>history.back())
}



//registration

if(document.querySelector('.register_btn'))
{
    document.querySelector('.register_btn').addEventListener('click',()=>location.href ='../result/result.html')
}