interface TitleProps {
  text: string;
}

export const Title = ({ text }: TitleProps) => {
  return (
    <div className="flex w-full items-center justify-center bg-amber-50 py-4">
      <h1 className="mx-auto max-w-[80%] text-center text-2xl font-bold text-black md:text-3xl lg:text-4xl">
        {text}
      </h1>
    </div>
  );
};
