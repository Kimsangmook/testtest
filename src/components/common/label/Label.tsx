interface LabelInteface {
  title: string;
  leftIcon?: string;
  rightIcon?: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

export const Label = (props: LabelInteface) => {
  const { title, leftIcon, rightIcon, onClick, disabled, className } = props;
  const onClickLabel = () => {
    !disabled && onClick();
  };
  return (
    <div
      className={`flex items-center ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
      onClick={onClickLabel}
    >
      {leftIcon && <img src={leftIcon} className={"mr-[6px]"} />}
      <p className={"text-gray text-[14px]"}>{title}</p>
    </div>
  );
};
