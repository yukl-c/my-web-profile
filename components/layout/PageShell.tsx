interface PageShellProps {
  children: React.ReactNode;
}

export const PageShell = ({ children }: PageShellProps) => {
  return <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 md:px-6">{children}</main>;
};
