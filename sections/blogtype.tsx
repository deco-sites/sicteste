import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  title?: string;
  image?: ImageWidget;
  imageAlt?: string;
  postLink?: string;
  category?: string;
  categoryLink?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  buttonText?: string;
}

export default function BlogPost({
  title = "Download PostgreSQL 9.6",
  image = "https://saveincloud.com/wp-content/uploads/2024/10/download-postgresql-9-6.png",
  imageAlt = "Download PostgreSQL 9.6",
  postLink = "https://saveincloud.com/pt/blog/banco-de-dados/download-postgresql-9-6/",
  category = "BANCO DE DADOS",
  categoryLink = "https://saveincloud.com/pt/blog/category/banco-de-dados/",
  buttonColor = "#0091FF",
  buttonTextColor = "#FFFFFF",
  buttonText = "SAIBA MAIS",
}: Props) {
  return (
    <div className="qloud-blog-box mx-auto bg-white shadow-md rounded-lg overflow-hidden w-1/2">
      <div className="qloud-blog-image clearfix relative">
        <a className="post-thumbnail" href={postLink} aria-hidden="true">
          <img
            fetchPriority="high"
            width="790"
            height="200"
            src={image}
            className="w-full h-auto"
            alt={imageAlt}
            decoding="async"
          />
        </a>
      </div>
      <div className="qloud-blog-detail p-4 relative">
        <a
          href={categoryLink}
          className="px-4 py-2 rounded-md font-bold text-sm uppercase" // Margem inferior já aplicada aqui
          style={{
            backgroundColor: buttonColor,
            color: buttonTextColor,
          }}
        >
          {category}
        </a>
        <div className="blog-title mb-2 mt-4">
          <a href={postLink} rel="bookmark">
            <h4 className="text-xl font-bold">{title}</h4>
          </a>
        </div>

        <div className="blog-content mb-4">
          <p>
            Download PostgreSQL 9.6 O PostgreSQL 9.6, lançado em setembro de 2016, trouxe várias melhorias em desempenho e escalabilidade, incluindo consultas paralelas para indexação e suporte a consultas de janela mais avançadas. Esta versão foi descontinuada em novembro de 2021, mas é possível fazer o PostgreSQL download 9.6 abaixo: FAZER DOWNLOAD
          </p>
        </div>
        <div className="blog-footer">
          <div className="blog-button">
            <a
              className="iq-button-animated has-icon btn-icon-right linked-btn px-4 py-2 rounded-md transition inline-block w-auto"
              href={postLink}
              style={{
                backgroundColor: buttonColor,
                color: buttonTextColor,
              }}
            >
              <span className="btn_text-main">{buttonText}</span>
              <span className="btn-icon ml-2 inline-block align-middle">
                <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" viewBox="0 0 10 10">
                  <line fill="none" stroke="currentColor" strokeWidth="1.5" x1="6.052" y1="3.933" x2="0.953" y2="9.031"></line>
                  <line fill="none" stroke="currentColor" strokeWidth="1.5" x1="2.312" y1="1.241" x2="9.313" y2="1.241"></line>
                  <line fill="none" stroke="currentColor" strokeWidth="1.5" x1="8.609" y1="0.501" x2="8.609" y2="7.5"></line>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
