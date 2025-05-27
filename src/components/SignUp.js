import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import styles from '../css/SignUp.module.scss';

function SignUp() {
  const [phone, setPhone] = useState('');

  const handleSendSMS = async (e) => {
    e.preventDefault();

    if (!phone.trim()) {
      alert('전화번호를 입력해주세요.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/sms/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
  return (
    <div className={styles.SignUp_div}>
      <div className={styles.SignUp_main}>
        <h1>내담자 회원가입</h1>
        <hr />
        <CgProfile className={styles.user_profile} />
        <form>
          <div>
            <span>아이디</span>
            <input type="text" required />
          </div>
          <div>
            <span>비밀번호</span>
            <input type="password" required />
          </div>
          <div>
            <span>이름</span>
            <input type="text" required />
          </div>
          <div>
            <span>성별</span>
            <div className={styles.radio_group}>
              <label>
                <input type="radio" name="gender" value="male" />
                남자
              </label>
              <label>
                <input type="radio" name="gender" value="female" />
                여자
              </label>
            </div>
          </div>
          <div>
            <span>전화번호</span>
            <div className={styles.phone_number}>
              <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
          </div>

          {/* <div className={styles.Certification_number}> */}
          <div className={styles.Certification_number}>
            <span>인증번호</span>
            <input></input>
            <button>확인</button>
          </div>
          {/* <div>
            <span>주민등록번호</span>
            <div className={styles.resident_registration_number}>
              <input type="text" required></input>
              <span>-</span>
              <input type="password" required></input>
            </div>
          </div> */}
          <div>
            <span>주소</span>
            <input type="text" required></input>
          </div>
          <button className={styles.signup_button}>가입하기</button>
        </form>
        <button type="button" onClick={handleSendSMS}>
          인증 요청
        </button>
      </div>
    </div>
  );
}

export default SignUp;
