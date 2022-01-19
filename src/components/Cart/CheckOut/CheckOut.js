import { useCallback, useEffect, useState} from 'react';
import Button from '../../UI/Button/Button';
import styles from './CheckOut.module.css'
import PhoneCode from '../../UI/PhoneCode/PhoneCode'
let CheckOut = (props)=>{
    let [countryList,changeCountryList] = useState([]);
    let [stateList,changeStateList] = useState([]);
    let [cityList,changeCityList] = useState([]);
    let validate = {
        fname : false,
        lname : false,
        pno : false,
        email: false,
        address : false,
        pin : false,
    }
    let [isFormValid,changeValidity] = useState(validate);
    let checkFormValidity = (e) =>{
        e.preventDefault();
        if(validateInput(null,'fname')&&
        validateInput(null,'lname')&&
        validateInput(null,'pno')&&
        validateInput(null,'email')&&
        validateInput(null,'address')&&
        validateInput(null,'pin'))
        {
            alert("order Booked");
        }   
    }

    let getCountry = useCallback(
        async ()=>{
            var headers = new Headers();
            headers.append("X-CSCAPI-KEY", "aEgxdGFtRTZxWTNkNzRVOUJSdHdEYU9iSnBiQm5ZcHJGZFFCVnVwRg==");

            var requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
            };
            try{
                let req = await fetch("https://api.countrystatecity.in/v1/countries", requestOptions);
                if(req.status!==200)
                {
                    throw new Error("connection not success");
                }
                let countriesData = await req.json();
                getState(null,countriesData[0].iso2)
                return countriesData;
            }
            catch(error){
                console.log(error.message);
            }
        },[]); 
        let getState = useCallback(
            async (event,data=null)=>{
                let countryuuid=null;
                if(data)
                {
                    countryuuid = data;
                }
                else{
                    countryuuid = event.target.value;
                }
                var headers = new Headers();
                headers.append("X-CSCAPI-KEY", "aEgxdGFtRTZxWTNkNzRVOUJSdHdEYU9iSnBiQm5ZcHJGZFFCVnVwRg==");
    
                var requestOptions = {
                method: 'GET',
                headers: headers,
                redirect: 'follow'
                };
                try{
                    let req = await fetch(`https://api.countrystatecity.in/v1/countries/${countryuuid}/states`, requestOptions);
                    if(req.status!==200)
                    {
                        throw new Error("connection not success");
                    }
                    let StateData = await req.json();
                    getCity(null,StateData[0].iso2);
                    changeStateList(StateData);
                    
                }
                catch(error){
                    console.log(error.message);
                    changeStateList([{id:null,
                        iso:null,
                        name:'N.A'}]);
                    changeCityList([{id:null,
                        iso:null,
                        name:'N.A'}]);
                }
            },[]); 
            let getCity = useCallback(
                async (event,data=null)=>{
                    let stateData = null;
                    if(data)
                    {
                        stateData=data;
                    }
                    else{
                        stateData = event.target.value;
                    }
                    var headers = new Headers();
                    headers.append("X-CSCAPI-KEY", "aEgxdGFtRTZxWTNkNzRVOUJSdHdEYU9iSnBiQm5ZcHJGZFFCVnVwRg==");
        
                    var requestOptions = {
                    method: 'GET',
                    headers: headers,
                    redirect: 'follow'
                    };
                    try{
                        let selectedCountry = document.querySelector('#country').value;
                        let req = await fetch(`https://api.countrystatecity.in/v1/countries/${selectedCountry}/states/${stateData}/cities`, requestOptions);
                        if(req.status!==200)
                        {
                            throw new Error("connection not success");
                        }
                        let cityData = await req.json();
                        if(cityData.length===0)
                        {
                            throw new Error("No Data Found");   
                        }
                        changeCityList(cityData);
                        
                    }
                    catch(error){
                        console.log(error.message);
                        changeCityList([{id:null,
                        iso:null,
                        name:'N.A'}]);
                    }
                },[]); 

    let validateInput = (e,data=null)=>
    {
        let inpData = 0;
        let targetElement = null;
        if(e){
            inpData = e.target.value;
            targetElement = e.target;
        }
        else{
            
            targetElement = document.getElementById(data);
            inpData = document.getElementById(data).value;
        }
        if(data==='fname'){
            if(inpData.trim().length!==0)
            {
            targetElement.style.border='1px solid black';
            changeValidity(previousState=>{
                return {...previousState,fname:false}
            })
            return true;
            }
            else{
            targetElement.style.border='1px solid red';
            changeValidity(previousState=>{
                return {...previousState,fname:true}
            })
            return false;
            }
        }
        if(data==='lname'){
            if(inpData.trim().length!==0)
            {
            targetElement.style.border='1px solid black';
            changeValidity(previousState=>{
                return {...previousState,lname:false}
            })
            return true;
            }
            else{
            targetElement.style.border='1px solid red';
            changeValidity(previousState=>{
                return {...previousState,lname:true}
            })
            return false;
            }
        }
        if(data==='pno'){
            let phonenoPattern = /^\d{10}$/;
             if(inpData.match(phonenoPattern))
              {
                targetElement.style.border='1px solid black';
                changeValidity(previousState=>{
                return {...previousState,pno:false}
                })
                return true;
              }
             else{
                targetElement.style.border='1px solid red';
                changeValidity(previousState=>{
                return {...previousState,pno:true}
                })
                return false;
            }
        }
        if(data==='email'){
            let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;            
             if(inpData.match(emailPattern))
              {
                targetElement.style.border='1px solid black';
                changeValidity(previousState=>{
                return {...previousState,email:false}
                })
                return true;
              }
             else{
                targetElement.style.border='1px solid red';
                changeValidity(previousState=>{
                return {...previousState,email:true}
                })
                return false;
            }
        }
        if(data==='address'){
            if(inpData.trim().length!==0)
            {
            targetElement.style.border='1px solid black';
            changeValidity(previousState=>{
                return {...previousState,address:false}
            })
            return true;
            }
            else{
            targetElement.style.border='1px solid red';
            changeValidity(previousState=>{
                return {...previousState,address:true}
            })
            return false;
            }
        }
        if(data==='pin'){
            let pinPattern = /^\d{6}$/;
            if(inpData.trim().length>0 && inpData.match(pinPattern))
            {
            targetElement.style.border='1px solid black';
            changeValidity(previousState=>{
                return {...previousState,pin:false}
            })
            return true;
            }
            else{
            targetElement.style.border='1px solid red';
            changeValidity(previousState=>{
                return {...previousState,pin:true}
            })
            return false;
            }
        }
    }
    

    useEffect(()=>{
        let fun1 = async ()=>{
            let countryList1 = await getCountry();
            changeCountryList(countryList1);
        }
        fun1();
    },[getCountry])
    return(
        <form className={styles['checkout-form']}>
        <h2 className={styles.head}>CheckOut Form</h2>
        <div className={styles['checkout-data']}>
        <div className={styles.names}>
        <div className={styles.feild}>
        <label className={styles.label1} htmlFor='fname'>First Name </label>
        <input type='text' className={styles.input1} id='fname' name='fname' onChange={(e)=>{validateInput(e,'fname')}} onBlur={(e)=>{validateInput(e,'fname')}}></input>
        {isFormValid.fname &&<span className={styles.error}>Please provide a valid input</span>}
        </div>
        <div className={styles.feild}>
        <label className={styles.label1} htmlFor='lname'>Last Name </label>
        <input type='text' className={styles.input1} id='lname' name='lname' onChange={(e)=>{validateInput(e,'lname')}} onBlur={(e)=>{validateInput(e,'lname')}}></input>
        {isFormValid.lname &&<span className={styles.error}>Please provide a valid input</span>}
        </div>
        </div>
        <div className={styles.feildpno}>
        <label className={styles.label1} htmlFor='pno'>Phone No </label>
        <div className={styles.phonefeild}>
        <PhoneCode id = 'phone-code' className={styles.phoneCode}/>
        <input type='text' className={styles.input1} id='pno' name='pno' onChange={(e)=>{validateInput(e,'pno')}} onBlur={(e)=>{validateInput(e,'pno')}}></input>
        </div>
        {isFormValid.pno &&<span className={styles.error}>Please provide a valid Phone Number</span>}
        </div>
        <div className={styles.feild}>
        <label className={styles.label1} htmlFor='email1'>Email</label>
        <input type='email' className={styles.input1} id='email' name='email' onChange={(e)=>{validateInput(e,'email')}} onBlur={(e)=>{validateInput(e,'email')}}></input>
        {isFormValid.email &&<span className={styles.error}>Please provide a valid Email</span>}
        </div>
        <div className={styles.feild}>
        <label className={styles.label1} htmlFor='add1'>Address</label>
        <input type='text' className={styles.input1} id='address' name='address' onChange={(e)=>{validateInput(e,'address')}} onBlur={(e)=>{validateInput(e,'address')}}></input>
        {isFormValid.address &&<span className={styles.error}>Please provide a valid Address</span>}
        </div>
        <div className={styles.feild}>
        <label className={styles.label1} htmlFor='add2'>Address2 (Optional)</label>
        <input type='text' className={styles.input1} id='address2' name='address2'></input>
        </div>
        <div className={styles.address}>
        <div className={styles.feild}>
        <label className={styles.label1} htmlFor='country'>Country</label>
        <select className={styles.input1} id='country' name='country' onChange={getState}> 
        {countryList.length?countryList.map((item)=>{
            return(<option key={item.id} id={item.id} value={item.iso2}>{item.name}</option>)
        }):<option>Select One</option>}
        </select>
        </div>
        <div className={styles.feild}>
        <label className={styles.label1} htmlFor='state'>State</label>
        <select className={styles.input1} id='state' name='state' onChange={getCity}>
        {stateList.length?stateList.map((item)=>{
            return(<option key={item.id} id={item.id} value={item.iso2}>{item.name}</option>)
        }):<option>Select One</option>}
        </select>
        </div>
        <div className={styles.feild}>
        <label className={styles.label1} htmlFor='city'>City</label>
        <select className={styles.input1} id='city' name='city'>
        {cityList.length?cityList.map((item)=>{
            return(<option key={item.id} id={item.id} value={item.name}>{item.name}</option>)
        }):<option>Select One</option>}</select>
        </div>
        <div className={styles.feild}>
        <label className={styles.label1} htmlFor='pin'>Pin Code</label>
        <input className={styles.input1} id='pin' name='pin' onChange={(e)=>{validateInput(e,'pin')}} onBlur={(e)=>{validateInput(e,'pin')}}/>
        {isFormValid.pin &&<span className={styles.error}>Please provide a valid Pin Code</span>}
        </div>
        </div>
        </div>
        <div className={styles.btn}>
        <Button data={{type:'button', onClick:props.onClick}}>Back</Button>
        <Button data={{type:'submit', onClick: checkFormValidity}}>Pay {props.total} &#8377;</Button>
        </div>
        </form>
    )
}

export default CheckOut;