interface TagProps {
  text: string;
}

export const Tag = ({ text }: TagProps) => {
  return (
    <span className="inline-flex h-6 w-fit items-center rounded-full bg-amber-100 px-3 text-xs text-amber-900">
      {text}
    </span>
  );
};
