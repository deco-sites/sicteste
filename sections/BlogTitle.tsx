interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format color-input
   */
  textColor?: string;
}

export default function BlogTitle({
  title = "Blog SaveinCloud",
  textColor = "#0f172a",
}: Props) {
  return (
    <div className="w-full py-8">
      <div className="container mx-auto px-4 flex items-center">
        <h1 className="text-4xl font-bold text-left" style={{ color: textColor }}>{title}</h1>
      </div>
    </div>
  );
}
