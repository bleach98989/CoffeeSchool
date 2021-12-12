
document.getElementById("toggle").onclick = function(){
    if(document.getElementById("nav").classList.contains("show")){
        document.getElementById("nav").classList.add('hidden');
        document.getElementById("nav").classList.remove('show');
    }else{
        document.getElementById("nav").classList.add('show');
        document.getElementById("nav").classList.remove('hidden');
        
    }
}

let firstCours=document.getElementById("first_cours").onclick = function(){
    document.getElementById("first_cours").classList.add('golden');
    document.getElementById("second_cours").classList.remove('golden');
    document.getElementById("third_cours").classList.remove('golden');
    document.getElementById("first_text").innerHTML="We start all courses with an introductory lecture, then move on to practice.";
    document.querySelector('.school_images-item-first').classList.add('z');
    document.querySelector('.school_images-item-second').classList.remove('z');
    document.querySelector('.school_images-item-third').classList.remove('z');
}

let secondCours=document.getElementById("second_cours").onclick = function(){
    document.getElementById("second_cours").classList.add('golden');
    document.getElementById("first_cours").classList.remove('golden');
    document.getElementById("third_cours").classList.remove('golden');
    document.getElementById("first_text").innerHTML="We start all courses with an introductory lecture, then move on to practice.move on to practicemove on to practicemove on to practicemove on to practicemove on to practicemove on to practicemove on to practicemove on to practice";
    document.querySelector('.school_images-item-first').classList.remove('z');
    document.querySelector('.school_images-item-second').classList.add('z');
    document.querySelector('.school_images-item-third').classList.remove('z');

    document.querySelector('.school_images-item-first').classList.remove('pos');
    document.querySelector('.school_images-item-second').classList.add('pos');
    document.querySelector('.school_images-item-third').classList.remove('pos');
}

let thirdCours=document.getElementById("third_cours").onclick = function(){
    document.getElementById("third_cours").classList.add('golden');
    document.getElementById("first_cours").classList.remove('golden');
    document.getElementById("second_cours").classList.remove('golden');
    document.getElementById("first_text").innerHTML="We start all courses with an introductory lecture, then move on to practice.move on to practito practicemove on to practic  to practice e start all courses with an introductory lecture, then move on to practice.move on to practicemove on to practicemov e start all courses with an introductory lecture, then move on to practice.move on to practicemove on to practicemove start all courses with an introductory lecture, then move on to practice.move on to practicemove on to practicemov";
    document.querySelector('.school_images-item-first').classList.remove('z');
    document.querySelector('.school_images-item-second').classList.remove('z');
    document.querySelector('.school_images-item-third').classList.add('z');
}





