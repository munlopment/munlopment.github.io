function scrollToElement(elementSelector, instance = 0) {
    //select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    //check if  there are elements ,atching the selector 
    if (elements.length > instance) {
        //scroll to the specified intance of the elemants
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");

link1.addEventListener('click', () =>{
    scrollToElement('.header');
});

link2.addEventListener('click', () =>{
    scrollToElement('.column');
});