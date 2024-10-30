import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @title Title
   * @format rich-text
   */
  title?: string;
  /**
   * @title Image
   */
  image?: ImageWidget;
  /**
   * @title Image Alt Text
   */
  imageAlt?: string;
  /**
   * @title Category
   */
  category?: string;
  /**
   * @title Category Link
   */
  categoryLink?: string;
  /**
   * @title Content
   * @format textarea
   */
  content?: string;
  /**
   * @title Read More Text
   */
  readMoreText?: string;
  /**
   * @title Read More Link
   */
  readMoreLink?: string;
}

export default function BlogPost({
  title = "DOWNLOAD POSTGRE 9.6",
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  imageAlt = "PostgreSQL 9.6",
  category = "BANCO DE DADOS",
  categoryLink = "#",
  content = "Download PostgreSQL 9.6 O PostgreSQL 9.6, lançado em setembro de 2016, trouxe várias melhorias em desempenho e escalabilidade, incluindo consultas paralelas para indexação e suporte a consultas de janela mais avançadas. Esta versão foi descontinuada em novembro de 2021, mas é possível fazer o PostgreSQL download 9.6 abaixo:",
  readMoreText = "SAIBA MAIS",
  readMoreLink = "#"
}: Props) {
  return (
    <div className="bg-white max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 w-full lg:w-3/5">
      <img src={image} alt={imageAlt} className="w-full h-auto mb-4" />
      <a href={categoryLink} className="text-blue-600 font-semibold text-sm mb-2 inline-block">{category}</a>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
      <a href={readMoreLink} className="text-blue-600 hover:underline">{readMoreText}</a>
    </div>
  );
}
