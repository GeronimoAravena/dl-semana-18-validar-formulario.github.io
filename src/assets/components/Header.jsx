/* eslint-disable react/prop-types */
const Header = ({title, subtitle, social}) => {
    return (
        <>
            <h2>{title}</h2>
            <div className="social-container">
                {social.map(element => { return element })}
            </div>
            <p>{subtitle}</p>
        </>
    );
};

export default Header;