import Frequently from "@/component/Frequently";
import PageBanner from "@/component/PageBanner";
import RealPatient from "@/component/RealPatient";
import ServiceBox from "@/component/ServiceBox";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

function Services() {
  return (
    <>
      <Header />
      <main className="page-content">
        <PageBanner title="Services" bnrimage={IMAGES.bnr2.src} />
        <section
          className="content-inner bg-light"
          style={{ backgroundImage: `url(${IMAGES.bg5png.src})` }}
        >
          <div className="container">
            <ServiceBox />
          </div>
        </section>

        <section
          className="clearfix p-t50 overlay-secondary-dark bg-primary background-blend-multiply overflow-hidden"
          style={{
            backgroundImage: `url(${IMAGES.bg3.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            backgroundSize: "cover",
          }}
        >
          <RealPatient />
        </section>
        <Frequently />
      </main>
      <Footer />
    </>
  );
}
export default Services;
