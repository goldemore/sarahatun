import React from 'react'
import { BsFillPinMapFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { FcPhone } from 'react-icons/fc';
import { FcCalendar } from 'react-icons/fc';

const Contact = () => {
  return (
    <div className='contact_container'>
        <h1>Bizimlə əlaqə</h1>
        <div className='contact_content'>
            <div className='contact_left'>
                <div className='contact_box'>
                    <BsFillPinMapFill className='box_icon'/>
                    <div>
                        <h2>Ünvan</h2>
                        <p>3891 Ranchview Dr. Richardson, California 62639</p>
                    </div>
                </div>
                <div className='contact_box'>
                    <HiOutlineMail className='box_icon'/>
                    <div>
                        <h2>Email</h2>
                        <p>info@derzi.az</p>
                    </div>
                </div>
                <div className='contact_box'>
                    <FcPhone className='box_icon'/>
                    <div>
                        <h2>Telefon</h2>
                        <p>0125555555</p>
                    </div>
                </div>
                <div className='contact_box'>
                    <FcCalendar className='box_icon'/>
                    <div>
                        <h2>İş saatları</h2>
                        <p>Bazar Ertəsi-Şənbə: <br/>10:00-dan - 19:00-dək</p>
                    </div>
                </div>
            </div>
            <form className='contact_form'>
                <h2>Sualınız var? Bizə yazın</h2>
                <div className='contact_flex'>
                    <input type="text" placeholder='Ad'/>
                    <input type="text" placeholder='Soyad'/>
                </div>
                <div className='contact_flex'>
                    <input type="tel" placeholder='Telefon'/>
                    <input type="email" placeholder='Email'/>
                </div>
                <textarea placeholder='Mesaj' cols="30" rows="6"></textarea>
                <button className='contact_btn'>Göndər</button>
            </form>
        </div>
    </div>
  )
}

export default Contact