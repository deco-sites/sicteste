import { ImageWidget } from "apps/admin/widgets.ts";

interface BlogProps {
  /**
   * @title Blog Title
   * @format rich-text
   */
  blogTitle?: string;

  /**
   * @title Search Placeholder
   */
  searchPlaceholder?: string;

  /**
   * @title Search Button Text
   */
  searchButtonText?: string;

  /**
   * @title Featured Post Image
   * @description Upload the featured post image
   */
  featuredPostImage?: ImageWidget;

  /**
   * @title Featured Post Title
   * @format rich-text
   */
  featuredPostTitle?: string;

  /**
   * @title Featured Post Category
   */
  featuredPostCategory?: string;

  /**
   * @title Featured Post Description
   * @format textarea
   */
  featuredPostDescription?: string;

  /**
   * @title Read More Text
   */
  readMoreText?: string;

  /**
   * @title Recent Posts Title
   */
  recentPostsTitle?: string;

  /**
   * @title Recent Posts
   * @description Enter recent post titles separated by commas
   */
  recentPosts?: string;
}

export default function BlogSection({
  blogTitle = "Blog SaveinCloud",
  searchPlaceholder = "Pesquisar",
  searchButtonText = "Pesquisar",
  featuredPostImage = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  featuredPostTitle = "DOWNLOAD POSTGRE 9.6",
  featuredPostCategory = "BANCO DE DADOS",
  featuredPostDescription = "Download PostgreSQL 9.6 O PostgreSQL 9.6, lançado em setembro de 2016, trouxe várias melhorias em desempenho e escalabilidade, incluindo consultas paralelas para indexação e suporte a consultas de janela mais avançadas. Esta versão foi descontinuada em novembro de 2021, mas é possível fazer o PostgreSQL download 9.6 abaixo: FAZER DOWNLOAD",
  readMoreText = "SAIBA MAIS",
  recentPostsTitle = "Postagens recentes",
  recentPosts = "Download PostgreSQL 9.6,Download PostgreSQL 9.5,Download PostgreSQL 9.4,Download PostgreSQL 9.3"
}: BlogProps) {
  const recentPostsList = recentPosts.split(",");

  return (
    <div className="bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">{blogTitle}</h1>
          <div className="flex">
            <input type="text" placeholder={searchPlaceholder} className="px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">{searchButtonText}</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={featuredPostImage} alt="Featured Post" className="w-full h-64 object-cover" />
              <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">{featuredPostCategory}</span>
                <h2 className="text-2xl font-bold mb-2">{featuredPostTitle}</h2>
                <p className="text-gray-600 mb-4">{featuredPostDescription}</p>
                <a href="#" className="text-blue-600 hover:underline">{readMoreText} →</a>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">{recentPostsTitle}</h3>
              <div className="grid grid-cols-2 gap-4">
                {recentPostsList.map((post, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img src={featuredPostImage} alt="Post thumbnail" className="w-full h-24 object-cover rounded mb-2" />
                    <a href="#" className="text-sm text-gray-800 hover:text-blue-600 text-center">{post}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}