import arts from "../Images/11.jpg"

import { Link } from "react-router-dom";
const products = [
  {
    id: 1,
    name: "Arts",
    href: "#",

    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Science",
    href: "#",

    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Commerce",
    href: "#",

    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "It",
    href: "#",

    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
 
  // More products...
];

export default function Example() {
  return (
    <div className="bg-white">




      <div className="max-w-2xl mx-auto  py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    
        <h2 className="text-2xl m-2  font-bold text-gray-900">Category</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} to={product.href} className="group no-underline">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm  no-underline text-gray-700">{product.name}</h3>
             
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
