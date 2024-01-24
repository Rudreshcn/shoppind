let currentslide = 0;
function showslide()
{
    const wrapper = document.querySelector('.slider-wrapper')
    const slideWidth = document.querySelector('.slider-slide').clientWidth;
    wrapper.style.transform =  `translateX(${-currentslide * slideWidth}px)`;
}

function prevSlide(){
    if(currentslide > 0)
    {
        currentslide--;
    }
    else{
        currentslide=1;

    }
    showslide();

}
function nextSlide(){
    if(currentslide < 1)
    {
        currentslide++;
    }
    else{
        currentslide=0;

    }
    showslide();
    