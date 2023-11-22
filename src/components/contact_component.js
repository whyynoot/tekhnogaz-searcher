import React from 'react';
import { FiPhone, FiMail } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import Contact from './home/contact';
import { FiInfo } from "react-icons/fi";

const contact_component = () => {
    return (
        <>
        <div class="container" style={{ marginTop: "3%" }}>
        <div class="row">
          <div class="col-md-12 col-lg-6">
            <div class="container">
              <div class="base_header">
                <span>
                  <small class="bor_header_left"></small>контакты
                  <small class="bor_header_right"></small>
                </span>
                <h3>Связаться с нами</h3>
              </div>
              <div class="base_footer">
                <br />
                <ul style={{ listStyle: "none" }}>
                  <li class="contact-icons">
                    <FiPhone />
                    <label class="form-label">+79055109354</label>
                  </li>
                  <br/>
                  <li class="contact-icons">
                    <FiMail />
                    <label class="form-label"><a href="mailto://contact@kamaimedia.ru">contact@tekhnogaz.ru</a></label>
                  </li>
                  <br/>
                  <li class="contact-icons">
                    <IoLocationOutline />
                    <label class="form-label">123557, г. Москва, ул. Малая Грузинская, д. 38</label>
                  </li>
                  <br/>
                  <li class="contact-icons">
                    <FiInfo />
                    <label class="form-label">ИНН: 9703157555 </label>
                  </li>
                  <br/>
                  <li class="contact-icons">
                    <FiInfo />
                    <label class="form-label">КПП: 770301001 </label>
                  </li>
                  <br/>
                  <li class="contact-icons">
                    <FiInfo />
                    <label class="form-label">Ген. директор: Максим Витальевич Биккулов</label>
                  </li>
                </ul>
                <br />
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6">
            <div class="container">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A6cd1d6b8dd40591be27bfa98efa2a39dcf1fe20d9295ddb7f972f8b1727e0e84&amp;source=constructor"
                style={{ border: 0, width: "100%", height: "55vh" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <br />
      <Contact/>
      </>
    )
}

export default contact_component
