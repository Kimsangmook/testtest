interface MenuProps {
  id: number;
  title: string;
  onClick?: (e: any) => void;
  className?: string;
  disabled?: boolean;
}

export const Menu = ({
  title,
  onClick,
  disabled,
  className = "",
}: MenuProps) => {
  return (
    <button
      className={`border-[1px] border-[#9C9C9C] border-solid rounded-full py-[15px]  w-[24%]  text-[#9C9C9C] m-[5px]
        ${disabled && "cursor-not-allowed"}
         ${className} `}
      onClick={onClick}
      disabled={disabled}
      value={title}
    >
      {title}
    </button>
  );
};
