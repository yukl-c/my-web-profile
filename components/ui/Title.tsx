interface TitleProps {
  text: string;
}

export const Title = ({ text }: TitleProps) => {
  return (
    <div className="mt-[5vh] min-h-12 w-full bg-amber-50 px-4 py-4 md:px-6">
      <h1 className="mx-auto max-w-[80%] text-center text-2xl font-bold text-black md:text-3xl lg:text-4xl">
        {text}
      </h1>
    </div>
  );
};
