import { useState } from "react";
import './CreateAccount.css'

function CreateAccount() {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value) && value.length <= 10) {
            setPhone(value);
        }
    };

    const handlePasswordChange = (e) => {
        e.preventDefault();
        const passValue = e.target.value;
        
        if (passValue.length < 8 || !passValue.includes('#')) {
            alert("Password must have at least 8 characters and include the special character '#'.");
            return false;
        }
        setPassword(passValue);
    };

  return (
    <div className='CreateAccount-root'>
         <div className='CreateAccount-main'>
                <div className='CreateAccount-header'>
                    <h1>Create an account</h1>
                </div>
                <div className='CreateAccount-Form'>
                    <form>
                        <div className="CreateAccount-form-group">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" id="firstname" name="first name" />
                        </div>
                        <div className="CreateAccount-form-group">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" id="lastname" name="last name" />
                        </div>
                        <div className="CreateAccount-form-group">
                            <label htmlFor="companyname">User Name</label>
                            <input type="text" id="companyname" name="company name" />
                        </div>
                        <div className="CreateAccount-form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" id="phone" name="phone" value={phone} onChange={handlePhoneChange} pattern="[0-9]{10}" required />
                        </div>
                        <div className="CreateAccount-form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email' name='email' />
                        </div>
                        <div className="CreateAccount-form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
                        </div>
                        <div className="CreateAccount-form-group">
                            <label htmlFor="confirm">Confirm Password</label>
                            <input type="password" id="confirm" name="confirm" />
                        </div>
                        <button type='submit' className='CreateAccount-button'>Create</button>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default CreateAccount