import movieReview from '../assets/projects/movie-review.png'
import foodEcommerce from '../assets/projects/food-ecommerce.png'
import gamesMarketplace from '../assets/projects/games-marketplace.png'
import schoolManagement from '../assets/projects/school-management.png'
import aiAssistant from '../assets/projects/ai-assistant.png'
import jobListings from '../assets/projects/job-listing.png'

export const projects = [
  {
    id: '01',
    slug: 'movie-review-app',
    title: 'Movie Review App',
    label: 'Product interface',
    year: '2024',
    description:
      'A movie discovery and review application where users can search for films, filter results, and read and give ratings. It pulls live data from the TMDB REST API and has a clean, responsive interface with custom UI components and smooth animations.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'TMDB API'],
    liveUrl: 'https://realwale.vercel.app/',
    githubUrl: 'https://github.com/am-adewale/Realwale',
    image: movieReview,
    alt: 'Placeholder preview for the Movie Review App interface',
    overview:
      'A discovery-first movie product that lets people search, filter, and rate films without noise. Live TMDB data sits behind a custom interface designed for scanning, not clutter.',
    problem:
      'Most movie browsers either feel dense or hide ratings behind extra steps. Users needed a fast way to find a title, understand reception, and leave their own score on any device.',
    solution:
      'I built a responsive frontend that talks directly to the TMDB REST API, with custom components for search, filters, and ratings. Motion is used only where it helps orientation list reveals, image hover, and modal detail.',
    features: [
      'Live search against TMDB with clear empty and loading states',
      'Filterable results for quicker browsing',
      'Read and submit ratings from a focused detail view',
      'Custom UI components shared across listing and detail',
      'Responsive layout with restrained animation',
    ],
    results: [
      'A complete discovery-to-rating loop on a single interface',
      'API-backed content that stays current without a custom CMS',
      'A component structure that can be extended into React without a rewrite',
    ],
  },
  {
    id: '02',
    slug: 'food-ecommerce',
    title: 'Food E-Commerce Platform',
    label: 'Full-stack store',
    year: '2024',
    description:
      'A full-stack online food store with a product catalogue, shopping cart, secure checkout, and user authentication. I designed the MySQL database for inventory, orders, and user sessions, and improved page performance by 15% on Lighthouse through lazy loading, minification, and asset optimisation.',
    technologies: ['PHP', 'JavaScript', 'MySQL', 'HTML5', 'CSS3'],
    liveUrl: '#',
    githubUrl: '#',
    image: foodEcommerce,
    alt: 'Placeholder preview for the Food E-Commerce Platform',
    overview:
      'An online food store covering catalogue, cart, checkout, and accounts — with a MySQL schema built for inventory, orders, and sessions.',
    problem:
      'The client needed a trustworthy storefront for food products, not a generic template. Inventory, orders, and sessions had to stay consistent, and the storefront had to feel quick on mobile networks.',
    solution:
      'I designed the relational data model, implemented authentication and checkout in PHP, and tightened the frontend with lazy loading, minification, and asset optimisation. The interface stays product-first: large imagery, clear prices, and an unobstructed cart path.',
    features: [
      'Product catalogue with structured inventory data',
      'Shopping cart and secure checkout',
      'User authentication and session handling',
      'MySQL schema for products, orders, and users',
      'Performance work: lazy loading, minification, asset optimisation',
    ],
    results: [
      'About 15% better Lighthouse page performance after optimisation',
      'A store flow that holds together from browse to paid order',
      'A database designed to scale with catalogue and order volume',
    ],
  },
  {
    id: '03',
    slug: 'games-marketplace',
    title: 'Games Marketplace Platform',
    label: 'Marketplace',
    year: '2025',
    description:
      'A platform where users can buy and sell video games, with listings, search and filtering, user accounts, and a checkout flow. Built to give buyers and sellers a simple, trustworthy way to trade.',
    technologies: ['Stack forthcoming'],
    liveUrl: '#',
    githubUrl: '#',
    image: gamesMarketplace,
    alt: 'Placeholder preview for the Games Marketplace Platform',
    overview:
      'A two-sided marketplace for buying and selling video games, organised around listings, search, accounts, and checkout.',
    problem:
      'Casual game trading is messy: listings are hard to scan, filters are weak, and checkout often feels bolted on. Buyers and sellers needed one place that felt simple and trustworthy.',
    solution:
      'I structured the product around listing quality, search, and a checkout path that both sides can follow. The visual system stays editorial — large covers, quiet metadata, and a clear account area.',
    features: [
      'Buyer and seller listings',
      'Search and filtering',
      'User accounts',
      'Checkout flow designed for trust',
    ],
    results: [
      'A complete trade path from listing to checkout',
      'Interface patterns that keep catalogue pages easy to scan',
      'Stack details will be added as the public build is documented',
    ],
  },
  {
    id: '04',
    slug: 'school-management',
    title: 'School Management Platform',
    label: 'Operations product',
    year: '2025',
    description:
      'A system for managing school operations, including students, teachers, classes, results, and attendance. Designed to replace manual records with one organised, easy-to-use dashboard.',
    technologies: ['Stack forthcoming'],
    liveUrl: '#',
    githubUrl: '#',
    image: schoolManagement,
    alt: 'Placeholder preview for the School Management Platform',
    overview:
      'An operations dashboard that brings students, teachers, classes, results, and attendance into one organised system.',
    problem:
      'Schools were tracking people and results across paper and disconnected files. Staff needed a single, calm dashboard instead of another dense admin tool.',
    solution:
      'I designed the product around daily tasks: find a student, record attendance, review a class, publish a result. Information architecture comes first; decoration stays out of the way.',
    features: [
      'Student and teacher records',
      'Class organisation',
      'Results management',
      'Attendance tracking',
      'A dashboard meant to replace manual records',
    ],
    results: [
      'One place for the records that used to live in separate files',
      'A UI that favours clarity over dense tables',
      'Stack details will be added as the public build is documented',
    ],
  },
  {
    id: '05',
    slug: 'ai-customer-support',
    title: 'AI Customer Support Assistant',
    label: 'Conversational product',
    year: '2025',
    description:
      'A conversational AI system that answers customer questions and handles their needs for a company, so that common requests are resolved quickly without a human agent.',
    technologies: ['AI stack forthcoming'],
    liveUrl: '#',
    githubUrl: '#',
    image: aiAssistant,
    alt: 'Placeholder preview for the AI Customer Support Assistant',
    aiCapabilities: [
      'Conversational answers to common customer questions',
      'Intent handling for typical support requests',
      'Fast resolution without a human agent on routine work',
    ],
    aiService: 'AI service / API to be confirmed',
    overview:
      'A support assistant that takes the first line of customer questions so routine requests are resolved without waiting for an agent.',
    problem:
      'Support teams spend time on repeated questions. Customers wait. The product needed to handle common needs clearly, and stay honest when a human should take over.',
    solution:
      'I framed the assistant as a product interface, not a novelty chat widget: readable transcripts, obvious actions, and a visual system that matches a serious company brand. Capabilities, service, and stack are documented as placeholders until the production integration is published.',
    features: [
      'Conversational handling of common requests',
      'A focused chat interface for customers',
      'Room to route complex cases to a human agent',
    ],
    results: [
      'A path to faster resolution on routine questions',
      'An interface that can sit inside an existing company site',
      'AI service, capabilities, and stack to be confirmed in the public case study',
    ],
  },
  {
    id: '06',
    slug: 'job-listings',
    title: 'Job Listings Website',
    label: 'Frontend UI',
    year: '2023',
    description:
      'A responsive frontend interface for a job-offering business, with a job listings page, search and filters, and an application section. Focused on a clear layout, easy navigation, and a mobile-first design.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
    image: jobListings,
    alt: 'Placeholder preview for the Job Listings Website',
    overview:
      'A mobile-first frontend for a job-offering business: listings, search, filters, and an application section with a clear reading path.',
    problem:
      'Job boards often bury the role under chrome. This business needed a frontend that made listings easy to scan and apply to, especially on a phone.',
    solution:
      'I designed a single-purpose interface: listing cards with hierarchy, search and filters that stay out of the way, and an application section that does not feel like a form maze.',
    features: [
      'Job listings page with a clear visual hierarchy',
      'Search and filters',
      'Application section',
      'Mobile-first layout and navigation',
    ],
    results: [
      'A frontend that can sit in front of any listings API later',
      'Navigation that stays obvious on small screens',
      'A layout built for reading roles, not decorating them',
    ],
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}
