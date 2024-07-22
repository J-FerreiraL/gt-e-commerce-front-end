const Logo = ({ image, description, className }) => {
  return(
    <img
      src={image}
      alt={description}
      className={className}
    />
  );
}

export default Logo;