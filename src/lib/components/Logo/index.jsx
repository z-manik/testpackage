// Library components
import Image from "react-bootstrap/Image";

// Logo image
import LogoImg from "assets/images/logo.png";

const Logo = ({ styles={}, className="" }) => {
  return <Image src={LogoImg} alt="Logo" fluid style={styles} className={className} />;
};

export default Logo;
