import { ImageWidget } from 'apps/admin/widgets.ts';

interface PostProps {
  /**
   * @description The title of the post
   * @format rich-text
   */
  title: string;
  /**
   * @description The image for the post
   */
  image: ImageWidget;
  /**
   * @description The URL for the post
   */
  href: string;
}

interface Props {
  /**
   * @description The title for the recent posts section
   * @format rich-text
   */
  sectionTitle?: string;
  /**
   * @description The posts to display
   */
  posts: PostProps[];
}

export default function PostagensRecentes({
  sectionTitle = "Postagens Recentes",
  posts = [
    {
      title: "Post 1",
      image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      href: "#"
    },
    {
      title: "Post 2",
      image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      href: "#"
    },
    {
      title: "Post 3",
      image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      href: "#"
    },
    {
      title: "Post 4",
      image: "https://saveincloud.com/wp-content/uploads/2024/10/download-postgresql-9-6-150x150.png",
      href: "#"
    }
  ]
}: Props) {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: sectionTitle }} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4"> {/* Grid responsivo */}
        {posts.map((post, index) => (
          <a key={index} href={post.href} className="flex flex-col group bg-white rounded-lg shadow-md overflow-hidden"> {/* Ajustes no estilo do card */}
            <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105" // Mantém a imagem responsiva
              />
            </div>
            <h3
              className="text-lg font-semibold group-hover:underline p-4" // Adiciona padding para melhor espaçamento
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
          </a>
        ))}
      </div>
    </section>

  );
}