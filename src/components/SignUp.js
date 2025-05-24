import { CgProfile } from 'react-icons/cg';
import styles from '../css/SignUp.module.scss';

function SignUp() {
  return (
    <div className={styles.SignUp_div}>
      <div className={styles.SignUp_main}>
        <h1>내담자 회원가입</h1>
        <hr />
        <CgProfile className={styles.user_profile} />
        <div>
          <span>아이디</span>
          <input />
        </div>
        <div>
          <span>아이디</span>
          <input />
        </div>
        <div>
          <span>아이디</span>
          <input />
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
            <input />
            <button>인증 요청</button>
          </div>
        </div>
        <div className={styles.Certification_number}>
          <span>인증번호</span>
          <input></input>
          <button>확인</button>
        </div>
        <div>
          <span>주민등록번호</span>
          <div className={styles.resident_registration_number}>
            <input></input>
            <span>-</span>
            <input></input>
          </div>
        </div>
        <div>
          <span>주소</span>
          <input></input>
        </div>
        <button className={styles.signup_button}>가입하기</button>
      </div>
    </div>
  );
}

export default SignUp;
