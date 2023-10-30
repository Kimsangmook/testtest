interface TitleInterface {
  title: string;
  withIcon?: boolean;
  iconSrc?: string;
  className?: string;
  fontSize?: number;
}

export const Title = ({
  title,
  withIcon,
  iconSrc,
  fontSize,
  className = "",
}: TitleInterface) => {
  return (
    <div className={`flex items-center ${className}`}>
      {withIcon && (
        <div
          className={
            "bg-orange w-[26px] h-[26px] rounded-lg flex justify-center items-center mr-[8px]"
          }
        >
          <img src={iconSrc} className={"w-[18px]"} />
        </div>
      )}
      <p className={fontSize ? `text-[${fontSize}px]` : `text-[26px]`}>
        {title}
      </p>
    </div>
  );
};
