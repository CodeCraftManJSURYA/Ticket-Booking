import React from "react";
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './CreateAccount.css'

function CreateAccount() {
    // const [phone, setPhone] = useState('');

    const schema = yup.object().shape({
        firstName: yup.string().required("firstname is required"),
        lastName: yup.string().required("lastname is required"),
        userName: yup.string().required("username is required"),
        phone : yup.number().positive().integer().required("phone number is required"),
        email: yup.string().email().required("email is required"),
        password: yup.string().min(8).max(15).required("password is required"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required("confirmpassword is required"),

    })
    const { register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    });


    const onSubmit = (data) =>{
        console.log(data);
    }


    // const handlePhoneChange = (e) => {
    //     const value = e.target.value;
    //     if (!isNaN(value) && value.length <= 10) {
    //         setPhone(value);
    //     }
    // };

  return (
    <div className='CreateAccount-root'>
         <div className='CreateAccount-main'>
                <div className='CreateAccount-header'>
                    <h1>Create an account</h1>
                </div>
                <div className='CreateAccount-Form'>
                    <form  onSubmit={handleSubmit(onSubmit)}>
                        <div className="CreateAccount-form-group">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" id="firstname" placeholder={errors.firstName?.message} name="first name" {...register("firstName")}/>
                        </div>
                        <div className="CreateAccount-form-group">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" id="lastname" placeholder={errors.lastName?.message} name="last name" {...register("lastName")}/>
                        </div>
                        <div className="CreateAccount-form-group">
                            <label htmlFor="username">User Name</label>
                            <input type="text" id="username" placeholder={errors.userName?.message} name="user name" {...register("userName")}/>
                        </div>
                        <div className="CreateAccount-form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="number" id="phone" placeholder={errors.phone?.message} name="phone" {...register("phone")}  /> 
                        </div>
                        <div className="CreateAccount-form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email'placeholder={errors.email?.message}  name='email' {...register("email")}/>
                        </div>
                        <div className="CreateAccount-form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder={errors.password?.message} name="password"{...register("password")}/>
                        </div>
                        <div className="CreateAccount-form-group">
                            <label htmlFor="confirm">Confirm Password</label>
                            <input type="password" id="confirm" placeholder={errors.confirmPassword?.message} name="confirm" {...register("confirmPassword")} />
                        </div>
                        <button type='submit' className='CreateAccount-button'>Create</button>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default CreateAccount