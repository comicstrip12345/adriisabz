import React, {useState} from 'react'

const ScrolltoTopButton = () => {
    const [buttonScrollUp,setButtonScrollUp] = useState(false)
    const toggleVisible = ()=>{
        const scrolled = document.documentElement.scrollTop;
        if(scrolled>300){
            setButtonScrollUp(true);
        }
        else if (scrolled <= 300){
            setButtonScrollUp(false);
        }
    }
    const scrollToTop =()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });
    }
    window.addEventListener('scroll', toggleVisible)

    return (
        <>
            {buttonScrollUp && <button data-aos="fade-up" className='scrollUp' onClick={scrollToTop}><i class="bi bi-arrow-up-circle"></i></button>}
        </>
    )
}

export default ScrolltoTopButton