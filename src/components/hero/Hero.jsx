import Image from 'next/image'
import './Hero.css'
import React from 'react'
import hero from '@/image/hero.png'

function Hero() {
    return (
        <>
            <div className="container">
                <div className='hero'>
                    <div className="hero__left">
                        <h2>Новый салон
                            Вашего автомобиля.
                            Быстро! Красиво!
                            Недорого!
                        </h2>
                        <p>Автомобильные чехлы для сидений</p>
                        <button>Заказть звонок</button>
                    </div>
                    <div className="hero__right">
                        <div className="hero__img">
                            <Image src={hero} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero