import { HTMLWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @title Blog Title
   * @description Enter the title for your blog
   * @format rich-text
   */
  blogTitle?: HTMLWidget;
  /**
   * @title Search Button Text
   * @description Text to display on the search button
   */
  searchButtonText?: string;
  /**
   * @title Search Placeholder
   * @description Placeholder text for the search input
   */
  searchPlaceholder?: string;
  /**
   * @title Title Color
   * @description Choose the color for the blog title
   * @format color-input
   */
  titleColor?: string;
  /**
   * @title Button Background Color
   * @description Choose the background color for the search button
   * @format color-input
   */
  buttonBgColor?: string;
  /**
   * @title Button Text Color
   * @description Choose the text color for the search button
   * @format color-input
   */
  buttonTextColor?: string;
}

export default function BlogTitleAndSearch({
  blogTitle = "Blog SaveinCloud",
  searchButtonText = "Pesquisar",
  searchPlaceholder = "Pesquisar...",
  titleColor = "#000000",
  buttonBgColor = "#3b82f6",
  buttonTextColor = "#ffffff"
}: Props) {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <h1
          className="text-2xl md:text-4xl font-bold mr-4"
          style={{ color: titleColor }}
          dangerouslySetInnerHTML={{ __html: blogTitle }}
        />
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            style={{ maxWidth: '200px' }} // Ajuste responsivo da largura
            aria-label="Search"
          />
          <button
            type="button"
            className="px-4 py-2 rounded-lg transition duration-150 ease-in-out"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
            aria-label={searchButtonText}
          >
            {searchButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}
