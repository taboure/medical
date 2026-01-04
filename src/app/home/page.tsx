import Link from "next/link";
import Image from "next/image";
import {IMAGES} from "@/constant/theme";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import ServiceBox from "@/component/ServiceBox";
import AppointmentData from "@/component/AppointmentData";
import RealPatient from "@/component/RealPatient";
import Frequently from "@/component/Frequently";
import MapWraper from "@/component/MapWraper";

function HomePage() {

    return (
        <>
            <Header/>
            <main className="page-content">
                <div className="hero-banner style-1"
                     style={{backgroundImage: `url(${IMAGES.herobannerbg1.src})`, backgroundSize: 'cover'}}>
                    <div className="container">
                        <div className="inner-wrapper">
                            <span className="text-vertical text-secondary">24h/24 - 7j/7 </span>
                            <div className="row align-items-end h-100">
                                <div className="col-lg-6 align-self-center">
                                    <div className="hero-contents hero-thumbnail">
                                        <h2 className="title wow fadeInUp" data-wow-delay="0.2s"
                                            data-wow-duration="0.8s">Des soins sûrs,<br/> Un accueil tendre,<br/><span
                                            style={{color: '#0098A3'}}>Une santé meilleure</span> <Image
                                            src={IMAGES.herobannerline} alt=""/></h2>
                                        <p className="text wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                            Votre santé est notre priorité absolue.<br/> Prenez rendez-vous dès
                                            aujourd'hui.</p>
                                        <Link href="/appointment"
                                              className="btn btn-lg btn-icon btn-primary m-r20 wow fadeInUp"
                                              data-wow-delay="0.6s" data-wow-duration="0.8s">
                                            Rendez-vous
                                            <span className="right-icon"><i
                                                className="feather icon-arrow-right"/></span>
                                        </Link>
                                        <Link href="/contact-us"
                                              className="btn btn-lg btn-icon btn-secondary wow fadeInUp"
                                              data-wow-delay="0.6s" data-wow-duration="0.8s">
                                            Nous Contacter
                                            <span className="right-icon"><i
                                                className="feather icon-arrow-right"/></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.8s"
                                     data-wow-duration="0.8s">
                                    <div className="hero-thumbnail" data-bottom-top="transform: translateY(-50px)"
                                         data-top-bottom="transform: translateY(50px)">
                                        <Image className="thumbnail" src={IMAGES.herobanner1} alt=""/>
                                        <div className="circle-wrapper">
                                            <span className="circle1"></span>
                                            <span className="circle2"></span>
                                            <span className="circle3"></span>

                                        </div>
                                        {/*
                                         <div className="item2" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                                            <div className="info-widget style-1 move-3">
                                                <div className="avatar-group">
                                                    <Image className="avatar rounded-circle avatar-sm border border-white border-2" src={IMAGES.smallavatar1} alt="" />
                                                    <Image className="avatar rounded-circle avatar-sm border border-white border-2" src={IMAGES.smallavatar2} alt="" />
                                                    <Image className="avatar rounded-circle avatar-sm border border-white border-2" src={IMAGES.smallavatar3} alt="" />
                                                    <Image className="avatar rounded-circle avatar-sm border border-white border-2" src={IMAGES.smallavatar4} alt="" />
                                                </div>
                                                <div className="clearfix ms-2">
                                                    <span className="number text-primary">150k</span>
                                                    <span>Patient recovers</span>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="item4" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                                            <div className="info-widget style-3 move-1">
                                                <div className="widget-head">
                                                    <div className="widget-media">
                                                        <Image src={IMAGES.smallavatar5} alt="" />
                                                    </div>
                                                    <div className="widget-content">
                                                        <h6 className="title">Dr. Natali jackson</h6>
                                                        <ul className="star-list">
                                                            <li><i className="fa fa-star" /></li>
                                                            <li><i className="fa fa-star" /></li>
                                                            <li><i className="fa fa-star" /></li>
                                                            <li><i className="fa fa-star" /></li>
                                                            <li><i className="fa fa-star" /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p>“It is a long established fact that a reader will be distracted by the readable content”</p>
                                            </div>
                                        </div>
                                        */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<section className="content-inner" style={{ backgroundImage: `url(${IMAGES.bg1png.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }}>
                    <div className="container">
                        <WorldClass />
                    </div>
                </section>
                <Counter />*/}
                <section className="content-inner-2 bg-light">
                    <div className="container">
                        <div className="section-head style-1 m-b30 row align-items-end">
                            <div className="col-xl-7 col-md-9 wow fadeInUp" data-wow-delay="0.2s"
                                 data-wow-duration="0.8s">
                                <h2 className="title m-b0">Commencez à vous sentir au mieux de votre forme découvrez nos
                                    services de bien-être </h2>
                            </div>
                            <div className="col-xl-5 col-md-3 text-lg-end d-none d-md-block wow fadeInUp"
                                 data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <Link href="/services" className="btn btn-icon btn-secondary"> Voire plus
                                    <span className="right-icon"><i className="feather icon-arrow-right"/></span>
                                </Link>
                            </div>
                        </div>
                        <ServiceBox/>
                    </div>
                </section>
                <AppointmentData/>
                <section
                    className="clearfix p-t50 overlay-secondary-dark bg-primary background-blend-multiply overflow-hidden"
                    style={{
                        backgroundImage: `url(${IMAGES.bg3.src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right center',
                        backgroundSize: 'cover'
                    }}
                >
                    <RealPatient/>
                </section>
                <Frequently/>
                <MapWraper/>
            </main>
            <Footer/>
        </>
    )
}

export default HomePage;
