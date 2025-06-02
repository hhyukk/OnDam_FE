import { useState } from 'react';
import styles from '../css/SignUp.module.scss';

function SignUp({ address, setAddress, isCounselor }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [rrnFront, setRrnFront] = useState('');
  const [rrnBack, setRrnBack] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [hospitalAddress, setHospitalAddress] = useState('');
  const [certificateFile, setCertificateFile] = useState(null);

  const handleSendSMS = async (e) => {
    e.preventDefault();
    if (!phone.trim()) return alert('전화번호를 입력해주세요.');

    try {
      const response = await fetch('http://localhost:5000/api/sms/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });
      if (response.ok) {
        alert('인증번호가 발송되었습니다.');
      } else {
        alert('인증 요청에 실패했습니다.');
      }
    } catch (error) {
      console.error('SMS 요청 오류:', error);
      alert('서버 오류가 발생했습니다.');
    }
  };

  const handleVerifyCode = async () => {
    if (!verificationCode.trim()) return alert('인증번호를 입력해주세요.');

    try {
      const response = await fetch('http://localhost:5000/api/sms/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, code: verificationCode }),
      });

      const result = await response.json();

      if (response.ok) {
        alert('인증이 완료되었습니다.');
        setIsVerified(true);
      } else {
        alert(result.message || '인증 실패');
      }
    } catch (error) {
      console.error('인증 확인 오류:', error);
      alert('서버 오류가 발생했습니다.');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const identification_Number = rrnFront + rrnBack;

    try {
      let response;

      //상담사 회원가입
      if (isCounselor) {
        const formData = new FormData();
        formData.append('id', userId);
        formData.append('password', password);
        formData.append('name', name);
        formData.append('gender', gender);
        formData.append('phone', phone);
        formData.append('identification_Number', identification_Number);
        formData.append('hospitalAddress', hospitalAddress);
        formData.append('certificateFile', certificateFile);

        response = await fetch('http://localhost:5000/api/counselor/signup', {
          method: 'POST',
          body: formData,
        });
      } else {
        // 내담자 회원가입
        const userData = {
          id: userId,
          password,
          name,
          gender,
          address,
          phone,
          identification_Number,
        };

        response = await fetch('http://localhost:5000/api/user/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData),
        });
      }

      const result = await response.json();

      if (response.ok) {
        alert('회원가입이 완료되었습니다!');
      } else {
        alert(result.message || '회원가입 실패');
      }
    } catch (error) {
      console.error('회원가입 오류:', error);
      alert('서버 오류가 발생했습니다.');
    }
  };

  return (
    <div className={styles.SignUp_div}>
      <div className={styles.SignUp_main}>
        <h1>{isCounselor ? '상담사 회원가입' : '내담자 회원가입'}</h1>
        <hr />

        <form onSubmit={handleSignup}>
          <div>
            <span>아이디</span>
            <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
          </div>
          <div>
            <span>비밀번호</span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div>
            <span>이름</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <span>성별</span>
            <div className={styles.radio_group}>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                />
                남자
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                />
                여자
              </label>
            </div>
          </div>
          <div>
            <span>전화번호</span>
            <form className={styles.phone_number} onSubmit={(e) => e.preventDefault()}>
              <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} disabled={isVerified} />
              <button className={styles.phone_button} type="button" onClick={handleSendSMS} disabled={isVerified}>
                인증 요청
              </button>
            </form>
          </div>
          <div className={styles.Certification_number}>
            <span>인증번호</span>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              disabled={isVerified}
            />
            <button type="button" onClick={handleVerifyCode} className={styles.phone_button} disabled={isVerified}>
              확인
            </button>
          </div>
          <div>
            <span>주민등록번호</span>
            <div className={styles.resident_registration_number}>
              <input
                type="text"
                required
                value={rrnFront}
                maxLength={6}
                minLength={6}
                onChange={(e) => setRrnFront(e.target.value)}
              />
              <span>-</span>
              <input
                type="password"
                required
                value={rrnBack}
                maxLength={1}
                minLength={1}
                onChange={(e) => setRrnBack(e.target.value)}
              />
            </div>
          </div>

          {!isCounselor && (
            <div>
              <span>주소</span>
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>
          )}
          {isCounselor && (
            <>
              <div>
                <span>병원 주소</span>
                <input
                  type="text"
                  value={hospitalAddress}
                  onChange={(e) => setHospitalAddress(e.target.value)}
                  required
                />
              </div>
              <div>
                <span>자격증/병원 관련 서류 업로드</span>
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  onChange={(e) => setCertificateFile(e.target.files[0])}
                  required
                />
              </div>
            </>
          )}
          <button className={styles.signup_button} type="submit">
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
