import React from 'react'

const Payment = () => {
  return (
    <div class="wrapper">
        <div class="payment">
            <div class="payment-logo">
                <img src='/images/credit-card.png' alt="" />
            </div>
            <h2>Payment Gateway</h2>
            <form class="form">
                <div class="card space icon-relative">
                    <label class="label">Kartın nömrəsi</label>
                    <input type="text" class="input" data-mask="0000 0000 0000 0000" placeholder="0000 0000 0000 0000"/>
                    <i class="far fa-credit-card"></i>
                </div>
                <div class="card-grp space">
                    <div class="card-item icon-relative">
                        <label class="label">Bitmə tarixi</label>
                        <input type="text" name="expiry-data" class="input"  placeholder="00 / 00"/>
                        <i class="far fa-calendar-alt"></i>
                    </div>
                    <div class="card-item icon-relative">
                        <label class="label">CVV</label>
                        <input type="text" class="input" data-mask="000" placeholder="000"/>
                        <i class="fas fa-lock"></i>
                    </div>
                </div>
                <div class="btn">
                    Ödəniş et
                </div> 
            </form>
        </div>
    </div>
  )
}

export default Payment