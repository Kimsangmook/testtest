interface ButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;        
}

export const Button = (props: ButtonProps) => {
  const { title, onClick, disabled, className = "" } = props;
  return (
    <button
      className={`border-[1px] border-orange border-solid rounded-full py-[15px] px-[96px] text-orange
      hover:bg-orange hover:text-white transition duration-300 ${
        disabled && "cursor-not-allowed"
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
