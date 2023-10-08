import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className="log-add">
                <div className='amazon-logo'>
                    <img src="/../../Images/amazon-logo.png" alt="amazon" />
                </div>
                <div className="add-i">
                    <div className="i">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="add">
                        <h6>Hello</h6>
                        <h2>Select your address</h2>
                    </div>
                </div>
            </div>
            <div className="search">
                <div className='all'>
                    <h6 className='A'>All ▼</h6>
                </div>
                <div className="seai">

                    <input class="form-control mr-sm-2" type="search" placeholder="Search Amazon.in" aria-label="Search" />
                    <button class="btn  my-2 my-sm-0" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>

            </div>
            <div className="last">
            <div className="add4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" alt="" />
            <h2 className='A'>EN ▼</h2>
                    </div>
                    
                    <div className="add4">
                        <h6>Hello, singin</h6>
                        <h2>Account & Lists ▼</h2>
                    </div>
                    <div className="add4">
                        <h6>Returns</h6>
                        <h2>& Orders</h2>
                    </div>
                    <div className="add4">
                        <div className="cart">
                            <h2>0</h2>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <div>

                        <h2>Cart</h2>
                        </div>
                    </div>
            </div>
            j
        </div>
    )
}

export default Header