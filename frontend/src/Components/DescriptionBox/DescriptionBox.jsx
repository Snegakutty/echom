import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An excellent Shopify website with a seamless user experience, offering a clean and intuitive interface. The product display is well-organized, making navigation and shopping effortless.</p>
            <p>The integration of secure payment options ensures trust and reliability for customers. A modern, responsive design enhances the overall shopping experience across devices!</p>
        
        </div>
    </div>
  )
}

export default DescriptionBox