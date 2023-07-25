import './styles.css';

import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProfilePage = () => {
    const loggedIn = true; //Replace with actual auth logic

    return (
        <>
        {loggedIn ? <div>Profile</div> : <div>Need Permission</div>}   

        <section> 
            <Header />               
                <div1>
                    <form className="user-profile">
                        <div>
                            <label htmlFor='firstName'>First Name</label>
                            <input id='firstName' name = 'firstName' placeholder='First Name'  /><br></br><br></br>
                        </div>
                        <div>
                            <label htmlFor='lastName'>Last Name</label>
                            <input id='lastName' name = 'lastName' placeholder='Last Name' /><br></br><br></br>
                        </div>
                        <div>
                            <label htmlFor='DOB'>DOB</label>
                            <input id='DOB' name = 'DOB' placeholder='DOB' /><br></br><br></br>
                        </div>
                    </form>  
                </div1>
                <div2><br></br>
                <form className="user-profile">
                        <div>
                            <label htmlFor='phone#'>Phone #</label>
                            <input id='firstName' name = 'firstName' placeholder='First Name'  /><br></br><br></br>
                        </div>
                        <div>
                            <label htmlFor='email'>Email</label>
                            <input id='email' name = 'email' placeholder='Email' /><br></br><br></br>
                        </div>
                        <div>
                            <label htmlFor='password'>Password</label>
                            <input id='password' name = 'password' placeholder='Password' /><br></br><br></br>
                        </div>
                        <div>
                            <button type="submit">Save</button> 
                        </div>
                    </form>   
                </div2>
                <Footer />
        </section>


        </>

        
    );
}

export default ProfilePage;