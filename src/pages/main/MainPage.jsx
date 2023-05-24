import React from 'react';

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import {Autoplay, Navigation} from "swiper";

import classes from "./MainPage.module.css";

const MainPage = () => {
    return (
        <div>
            <header className={classes.header}>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    navigation={true}
                    loop={true}
                    freeMode={true}
                >
                    <SwiperSlide>
                        <img className={classes.headerImage} src="/divine/images/main/header-slider/1.jpg" alt="Random"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={classes.headerImage} src="/divine/images/main/header-slider/2.jpg" alt="Random"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={classes.headerImage} src="/divine/images/main/header-slider/3.jpg" alt="Random"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={classes.headerImage} src="/divine/images/main/header-slider/4.jpg" alt="Random"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={classes.headerImage} src="/divine/images/main/header-slider/5.jpg" alt="Random"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={classes.headerImage} src="/divine/images/main/header-slider/6.jpg" alt="Random"/>
                    </SwiperSlide>
                </Swiper>
            </header>

            <section className={classes.collection}>
                <div className="_container">
                    <h2 className="title">Новая коллекция</h2>

                    <Swiper
                        modules={[Autoplay, Navigation]}
                        slidesPerView={3}
                        spaceBetween={100}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                        navigation={true}
                        loop={true}
                        freeMode={true}
                    >
                        <SwiperSlide>
                            <div className={classes.collectionImage}>
                                <img src="/divine/images/main/collection/1.png" alt="Random"/>
                            </div>
                            <div className={classes.collectionContent}>
                                <div className={classes.collectionContentName}>BUTTONS BUNNY ZIP B&W</div>
                                <div className={classes.collectionContentPrice}>7 200 р</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.collectionImage}>
                                <img src="/divine/images/main/collection/2.png" alt="Random"/>
                            </div>
                            <div className={classes.collectionContent}>
                                <div className={classes.collectionContentName}>BUTTONS BUNNY ZIP PAINTED</div>
                                <div className={classes.collectionContentPrice}>7 200 р</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.collectionImage}>
                                <img src="/divine/images/main/collection/3.png" alt="Random"/>
                            </div>
                            <div className={classes.collectionContent}>
                                <div className={classes.collectionContentName}>BUNNY ZIP HOODIE WHITE</div>
                                <div className={classes.collectionContentPrice}>7 200 р</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.collectionImage}>
                                <img src="/divine/images/main/collection/4.png" alt="Random"/>
                            </div>
                            <div className={classes.collectionContent}>
                                <div className={classes.collectionContentName}>REFLECTION STAR T-SHIRT</div>
                                <div className={classes.collectionContentPrice}>2 200 р</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.collectionImage}>
                                <img src="/divine/images/main/collection/5.png" alt="Random"/>
                            </div>
                            <div className={classes.collectionContent}>
                                <div className={classes.collectionContentName}>BUTTONS BUNNY ZIP PLATINA</div>
                                <div className={classes.collectionContentPrice}>5 590 р</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.collectionImage}>
                                <img src="/divine/images/main/collection/6.png" alt="Random"/>
                            </div>
                            <div className={classes.collectionContent}>
                                <div className={classes.collectionContentName}>LEATHER BUNNY BALACLAVA</div>
                                <div className={classes.collectionContentPrice}>1 990 р</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.collectionImage}>
                                <img src="/divine/images/main/collection/7.png" alt="Random"/>
                            </div>
                            <div className={classes.collectionContent}>
                                <div className={classes.collectionContentName}>BUNNY BALACLAVA WHITE</div>
                                <div className={classes.collectionContentPrice}>3 750 р</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.collectionImage}>
                                <img src="/divine/images/main/collection/8.png" alt="Random"/>
                            </div>
                            <div className={classes.collectionContent}>
                                <div className={classes.collectionContentName}>BUNNY BALACLAVA PLATINA</div>
                                <div className={classes.collectionContentPrice}>3 750 р</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.collectionImage}>
                                <img src="/divine/images/main/collection/9.png" alt="Random"/>
                            </div>
                            <div className={classes.collectionContent}>
                                <div className={classes.collectionContentName}>BUNNY BALACLAVA BLACK</div>
                                <div className={classes.collectionContentPrice}>3 750 р</div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className={classes.gallery}>
                <div className={classes.galleryColumn}>
                    <img src="/divine/images/main/gallery/1.png" className={classes.galleryItem}/>
                    <img src="/divine/images/main/gallery/5.png" className={classes.galleryItem}/>
                </div>
                <div className="gallery-column">
                    <img src="/divine/images/main/gallery/2.png" className={classes.galleryItem}/>
                    <img src="/divine/images/main/gallery/4.png" className={classes.galleryItem}/>
                </div>
                <div className="gallery-column">
                    <img src="/divine/images/main/gallery/3.png" className={classes.galleryItem}/>
                    <img src="/divine/images/main/gallery/7.png" className={classes.galleryItem}/>
                    <img src="/divine/images/main/gallery/6.png" className={classes.galleryItem}/>
                </div>
            </section>
        </div>
    );
};

export default MainPage;