import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import Image from 'next/image'

const FooterBanner = ({ 
    footerBanner: {
        discount, 
        largeText1, 
        saleTime, 
        smallText, 
        midText, 
        desc,
        product, 
        buttonText, 
        image
    }
}) => {
  return (
    <div className="footer-banner-container">
        <div className="banner-desc">
            <div className="left">
                <p>{discount}</p>
                <h3>{largeText1}</h3>
                <p>{saleTime}</p>
            </div>
            <div className="right">
                <p>{smallText}</p>
                <h3>{midText}</h3>
                <p>{desc}</p>
                <Link href={`/products/${product}`}>
                    <button type='button'>{buttonText}</button>
                </Link>
            </div>
                <Image
                alt='footer image'
                src={urlFor(image)}
                className="footer-banner-image" 
                />
        </div>
    </div>
  )
}

export default FooterBanner