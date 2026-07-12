interface PageShellProps {
  children: React.ReactNode;
}

export const PageShell = ({ children }: PageShellProps) => {
  return <main className="w-full flex-1 bg-amber-200">{children}</main>;
};
