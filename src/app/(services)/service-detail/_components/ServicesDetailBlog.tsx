"use client";

import {servicedetails} from "@/constant/alldata";
import Link from "next/link";
import {useState} from "react";

const ServicesDetailBlog = () => {
    const [selectedService, setSelectedService] = useState(servicedetails[0]);

    const handleServiceClick = (service: typeof servicedetails[0]) => {
        setSelectedService(service);
    };
    return (
        <ul>
            {servicedetails.map((item, i) => (
                <li key={i} className={"m-r25"}><Link href="#" scroll={false}>{item.title}</Link></li>
            ))}
        </ul>
    )
}
