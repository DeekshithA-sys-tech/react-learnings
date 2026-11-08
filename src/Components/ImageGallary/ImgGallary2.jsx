import React from 'react'
import i1 from '../../assets/images/bidge.jpg';
import i2 from '../../assets/images/germany.jpg';
import i3 from '../../assets/images/blueMoon.jpg';
import './imagegallary2.css'
const ImgGallary2 = () => {

    const imgArray =[i1 ,i2, i3]
  return (

    
    <div className='image-gallary2'>
        <h2>Image Gallary</h2>
        <div className="cointainer">

            {
                imgArray.map((ele)=>{
                    return (
                        <img src={ele} alt="" />
                    )
                })
            }
           
        </div>
    </div>
  )
}

export default ImgGallary2
