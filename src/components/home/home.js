import React , {Component} from 'react';
import Contact from './contact';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import step1 from '../assets/images/step1.png';
import step2 from '../assets/images/step2.png';
import step3 from '../assets/images/step3.png';
import mobile from '../assets/images/web2.png'; 

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        services: [],
        special: [],
      };
    }
  

    componentDidMount() {   
    //     instance
    //     .get('web-service-home/')
    //     .then((res) => {
    //       this.setState({ services: res.data.RESPONSE });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });

    // instance
    //     .get('special-service/')
    //     .then((res) => {
    //         this.setState({ special: res.data.RESPONSE });
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    }
  
    render() {
      const { services , special } = this.state;
    return  (
        <>
        {/* <Carousel /> */}
        <br />

        {/* Content1  */}

        <div class="container" style={{marginTop: '3%'}}>
        <div class="row">
            <div class="col-md-12 col-lg-6">
                <div class="container"><img src={image1} style={{ width: '100%'}} /></div>
            </div>
            <div class="col-md-12 col-lg-6">
                <div class="container" style={{marginTop: '7%'}}>
                    <div class="base_header"><span><small class="bor_header_left"></small>НАШИ РЕШЕНИЯ<small class="bor_header_right"></small></span>
                        <h3>Инновации для лучшего будущего</h3>
                    </div>
                    <div class="base_footer">
                        <p>TechnoGaz - это не просто технологическая компания. Мы инноваторы с видением более яркого будущего! <br />Мы стремимся исследовать новые ИТ-решения в различных областях, используя технологии
                         для упрощения и оптимизации процессов, сокращения усилий и затрат. Наше стремление к новым горизонтам в технологиях соответствует нашей страсти к упрощению жизни и бизнес-операций.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <br />

        {/* Content2  */}

        <div  class="steps">
        <div class="base_header text-center" style={{paddingTop: '2%'}}><span><small class="bor_header_left"></small>НАШИ РЕШЕНИЯ<small class="bor_header_right"></small></span>
            <h3>Как мы работаем?</h3>
        </div>
        <div class="container" style={{ marginTop: "3%",paddingBottom: '3%' }} >
            <div class="row">
                <div class="col-md-4 text-center steps">
                    <div><img src={step1} alt="step1" />
                        <h4><strong>Постановка проблемы</strong></h4>
                        <h4>В современном бизнесе возникают разнообразные задачи и потребности, требующие оптимизации процессов и поиска инновационных решений.</h4>
                    </div>
                </div>
                <div class="col-md-4 text-center steps">
                    <div><img src={step2} alt="step2" />
                        <h4><strong>Поиск инновационного решения</strong></h4>
                        <h4>Обратившись к ТехноГаз, компании любой сферы деятельности могут быстро и точно находить инновации и нестандартные подходы к решению своих задач.</h4>
                    </div>
                </div>
                <div class="col-md-4 text-center steps">
                    <div><img src={step3} alt="step3" />
                        <h4><strong>Реализация решения</strong></h4>
                        <h4>Наши эксперты реализуют инновации, обеспечивая успех и эффективность в мире технологий.</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>

        {/* PlayStore */}
        <div style={{ background: '#006FB9' ,padding: '2%' }}>
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-6">
                    <div class="container" style={{marginTop: '7%' }}>
                        <div class="base_header">
                            {/* <h3>Simple way to Book Your Maid Faster</h3> */}
                            <h3 style={{color: 'white'}}>VR / AR Solutions</h3>
                        </div>
                        <div class="base_footer">
                            <p style={{color: 'white'}}>Поднимаем планку в VR/AR<br/><br/>  В ТехноГазе мы преодолеваем границы виртуальной и дополненной реальности. Наша команда экспертов на переднем крае разработки VR/AR создаёт захватывающие виртуальные миры, оставляющие незабываемые впечатления. 
                            Будь то создание виртуальных тренировочных симуляций для повышения безопасности или интерактивных образовательных сред, мы специализируемся на предоставлении VR/AR-решений, которые переопределяют возможности.</p>
<br />
<br />
                        </div>
                    </div>

                </div>
                <div class="col-md-12 col-lg-6 app_store_image">
                    <div class="container" style={{ marginTop: '70px'}}><img src={mobile} /></div>
                </div>
            </div>
        </div>
    </div>
        

    {/* Content4  */}

    <div class="container" style={{marginTop: '3%'}}>
        <div class="row">            
            <div class="col-md-12 col-lg-6">
                
                    <div class="container">
                    <div class="base_header"><span><small class="bor_header_left"></small>НАШИ ПРОЕКТЫ<small class="bor_header_right"></small></span>
                        <h3>Некоторые решения</h3>
                    </div>
                    
                    <div class="base_footer" key="1">
                        <p><strong>Платформа поиска и анализа веб-контента</strong> <br />
                        Наши разработчики создали уникальную платформу для поиска и анализа веб-контента, предназначенную для аналитиков, 
                        специалистов по поиску информации и всех, кто ищет ответы в онлайн-мире. Это мощный инструмент, разработанный поверх уже существующих поисковиков, адаптированный под конкретные задачи закачиков. 
                        </p>                       
                    </div>  
                </div>
                
                
            </div>
            <div class="col-md-12 col-lg-6">
                <div class="container" ><img src={image2} style={{ width: '90%', padding: "10%"}} /></div>
            </div>
        </div>
    </div>

    <br />

     {/* Service List  */}

     {/* <div class="container" style= {{ marginTop: '5%'}}>
     <div class="base_header"><h3>Our Services</h3> 
     <span style={{padding: '2%'}}><a href="/service" >MORE SERVICES →</a></span>   
    </div>
    <br />
    <div class="container">
                <div class="row"> 
                  <div
                    class="col-md-6 col-lg-4 col-xl-4"
                    style={{ marginTop: "2%" }}
                  >
                      <div class="card category-card" key="1">
                        <img
                          class="card-img-top w-100 d-block"
                          src={Service1}
                          alt="service1"
                        />
                        <div class="card-body">
                          <h4 class="card-title">Service Name</h4>
                        </div>
                      </div>
                  </div>   


                  <div
                    class="col-md-6 col-lg-4 col-xl-4"
                    style={{ marginTop: "2%" }}
                  >
                      <div class="card category-card" key="1">
                        <img
                          class="card-img-top w-100 d-block"
                          src={Service1}
                          alt="service1"
                        />
                        <div class="card-body">
                          <h4 class="card-title">Service Name</h4>
                        </div>
                      </div>
                  </div> 


                  <div
                    class="col-md-6 col-lg-4 col-xl-4"
                    style={{ marginTop: "2%" }}
                  >
                      <div class="card category-card" key="1">
                        <img
                          class="card-img-top w-100 d-block"
                          src={Service1}
                          alt="service1"
                        />
                        <div class="card-body">
                          <h4 class="card-title">Service Name</h4>
                        </div>
                      </div>
                  </div> 
                </div>
            </div>
        </div>

        <br />   */}

        {/* Team 
        < Team /> */}

        {/* Contact Form  */}
        <Contact />
        </>
    );
}
}
export default Home;