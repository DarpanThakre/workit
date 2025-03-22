import React from 'react';
import TjHero from './TjHero';
import TjFeaturedProducts from './TjFeaturedProducts';
import TjCategories from './TjCategories';
import TjTestimonials from './TjTestimonials';
import TjNewsletterSignup from './TjNewsletterSignup';
import TjFooter from './TjFooter';



function TjHomePage() {
  // Sample product data
  const products = [
    { name: "Product 1", description: "This is a great product.", price: 29.99, image: "https://via.placeholder.com/150" },
    { name: "Product 2", description: "This product is awesome.", price: 39.99, image: "https://via.placeholder.com/150" },
    { name: "Product 3", description: "You'll love this product.", price: 19.99, image: "https://via.placeholder.com/150" },
    { name: "Product 4", description: "Highly recommended product.", price: 49.99, image: "https://via.placeholder.com/150" },
  ];

  const categories = ["Electronics", "Fashion", "Home & Kitchen", "Sports & Outdoors"];

  return (
    <div className="pt-16">
       <TjHero/>
      <TjFeaturedProducts products={products} />
      <TjCategories categories={categories} />
      <TjTestimonials/>
      <TjNewsletterSignup />
      <TjFooter />
    </div>
  );
}

export default TjHomePage;
