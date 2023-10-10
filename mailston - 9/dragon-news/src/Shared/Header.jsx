import logo from '../../src/assets/images/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='my-10 text-center'>
            
            <img className='mx-auto' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className='text-2xl'> {moment().format("dddd, MMMM Do YYYY, h:mm a")} </p>
        </div>
    );
};

export default Header;