import React, { forwardRef } from "react";

interface TextInputInterface {
  value: string;
  placeholder: string;
  onChange?: (value: string) => void;
  className?: string;
  isReadOnly?: boolean;
}

export const TextFieldHalf = forwardRef((props: TextInputInterface, ref) => {
  const { value, placeholder, onChange, className, isReadOnly } = props;
  // NOTE : read only일 경우 분기처리
  const handleFormChange = React.useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (isReadOnly) {
        return;
      }
      const { value } = e.target;
      onChange && onChange(value);
    },
    [onChange]
  );

  return (
    <div
      className={`flex items-start border border-[#9C9C9C] border-solid rounded-sm ${className}`}
    >
      <textarea
        ref={ref as any}
        className={`bg-transparent w-[45%] h-[420px] py-[10px] px-[17px] leading-[26px] text-[17px] ${
          isReadOnly && "cursor-not-allowed caret-transparent"
        }`}
        onChange={handleFormChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
});
