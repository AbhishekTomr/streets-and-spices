import { useCallback, useEffect } from 'react';
import Button from '../../UI/Button/Button';
import styles from './CheckOut.module.css'
let CheckOut = (props)=>{
    let getCountry = useCallback(
        async ()=>{
            var headers = new Headers();
            headers.append("X-CSCAPI-KEY", "API_KEY");

            var requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
            };
            try{
                let req = await fetch("https://api.countrystatecity.in/v1/countries", requestOptions);
                if(req.status==401)
                {
                    throw new Error("connection not success");
                }
                let countriesData = await req.json();
                console.log(countriesData);
            }
            catch(error){
                console.log(error.message);
            }
        },[]); 
    
    useEffect(()=>{
        getCountry();
    },[getCountry])
    return(
        <form className={styles['checkout-form']}>
        <h2 className={styles.head}>CheckOut Form</h2>
        <div className={styles['checkout-data']}>
        <div className={styles.names}>
        <div className={styles.feild}>
        <label className={styles.label1} htmlFor='fname'>First Name </label>
        <input type='text' className={styles.input1} id='fname' name='fname'></input>
        </div>
        <div className={styles.feild}>
        <label className={styles.label1} htmlFor='lname'>Last Name </label>
        <input type='text' className={styles.input1} id='lname' name='lname'></input>
        </div>
        </div>
        <div className={styles.feild}>
        <label className={styles.label1} htmlFor='pno'>Phone No </label>
        <input type='text' className={styles.input1} id='pno' name='pno'></input>
        </div>
        <div className={styles.feild}>
        <label className={styles.label1} htmlFor='email1'>Email</label>
        <input type='email' className={styles.input1} id='email1' name='email1'></input>
        </div>
        <div className={styles.feild}>
        <label className={styles.label1} htmlFor='add1'>Address</label>
        <input type='text' className={styles.input1} id='add1' name='add1'></input>
        </div>
        <div className={styles.feild}>
        <label className={styles.label1} htmlFor='add2'>Address2 (Optional)</label>
        <input type='text' className={styles.input1} id='add2' name='add2'></input>
        </div>
        <div className={styles.address}>
        <div className={styles.feild}>
        <label className={styles.label1} htmlFor='country'>Country</label>
        <select className={styles.input1} id='country' name='country'>
        </select>
        </div>
        <div className={styles.feild}>
        <label className={styles.label1} htmlFor='state'>State</label>
        <select className={styles.input1} id='state' name='state'></select>
        </div>
        <div className={styles.feild}>
        <label className={styles.label1} htmlFor='city'>City</label>
        <select className={styles.input1} id='city' name='city'></select>
        </div>
        <div className={styles.feild}>
        <label className={styles.label1} htmlFor='zip'>Zip</label>
        <select className={styles.input1} id='zip' name='zip'></select>
        </div>
        </div>
        </div>
        <div className={styles.btn}>
        <Button data={{type:'button', onClick:props.onClick}}>Back</Button>
        <Button data={{type:'button'}}>Make Payment</Button>
        </div>
        </form>
    )
}

export default CheckOut;