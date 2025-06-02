import { useState } from 'react';
import SignUp from '../components/SignUp';

function SignUpClient() {
  const [address, setAddress] = useState('');

  return <SignUp address={address} setAddress={setAddress} isCounselor={false} />;
}

export default SignUpClient;
