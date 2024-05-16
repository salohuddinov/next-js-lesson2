import React from 'react'
import Link from 'next/link'
import "./About.css"
import '../../components/header/Header.css'
import Image from 'next/image'
import logo from '@/image/logo.png'
import telegram from '@/image/telegram.png'
import facebook from '@/image/fasebook.png'
import instagram from '@/image/instagram.png'
import call from '@/image/call1.png'
import email from '@/image/email.png'
import toll from '@/image/tool.png'
import be from '@/image/be.png'
import fa from '@/image/fa.png'
import inn from '@/image/in.png'



const About = () => {
    return (
        <>
            <div className="headerbg">
                <div className="container">
                    <div className="header">
                        <div className="heder__right">
                            <div className="logo">
                                <Link href={"/"}><Image src={logo} /></Link>
                            </div>
                            <div className="nav__item">
                                <Link href={"/"}><h2>О продукции</h2></Link>
                                <Link href={"/about"}><h2>Материалы</h2></Link>
                                <Link href={"#"}><h2>Примеры работ</h2></Link>
                                <Link href={"#"}><h2>Установка</h2></Link>
                                <Link href={"#"}><h2>Каталог</h2></Link>
                            </div>
                        </div>
                        <div className="nav__icon">
                            <Image src={telegram} />
                            <Image src={facebook} />
                            <Image src={instagram} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutbg">
                <div className="container">
                    <h2 className='contact'>CONTACTS</h2>
                    <div className="about">
                        <form className="contact__left">
                            <h2>Contact us</h2>
                            <p>Let’s get to the nex level together</p>
                            <input type="text" placeholder='Enter your first name' />
                            <input type="text" placeholder='Enter your email' />
                            <textarea placeholder='Your massage'></textarea>
                            <button>Send</button>
                        </form>
                        <div className="contact__right">
                            <div className="contact__icon">
                                <Image src={call} />
                                <h3>+1 (647)-563-9114</h3>
                            </div>
                            <div className="contact__icon">
                                <Image src={email} />
                                <h3>lead@gmail.com</h3>
                            </div>
                            <div className="contact__icon">
                                <Image src={toll} />
                                <h3>Margaretenstraße 70/3, 1050 Vienna, Austria</h3>
                            </div>
                            <div className="kenzo">
                                <div className="bufer">
                                    <h2>BECOME A CLIENT </h2>
                                    <h2>business@LEAD.com</h2>
                                </div>
                                <div className="follow">
                                    <h2>Follow us</h2>
                                    <div className="follow__icon">
                                        <Image src={be} />
                                        <Image src={fa} />
                                        <Image src={inn} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About