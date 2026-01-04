"use client"
import Link from "next/link";
import { IMAGES } from "../constant/theme";
import { footerdata1, footerdata2 } from "../constant/alldata";
import { useRef } from "react";
import Image from "next/image";
import { useEmailService } from "@/constant/useEmailService";


function Footer() {
    let year =  new Date().getFullYear();
    const form = useRef<HTMLFormElement | null>(null);
    const { sendEmail } = useEmailService();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;
        const result = await sendEmail(form.current);
        if (result.success) {
            console.log('SUCCESS!', result.message);
        } else {
            console.error('FAILED...', result.message);
        }
    };
    return (
        <>
            <footer className="site-footer style-1 overlay-primary-light" style={{ backgroundImage: `url(${IMAGES.bg4.src})` }} >
                <div className="footer-head">
                    <div className="container">
                        <div className="fh-inner">
                            <div className="row g-3 align-items-center">
                                <div className="col-xl-3 col-md-12 col-sm-6 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <h3 className="title">Prendre rendez-vous</h3>
                                    <p className="text">Nous sommes ouvert 24h/24 - 7j/7</p>
                                </div>
                                {footerdata1.map((data, i) => (
                                    <div className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                                        <div className="icon-bx-wraper style-1">
                                            <div className="icon-bx bg-secondary">
                                                <span className="icon-cell">
                                                    {data.icon}
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dz-title">{data.title}</h5>
                                                <p>{data.paragraph}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-sm-12 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <div className="widget widget_about me-2">
                                    <div className="footer-logo logo-white">
                                        <Link href="/"><Image src={IMAGES.logowhite} alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                            {footerdata2.map((data, i) => (
                                <div className="col-xl-3 col-md-3 col-6 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                                    <div className="widget widget_services">
                                        <h2 className="footer-title">{data.title} </h2>
                                        <ul className="list-hover1">
                                            <li><Link href={data.link1}><span>{data.span1}</span></Link></li>
                                            <li><Link href={data.link2}><span>{data.span2}</span></Link></li>
                                            <li><Link href={data.link3}><span>{data.span3}</span></Link></li>
                                            <li><Link href={data.link4}><span>{data.span4}</span></Link></li>
                                            <li><Link href={data.link5}><span>{data.span5}</span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="fb-inner">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 text-start">
                                    <p className="copyright-text">© <span className="current-year">{year}</span>
                                    <Link href="#" target="_blank"> mtagne</Link> All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;
