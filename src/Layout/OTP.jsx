import { useEffect, useRef, useState } from "react";
import classes from "./OTP.module.css";
const OTP = ({setCloseOTP}) => {
  const [isValidOTP,setIsValidOTP] = useState(true)
  const otp1 = useRef()
  const otp2 = useRef()
  const otp3 = useRef()
  const otp4 = useRef()
  useEffect(()=>{
    setIsValidOTP(true)
    return ()=>{
        setIsValidOTP(true)
    }
  },[])
  const onOTPInputValidator = (event) => {
    if (event.keyCode > 31 && (event.keyCode < 48 || event.keyCode > 57)) {
      event.preventDefault();
    }
  };
  const getOTPFromUser = ()=>{
    const otp = otp1.current.value+otp2.current.value+otp3.current.value+otp4.current.value
    if(otp==='1234'){
        setIsValidOTP(true)
    }
    else{
        setIsValidOTP(false)
    }
    otp1.current.value=''
    otp2.current.value=''
    otp3.current.value=''
    otp4.current.value=''
  }
  return (
    <div className={classes.OTP}>
      <div className={classes["otp-close-button"]}>
        <p className={classes["close-button"]} onClick={()=>setCloseOTP(false)}>&times;</p>
      </div>
      <div className={classes["otp-heading-container"]}>
        <h1>Enter OTP</h1>
      </div>
      <div className={classes["wrong-otp-message-container"]}>
        {isValidOTP?'':<h3 className={classes["wrong-otp-message"]}>
          Invalid OTP
        </h3>}
      </div>
      <div className={classes["otp-container"]}>
        <input
          className={classes["number-input"]}
          onKeyDown={onOTPInputValidator}
          type="text"
          maxLength={1}
          required
          ref={otp1}
        />
        <input
          className={classes["number-input"]}
          onKeyDown={onOTPInputValidator}
          type="text"
          maxLength={1}
          required
          ref={otp2}
        />
        <input
          className={classes["number-input"]}
          onKeyDown={onOTPInputValidator}
          type="text"
          maxLength={1}
          required
          ref={otp3}
        />
        <input
          className={classes["number-input"]}
          onKeyDown={onOTPInputValidator}
          type="text"
          maxLength={1}
          required
          ref={otp4}
        />
      </div>
      <div>
        <button onClick= {getOTPFromUser}className={classes["submit-button"]}>submit</button>
      </div>
    </div>
  );
};
export default OTP;
 