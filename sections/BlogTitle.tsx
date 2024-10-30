interface Props {
  title?: string;
  textColor?: string;
}

export default function BlogTitle({
  title = "Blog SaveinCloud",
  textColor = "#0f172a",
}: Props) {
  return (
    <div className="container w-full">
      <div>
        <h1 className="text-4xl font-bold text-left" style={{ color: textColor }}>
          {title}
        </h1>
      </div>
    </div>
  );
}
