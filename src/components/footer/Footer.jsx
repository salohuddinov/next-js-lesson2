import React from 'react'
import './Footer.css'
import Image from 'next/image'
import logo from '@/image/logo.png'

function Footer() {
    return (
        <>
            <iframe className='footer__ifrem' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.073069253113!2d69.20123767587322!3d41.285514171313004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sen!2s!4v1715886182956!5m2!1sen!2s"></iframe>
            <div className="footerbg">
                <div className="footer container">
                    <div className="footer__card">
                        <Image src={logo} />
                        <p>Политика
                            конфиденциальнности
                        </p>
                        <p>Соглашение на обработку персональных данных</p>
                    </div>
                    <div className="footer__card">
                        <p>Главная</p>
                        <p>Цены</p>
                        <p>О нас</p>
                        <p>Отзывы</p>
                    </div>
                    <div className="footer__card">
                        <p>vkontakte</p>
                        <p>viber</p>
                        <p>instagram</p>
                        <p>whatsapp</p>
                    </div>
                    <div className="footer__card">
                        <p>г. Ярославль, ул. Чернопрудная 30</p>
                        <p>+7 (4852) 43-65-71</p>
                        <p>betonmobil@yandex.ru</p>
                        <button>Перезвонить мне</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer