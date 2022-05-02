import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'
import { runFireWorks } from '../lib/utils'

import { useStateContext } from '../context/StateContext'

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()

    useEffect(() => {
      localStorage.clear()
      setCartItems([])
      setTotalPrice(0)
      setTotalQuantities(0)
      runFireWorks()
    }, [])
    

  return (
    <div>
        <div className="success">
            <p className="icon">
                <BsBagCheckFill />
            </p>
            <h2>Thank you for your order!</h2>
            <p className="email-msg">Check your Inbox for your receipt.</p>
            <p className="description">
                For any enquiries, please contact
                <a className="email" href='mailto:kepaccoffee@gmail.com'>
                    kepaccoffee@gmail.com
                </a>
            </p>
            <Link href="/">
                <button type="button" className="btn" width='300px'>Continue Shopping</button>
            </Link>
        </div>
    </div>
  )
}

export default Success