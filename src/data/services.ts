export interface Service {
  title: string
  description: string
  features: string[]
  price: string
  included: string[]
  notIncluded: string[]
  imagePosition: 'left' | 'right'
  imageAlt: string
  imageSrc: string  
}

export const services: Service[] = [{
    title: "WordPress Website",
    description: "Fast-track your online presence with our streamlined website creation process. Perfect for entrepreneurs who need to launch quickly without compromising on quality.",
    features: [
      "Custom design and development",
      "Essential pages setup",
      "Basic SEO implementation",
    ],
    price: "From $2,500",
    included: [
      "Custom design and development",
      "Up to 5 pages",
      "Basic branding application",
      "Contact form",
      "Mobile responsive",
      "Basic SEO",
      "2 rounds of revisions",
      "7 days support"
    ],
    notIncluded: [
      "E-commerce features",
      "Advanced integrations",
      "Multiple revisions",
      "Content creation",
      "Photography",
      "Logo design",
      "Extended support",
      "Hosting purchase",
      "Domain purchase"
    ],
    imagePosition: "left",
    imageAlt: "Fast Website Development",
    imageSrc: "/images/services/therosessom-website-development-2.png"  
  },
  {
    title: "Squarespace Website",
    description: "A complete Squarespace website that elevates your business and connects with your ideal customers. Perfect for service-based businesses and creatives who want a polished online presence.",
    features: [
      "Custom design and development",
      "Mobile responsive design",
      "SEO optimization",
      "Content management training",
      "2 weeks delivery"
    ],
    price: "From $3,500",
    included: [
      "Custom website design",
      "Up to 7 pages",
      "Mobile optimization",
      "Basic SEO setup",
      "Contact form integration",
      "Social media integration",
      "2 rounds of revisions",
      "30 days support"
    ],
    notIncluded: [
      "E-commerce functionality",
      "Blog setup",
      "Advanced animations",
      "Third-party integrations",
      "Copywriting services",
      "Logo design",
      "Photography",
      "Ongoing maintenance",
      "Domain purchase",
      "Squarespace subscription"
    ],
    imagePosition: "right",
    imageAlt: "Squarespace Website Design",
    imageSrc: "/images/services/therosessom-website-development-1.png"  
  },
    {
    title: "Shopify Website",
    description: "A beautiful Shopify website designed to convert visitors into customers. Perfect for product-based businesses ready to scale their online sales.",
    features: [
      "Custom Shopify theme design",
      "Product page optimization",
      "Shopping cart integration",
      "Payment gateway setup",
      "3 weeks delivery"
    ],
    price: "From $4,500",
    included: [
      "Custom Shopify theme",
      "Product catalog setup",
      "Payment gateway integration",
      "Shipping configuration",
      "Inventory management",
      "Customer accounts",
      "Mobile optimization",
      "Basic SEO setup",
      "3 rounds of revisions"
    ],
    notIncluded: [
      "Product photography",
      "Product descriptions",
      "Advanced apps/plugins",
      "Multi-language setup",
      "Advanced analytics",
      "Email marketing setup",
      "Social media advertising",
      "Ongoing maintenance",
      "Domain purchase",
      "Shopify subscription"
    ],
    imagePosition: "left",
    imageAlt: "Shopify E-commerce Design",
    imageSrc: "/images/services/therosessom-website-development-3.png"  
  },
  {
    title: "Perfect Duo",
    description: "The ultimate package combining a stunning website with comprehensive branding. Perfect for new businesses or those ready for a complete brand refresh.",
    features: [
      "Complete brand identity design",
      "Logo and visual assets",
      "Website design and development",
      "Brand guidelines document",
      "4 weeks delivery"
    ],
    price: "From $6,500",
    included: [
      "Complete brand identity",
      "Logo design (3 concepts)",
      "Color palette & typography",
      "Brand guidelines",
      "Custom website design",
      "Up to 8 pages",
      "Business card design",
      "Social media templates",
      "Unlimited revisions",
      "60 days support"
    ],
    notIncluded: [
      "E-commerce functionality",
      "Advanced integrations",
      "Copywriting services",
      "Photography services",
      "Printing services",
      "Social media management",
      "Marketing strategy",
      "Ongoing maintenance",
      "Hosting purchase",
      "Domain purchase"
    ],
    imagePosition: "right",
    imageAlt: "Branding and Website Package",
    imageSrc: "/images/services/therosessom-website-development-4.png" 
  }
]