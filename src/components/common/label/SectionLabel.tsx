import { forwardRef } from "react";

interface SectionLabelInterface {
  title: string;
  isSelected: boolean;
  className?: string;
}

export const SectionLabel = forwardRef((props: SectionLabelInterface, ref) => {
  const { title, isSelected, className } = props;
  return (
    <div>
      <p>{title}</p>
    </div>
  );
});
