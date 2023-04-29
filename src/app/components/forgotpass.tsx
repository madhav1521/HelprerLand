import { Button, Checkbox, TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';
const CustomTextField2 = styled(TextField)({
   
    '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{
        height:"46px",
        width:"286px",
        margin:"10px 17px"
    },
 //    '@media(max-width:380px)':{
 //     '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{
 //       width:"300px" 
 //     }
 // }
 });
const CustomButton = styled(Button)({

    width: "125px",
    height: "46px",
    background: "#1D7A8C 0% 0% no-repeat padding-box",
    borderRadius: "23px",
    color:"#FFFFFF",
    fontSize:"16px",
    margin:"10px auto",
    textTransform:"capitalize",
    '&:hover': {
        backgroundColor: "#525252"
    }
});

const submitform = (e:any) =>{
    e.preventDefault();
    emailjs.sendForm('service_jvv6rrd','template_10j8wtb',e.target,'ITzav1NronUYWixci')
    .then(result =>{
        console.log(result);
    },
    (error:any)=>{
    console.log(error.text);
    });
   e.target.reset();
    
}
function Forgot() {
    
    return (
        <>
            <form className="forgot-password" onSubmit={submitform}>
                    <h1>Forgot password</h1>
                    <CustomTextField2  placeholder="Email Address" type="email" 
                    name="Email" />
                    <CustomButton type="submit">Send</CustomButton>
                    <a href="#" onClick={e => {
                        document.body.classList.toggle('login-open')
                        document.body.classList.remove('forgot-open')}}
                        type="submit">Login now</a>
            </form>
        </>
    );
}

export default Forgot;