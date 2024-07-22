const Button = ({ label, onClick, className, Icon }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-2 rounded-[8px] text-[1rem] ${className}`}
    >
      {label}
      {Icon && <Icon className="relative top-[2px] w-4"/>}
    </button>
  );
};

export default Button;