import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @title Logo
   * @description Upload the logo image
   */
  logo?: ImageWidget;
  /**
   * @title Home Link
   */
  homeLink?: string;
  /**
   * @title Cloud Solutions Link
   */
  cloudSolutionsLink?: string;
  /**
   * @title Pricing Link
   */
  pricingLink?: string;
  /**
   * @title Data Centers Link
   */
  dataCentersLink?: string;
  /**
   * @title Blog Link
   */
  blogLink?: string;
  /**
   * @title Contact Link
   */
  contactLink?: string;
  /**
   * @title Login Button Text
   */
  loginText?: string;
  /**
   * @title CTA Button Text
   */
  ctaText?: string;
  /**
   * @title CTA Button Link
   */
  ctaLink?: string;
}

export default function Header({
  logo = "https://saveincloud.com/wp-content/uploads/2020/04/saveincloud-jelastic-cloud-escalavel.png",
  homeLink = "#",
  cloudSolutionsLink = "#",
  pricingLink = "#",
  dataCentersLink = "#",
  blogLink = "#",
  contactLink = "#",
  loginText = "LOGIN",
  ctaText = "TESTE 14 DIAS GRÁTIS",
  ctaLink = "#"
}: Props) {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href={homeLink} className="flex items-center">
          <img src={logo} alt="SaveInCloud" className="h-8" />
        </a>
        <nav className="hidden md:flex space-x-6">
          <a href={homeLink} className="text-gray-600 hover:text-gray-900">Home</a>
          <a href={cloudSolutionsLink} className="text-gray-600 hover:text-gray-900">Soluções Cloud</a>
          <a href={pricingLink} className="text-gray-600 hover:text-gray-900">Preço</a>
          <a href={dataCentersLink} className="text-gray-600 hover:text-gray-900">DataCenters</a>
          <a href={blogLink} className="text-gray-600 hover:text-gray-900">Blog</a>
          <a href={contactLink} className="text-gray-600 hover:text-gray-900">Contato</a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-2">
            <button className="text-gray-600 hover:text-gray-900">🇪🇸</button>
            <button className="text-gray-600 hover:text-gray-900">🇧🇷</button>
          </div>
          <button className="hidden md:block px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
            {loginText}
          </button>
          <a
            href={ctaLink}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </header>
  );
}