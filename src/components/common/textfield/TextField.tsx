import React, { forwardRef } from "react";
import { textfieldStringMapper } from "utils/mapper/string";

interface TextInputInterface {
  value: string;
  placeholder: string;
  onChange?: (value: string) => void;
  className?: string;
  isReadOnly?: boolean;
}

// NOTE : read only면 div내부 html로 노출
export const TextField = forwardRef((props: TextInputInterface, ref) => {
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
      className={`flex items-start border border-[#9C9C9C] border-solid rounded-sm relative ${className}`}
    >
      {isReadOnly ? (
        <div
          dangerouslySetInnerHTML={{ __html: textfieldStringMapper(value) }}
          className={
            "text-[17px] leading-[26px] break-words whitespace-pre-wrap h-full bg-transparent overflow-auto py-[10px] px-[17px]"
          }
        />
      ) : (
        <textarea
          ref={ref as any}
          className={`bg-transparent w-full h-full py-[10px] px-[17px] leading-[26px] text-[17px] ${
            isReadOnly && "cursor-not-allowed caret-transparent"
          }`}
          onChange={handleFormChange}
          placeholder={placeholder}
          value={value}
        />
      )}
    </div>
  );
});
