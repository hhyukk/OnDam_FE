// SignUpCounselor.js
import { useState } from 'react';
import SignUp from '../components/SignUp';

function SignUpCounselor() {
  const [address, setAddress] = useState('');

  return <SignUp address={address} setAddress={setAddress} isCounselor={true} />;
}

export default SignUpCounselor;
