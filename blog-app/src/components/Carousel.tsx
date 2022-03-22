import React, { useState } from 'react'
import dc1 from '../img/diegoh.jpg'
import dc2 from '../img/diegoh2.jpg'
import dc3 from '../img/diegoc.jpg'
import '../styles/Carousel.css'
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
interface Img {
    src:string,
    alt:string,
    
}
const imgs:Img[] = [
    {
        src:dc1,
        alt:' huwaei 1',
        
    },
    {
        src:dc2,
        alt:' huawei 2',
        
    },
    // {
    //     src:dc3,
    //     alt:' huawei 3',
    //     index:2
    // },

]

export const Carousel = () => {
    
    const [CurrentIndex, setCurrentIndex] = useState(0)
    
    
    const changeImg = (next:boolean) => {
        
        if( next && CurrentIndex +1  > imgs.length -1){
            return;
        }
        if( !next && CurrentIndex -1 < 0 ){
            return;
        }
        
        next ? setCurrentIndex(CurrentIndex + 1) : setCurrentIndex( CurrentIndex - 1)
        
      
    }

    return (
        <div className='carousel_container'>
            <button className='left_button' onClick={ ()=>changeImg(false) } > <CaretLeftOutlined /> </button>
            <button className='right_button' onClick={ ()=>changeImg(true) } > <CaretRightOutlined /> </button>
            <div className='image_container'>

                <img src={imgs[CurrentIndex].src} alt={imgs[CurrentIndex].alt}  ></img>
            </div>
            
        </div>
    )
}
