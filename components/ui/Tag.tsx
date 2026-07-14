interface TagProps {
  text: string;
}

export const Tag = ({ text }: TagProps) => {
  return (
    <span className="inline-flex min-h-6 w-fit max-w-full items-center rounded-full bg-amber-100 px-3 py-1 text-center text-xs leading-snug text-amber-900">
      {text}
    </span>
  );
};
