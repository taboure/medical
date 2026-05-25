"use client";
import { useEmailService } from "@/constant/useEmailService";
import { useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";

function Getintouch() {
  const form = useRef<HTMLFormElement | null>(null);
  const { sendEmail } = useEmailService();
  const [selectCat, setSelectCat] = useState<string>("Angioplasty");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    const result = await sendEmail(form.current);
    if (result.success) {
      console.log("SUCCESS!", result.message);
    } else {
      console.error("FAILED...", result.message);
    }
  };

  return (
    <>
      <div
        className="col-xl-6 m-b30"
        data-bottom-top="transform: translateY(50px)"
        data-top-bottom="transform: translateY(-50px)"
      >
        <div
          className=""
          data-bottom-top="transform: translateY(100px)"
          data-top-bottom="transform: translateY(-10px)"
        >
          <div className="form-wrapper style-1 text-vr-wrapper">
            <div className="text-vertical">Prendre rendez-vous</div>
            <div className="form-body background-primary">
              <div className="title-head">
                <h2 className="form-title m-b0">
                  Prendre <span>Rendez-vous</span> <br /> Demander un traitement
                </h2>
              </div>
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="dzForm"
                method="POST"
              >
                <input
                  type="hidden"
                  className="form-control"
                  name="dzToDo"
                  value="Appointment"
                />
                <input
                  type="hidden"
                  className="form-control"
                  name="reCaptchaEnable"
                  value="0"
                />
                <div className="dzFormMsg"></div>
                <div className="row">
                  <div className="col-sm-6 m-b30">
                    <div className="form-floating floating-underline input-light">
                      <input
                        name="dzName"
                        type="text"
                        className="form-control"
                        id="inputYourName"
                        placeholder="Votre nom"
                      />
                      <label htmlFor="inputYourName">Votre nom</label>
                    </div>
                  </div>
                  <div className="col-sm-6 m-b30">
                    <div className="form-floating floating-underline input-light">
                      <input
                        name="dzEmail"
                        type="email"
                        className="form-control"
                        id="inputYourEmail"
                        placeholder="Votre Email"
                      />
                      <label htmlFor="inputYourEmail">Votre Email</label>
                    </div>
                  </div>
                  <div className="col-sm-6 m-b30">
                    <div className="form-floating floating-underline input-light">
                      <input
                        name="dzPhoneNumber"
                        type="number"
                        className="form-control dz-number"
                        id="inputPhoneNumber"
                        placeholder="Votre Numero"
                      />
                      <label htmlFor="inputPhoneNumber">Votre Numero</label>
                    </div>
                  </div>
                  <div className="col-sm-6 m-b30">
                    <div className="form-floating floating-underline input-light">
                      <Dropdown className="form-control bs-select">
                        <Dropdown.Toggle as="div">{selectCat}</Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={() => setSelectCat("Angioplasty")}
                          >
                            Angioplasty
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => setSelectCat("Cardiology")}
                          >
                            Cardiology
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => setSelectCat("Dental")}>
                            Dental
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => setSelectCat("Eye Care")}
                          >
                            Eye Care
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="col-sm-12 m-b30">
                    <div className="form-floating floating-underline input-light">
                      <textarea
                        name="dzMessage"
                        className="form-control"
                        id="inputMessage"
                        rows={6}
                        placeholder="Select Service"
                      ></textarea>
                      <label htmlFor="inputMessage">Message</label>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <button
                      type="submit"
                      name="submit"
                      value="submit"
                      className="btn btn-lg btn-icon btn-white hover-secondary btn-shadow"
                    >
                      Envoyer
                      <span className="right-icon">
                        <i className="feather icon-arrow-right" />
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Getintouch;
