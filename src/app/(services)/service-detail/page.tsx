'use client';

import {useState} from "react";
import Link from "next/link";
import {IMAGES} from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import PageBanner from "@/component/PageBanner";
import {servicedetails, worldclasslistdata} from "@/constant/alldata";
import Image from "next/image";
import AccordionBlog from "./_components/AccordionBlog";
import SurgeryBlog from "./_components/SurgeryBlog";

function ServiceDetail() {
    const [selectedService, setSelectedService] = useState(servicedetails[0]);

    const handleServiceClick = (service: typeof servicedetails[0]) => {
        setSelectedService(service);
    };

    return (
        <>
            <Header/>
            <main className="page-content">
                <PageBanner title="Service Detail" bnrimage={IMAGES.bnr2.src}/>
                <section className="content-inner service-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 single-inner order-lg-1">

                                <div className="content-item wow fadeInUp" data-wow-delay="0.2s"
                                     data-wow-duration="0.7s">
                                    <h2>{selectedService.title}</h2>
                                    <p>{selectedService.desc}</p>
                                </div>
                                <div className="content-item wow fadeInUp" data-wow-delay="0.3s"
                                     data-wow-duration="0.7s">
                                    <h3>{selectedService.title}</h3>
                                    <ul className="list-check text-secondary grid-2 m-b30">
                                        {worldclasslistdata.map((item, i) => (
                                            <li key={i}>{item.title}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="content-item wow fadeInUp" data-wow-delay="0.4s"
                                     data-wow-duration="0.7s">
                                    <h3>Available Doctors Under Surgery</h3>
                                    <SurgeryBlog/>
                                </div>
                                <div className="content-item wow fadeInUp" data-wow-delay="0.5s"
                                     data-wow-duration="0.7s">
                                    <h3>Questions fréquentes</h3>
                                    <AccordionBlog/>
                                </div>
                            </div>
                            <div className="col-lg-4 m-b30">
                                <aside className="side-bar sticky-top left">
                                    <div className="widget service_menu_nav bg-secondary wow fadeInUp"
                                         data-wow-delay="0.2s" data-wow-duration="0.7s">
                                        <div className="widget-title">
                                            <h4 className="title">Nos Services</h4>
                                        </div>
                                        <ul>
                                            {servicedetails.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className={`${selectedService.title === item.title ? 'active' : ''}`}
                                                >
                                                    <Link
                                                        href="#"
                                                        scroll={false}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleServiceClick(item);
                                                        }}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="widget_contact wow fadeInUp"
                                         style={{backgroundImage: `url(${IMAGES.bg3png.src})`}} data-wow-delay="0.4s"
                                         data-wow-duration="0.7s"
                                    >
                                        <div className="widget-content">
                                            <Image src={IMAGES.question} width="80" alt=""/>
                                            <h4 className="title">Vous avez besoins d'aide?</h4>
                                            <div className="phone-number">
                                                <Link href="tel:+221776600670">+221 77 660 06 70</Link>
                                            </div>
                                            <div className="email">
                                                <Link href="mailto:info@support.com">sendocteurastuce@gmail.com</Link>
                                            </div>
                                            <div className="link-btn">
                                                <Link href="#" scroll={false}
                                                      className="btn btn-lg btn-icon btn-white hover-secondary btn-shadow">
                                                    Nous conacter <span className="right-icon"><i
                                                    className="feather icon-arrow-right"/></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default ServiceDetail;
