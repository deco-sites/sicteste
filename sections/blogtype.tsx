import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  image?: ImageWidget;
  /**
   * @format rich-text
   */
  buttonText?: string;
}

export default function BlogHeader({
  title = "COMO ACESSAR E GERENCIAR O POSTGRESQL USANDO O PGADMIN",
  image = "https://saveincloud.com/wp-content/uploads/2024/10/pgadmin.png",
  buttonText = "Pesquisar",
}: Props) {
  return (
    <div className="w-full bg-white p-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="basis-3/4 flex-grow flex items-center justify-center">
          <img src={image} alt="PostgreSQL" className="w-7/10 h-auto rounded-lg" />
        </div>
        <div className="basis-1/4 flex-grow flex flex-col items-center">
          <h2 className="text-xl font-bold mb-3">Pesquisar</h2>
          <div className="w-full max-w-xs">
            <input type="text" placeholder="Pesquisar..." className="input input-bordered w-full mb-2" />
            <button className="btn btn-primary w-full">{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
}


