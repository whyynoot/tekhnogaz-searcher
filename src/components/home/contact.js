import React , {createRef} from 'react'
import instance from '../api/api_service';
class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.wrapper = createRef();
        this.state = {
          name: "",
          phone: "",
          message: "",
          status: "Отправить",
        };
      }
     
      // componentDidMount(){
      //   console.log("this.wrapper",this.wrapper)
      // }

      changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };

    
      submitHandler = (e) => {
        e.preventDefault();
    
        instance
          .post('/api/create_request/', {
            name: this.state.name,
            mobile: this.state.phone,
            msg: this.state.message,
          })
          .then((response) => {
            this.setState({status:"Мы скоро с Вами связжемся!"});
          })
          .catch((error) => {
            this.setState({status:"Мы скоро с Вами связжемся!"});
          });
      };

    render() { 
      const { name, phone, message } = this.state;
      const {status} = this.state;

      return (
            <>
   <section class="register-photo">
       <div class="form-container">
           <div class="image-holder"></div>
           <form method="post" onSubmit={this.submitHandler}>
               <h2 class="text-center"><strong>Остались вопросы? - Разберемся!</strong></h2>
               <div class="mb-3"><input  class="form-control" type="text" name="name" onChange={this.changeHandler} value={name} id="name" placeholder="Как к Вам обращаться" required/></div>
               <div class="mb-3"><input  class="form-control" type="text" name="phone" onChange={this.changeHandler} value={phone} id="phone" placeholder="Как с вами связаться" /></div>
               <div class="mb-3"><textarea class="form-control" name="message" id="message" onChange={this.changeHandler} value={message}  placeholder="Какой у вас вопрос" style= {{ minHeight: '160px' , maxHeight: '160px' }} required></textarea></div>
               <div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit">{status}</button></div>
           </form>
       </div>
   </section>   
       </>
        );
    }
}
 
export default Contact;

