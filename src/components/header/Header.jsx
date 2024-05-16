import Link from 'next/link'
import React from 'react'
import './Header.css'
import Image from 'next/image'
import logo from '@/image/logo.png'
import telegram from '@/image/telegram.png'
import facebook from '@/image/fasebook.png'
import instagram from '@/image/instagram.png'
import Hero from '../hero/Hero'


function Header() {
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
                <Hero />
            </div>
        </>
    )
}

export default Header