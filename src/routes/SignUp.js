import { useNavigate } from 'react-router-dom';
import styles from '../css/SignUp.module.scss';
function SignUp() {
  return (
    <div>
      <div className={styles.main}>
        <h1>
          오늘의 감정이 머물 곳<br />
          ON:DAM에 가입해보세요
        </h1>
        <hr />
        <button>내담자로 가입할래요</button>
        <button>상담사로 가입할래요</button>
        <span>이미 아이디가 있다면? 로그인 하러가기</span>
      </div>
    </div>
  );
}

export default SignUp;
