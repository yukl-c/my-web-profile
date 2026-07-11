interface CloseButtonProps {
  onClick: () => void;
}

export const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-sm border border-black bg-amber-400 px-3 py-1 text-sm font-medium text-amber-950 transition-colors hover:bg-amber-200"
    >
      Close
    </button>
  );
};
