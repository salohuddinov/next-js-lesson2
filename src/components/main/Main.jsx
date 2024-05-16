import React, { memo } from 'react'
import './Main.css'
import Image from 'next/image'
import rasm1 from '@/image/rasm1.png'
import rasm2 from '@/image/rasm2.png'
import rasm3 from '@/image/rasm3.png'
import rasm4 from '@/image/section.png'


function Main() {
    return (
        <>
            <div className="main">
                <h2 className='main__title'>О продукции</h2>
                <div className="main__card">
                    <Image src={rasm1} />
                    <div className="main__right">
                        <h2>Точные размеры</h2>
                        <h4>o  Чехлы отшиваются индивидуальнопо заводским меркам автомобиля.</h4>
                        <h4>o  Полностью повторяют форму кресел.</h4>
                    </div>
                </div>
                <div className="main__card">
                    <Image src={rasm2} />
                    <div className="main__right">
                        <h2>Гарантия безопасности</h2>
                        <h4>o  Чехлы "Автопилот" не препятствуют срабатыванию боковых подушек безопасности.</h4>
                        <h4>o  Предусмотрены технические отверстия для ремней безопасности задних сидений.</h4>
                    </div>
                </div><div className="main__card">
                    <Image src={rasm3} />
                    <div className="main__right">
                        <h2>Точные размеры</h2>
                        <h4>o  После установки чехлов салон не теряет своей функциональности.</h4>
                        <h4>o  В чехлах выполнены все необходимые отверстия и вырезы под механизмы сидений.</h4>
                        <h4>o  Для большинства моделей предусмотрены подлокотники.</h4>
                    </div>
                </div>
            </div>
            <div className="section">
                <h2 className='section__title'>Эстетичный вид автомобиля за небольшие деньги! </h2>
                <p className='section__body'>Стоимость комплекта авточехлов 5 мест начинается от 135 евро, в отличии от перетяжки салона которая может обойтись Вам в 1000 евро!</p>
                <h2 className='sect__h2'>Материалы</h2>
                <div className="sect">
                    <div className="section__card">
                        <h3>01</h3>
                        <div className='fff'></div>
                        <p>Высокое качество
                            Поверхность чехлов выполнена из высококачественных материалов, что гарантирует долгий срок службы!
                        </p>
                    </div>
                    <div className="section__card">
                        <h3>01</h3>
                        <div className='fff'></div>
                        <p>Высокое качество
                            Поверхность чехлов выполнена из высококачественных материалов, что гарантирует долгий срок службы!
                        </p>
                    </div>
                    <div className="section__card">
                        <h3>01</h3>
                        <div className='fff'></div>
                        <p>Высокое качество
                            Поверхность чехлов выполнена из высококачественных материалов, что гарантирует долгий срок службы!
                        </p>
                    </div>
                    <div className="section__card">
                        <h3>01</h3>
                        <div className='fff'></div>
                        <p>Высокое качество
                            Поверхность чехлов выполнена из высококачественных материалов, что гарантирует долгий срок службы!
                        </p>
                    </div>
                </div>
            </div>
            <div className="section2">
                <h2 className='section__title'>Центральная часть чехла может быть выполнена <br />
                    из трех типов материала:</h2>
                <div className="section__cont">
                    <Image className="cont__left" src={rasm4} />
                    <div className="cont__right">
                        <div className="cont__card">
                            <h3>Экокожа "Аригон" с перфорацией</h3>
                            <p>Высококачественный автомобильный кожзам с перфорацией. </p>
                        </div>
                        <div className="cont__card">
                            <h3>Алькантара</h3>
                            <p>Искусственная замша. Обладает высокой практичностью и люксовым внешним видом. </p>
                        </div>
                        <div className="cont__card">
                            <h3>Ячеистый велюр (федерер)</h3>
                            <p>Плотная велюровая ткань с ячеистой структурой.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Main)