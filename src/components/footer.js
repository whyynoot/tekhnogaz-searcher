import {FiFacebook , FiTwitter ,FiLinkedin ,FiInstagram , FiPhone} from 'react-icons/fi'; 
import {IoMailOutline } from 'react-icons/io5';

const Footer = () => { 
    return ( 
        <>
        <footer class="footer-dark">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-3 item">
                    <h3 class="footer-links-title">Полезные ссылки</h3>
                    <ul class="footer-links">
                        <li><a href="/about">Кто мы такие</a></li>
                        {/* <li><a href="/#team">Our Team</a></li> */}
                        <li><a href="/contact">Контакты</a></li>
                        {/* <li><a href="/terms-privacy">Terms & Conditions</a></li>
                        <li><a href="/terms-privacy">Privacy Policy</a></li> */}
                    </ul>
                </div>
                <div class="col-sm-6 col-md-3 item">
                    <h3><strong>Города</strong></h3>
                    <ul class="footer-links">
                        <li><a>Москва</a></li>
                    </ul>
                </div>
                
                <div class="col-sm-6 col-md-3 item">
                    <h3><strong>Нужна помощь</strong></h3>
                    <ul class="footer-links">
                        <li><a href="/contact">Оставить заявку</a></li>
                    </ul>
                </div>
                <div class="col-sm-6 col-md-3 item">
                    <h3><strong>Контакты</strong></h3>
                    <ul class="footer-links">
                    <li><a href="mailto://contact@kamaimedia.ru">contact@tekhnogaz.ru</a></li><br/>
                    <li><a href="">Малая Грузинская 38, 123557</a></li>
                        {/* <li><a><FiPhone style={{fontSize:'25px' , paddingRight: '1%'}}/>1234567890</a></li>
                        <li><a><IoMailOutline style={{fontSize:'25px' , paddingRight: '1%'}}/>homietouch@gmail.com</a></li>
                        <br />
                        <li class="footer-icons"><a href="#"><FiLinkedin /></a><a href="#"><FiFacebook /></a><a href="#"><FiTwitter /></a><a href="#"><FiInstagram /></a></li>
                        <br />
                        // <li><a href="/maidapp">Оставить заявку</a></li>
                        <li className="footer-icons"><img src={razorpayimg} alt="Razorpay" /></li> */}
                        
                    </ul>
                </div>
            </div>
            <p class="copyright">ТехноГаз © 2023</p>
        </div>
    </footer>
        </>
    )
}
export default Footer; 