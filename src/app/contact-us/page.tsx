import Connect from "@/component/Connect";
import Getintouch from "@/component/Getintouch";
import MapWraper from "@/component/MapWraper";
import PageBanner from "@/component/PageBanner";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

function Contactus() {
  return (
    <>
      <Header />
      <main className="page-content">
        <PageBanner title="Nous Contacter" bnrimage={IMAGES.bnr1.src} />
        <section className="content-inner">
          <div className="container">
            <div className="row align-items-center">
              <Connect />
              <Getintouch />
            </div>
          </div>
        </section>
        <MapWraper />
      </main>
      <Footer />
    </>
  );
}
export default Contactus;
