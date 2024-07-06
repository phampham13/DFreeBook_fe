import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Avatar from '@mui/material/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Header({ title }) {
    const user = useSelector((state) => state.user)
    return (
        <div className={cx('wrapHeader')}>
            <h3>{title}</h3>
            <div className={cx('group')}>
                <div className={cx('sub')}>
                    <svg width="24" height="24">
                        <path></path>
                    </svg>
                    <FontAwesomeIcon style={{ fontSize: '28px' }} icon={faCircleUser} />
                    <p style={{ fontSize: '14px' }} > {user.name}</p>
                </div>
            </div>
        </div >
    );
}

export default Header;
