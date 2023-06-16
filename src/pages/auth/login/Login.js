import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import './Login.scss';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="auth-inner">
      {/* <div className={`alerts ${alertType}`} role="alert">
        {errorMessage}
      </div> */}
      <form className="auth-form">
        <div className="form-input-container">
          <Input
            id="username"
            name="username"
            type="text"
            value="my value"
            labelText="Username"
            placeholder="Enter Username"
            handleChange={() => {}}
          />
          <Input
            id="password"
            name="password"
            type="password"
            value="my password"
            labelText="Password"
            placeholder="Enter Password"
            handleChange={() => {}}
          />
          <label className="checkmark-container" htmlFor="checkbox">
            <Input id="checkbox" name="checkbox" type="checkbox" value={false} handleChange={() => {}} />
            Keep me signed in
          </label>
        </div>
        <Button label={'SIGNIN'} className="auth-button button" disabled={true} />
        <Link to={'/forgot-password'}>
          <span className="forgot-password">
            Forgot password? <FaArrowRight className="arrow-right" />
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
