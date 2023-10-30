import React, { forwardRef } from "react";

interface TextInputInterface {
  value: string;
  placeholder: string;
  onChange?: (value: string) => void;
  className?: string;
  isReadOnly?: boolean;
}

export const TextInput = forwardRef((props: TextInputInterface, ref) => {
  const { value, placeholder, onChange, className, isReadOnly = false } = props;
  // NOTE : read only일 경우 분기처리
  const handleFormChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
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
      className={`w-full bg-[#EFEFEF] flex items-center rounded-sm  ${className}`}
    >
      <input
        className={`bg-transparent w-full py-[10px] px-[17px] ${
          isReadOnly && "cursor-not-allowed caret-transparent"
        }`}
        onChange={handleFormChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
});
