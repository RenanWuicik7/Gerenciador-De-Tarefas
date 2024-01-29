import './Header.css'

const Header = ({text}) => {
    return <h1 className="header" style={{color: '#eee'}}>{text}</h1>;
};

export default Header;