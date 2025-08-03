
import React from 'react';
import type { NavLink, Service, Equipment, Product, Project, Testimonial } from './types';

// SVG Icons
const SparePartIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
  </svg>
);
const ExcavatorIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10m-3.657 8.314a8.001 8.001 0 0111.314 0" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 110-18 9 9 0 010 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18V6m6 6H6" />
  </svg>
);
const DemolitionIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
    </svg>
);
const CivilEngIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
    </svg>
);
const ConstructionIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4 2 2 0 000-4zm0 8v2m0-2a2 2 0 100 4 2 2 0 000-4zm-4 4H4m2 0a2 2 0 104 0 2 2 0 00-4 0zm8 0h2m-2 0a2 2 0 104 0 2 2 0 00-4 0zM8 6H4m2 0a2 2 0 104 0 2 2 0 00-4 0zm8 0h2m-2 0a2 2 0 104 0 2 2 0 00-4 0z"/>
    </svg>
);
const TransportIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16h2a1 1 0 001-1V7a1 1 0 00-1-1h-2a1 1 0 00-1 1v8a1 1 0 001 1z"/>
    </svg>
);


export const NAV_LINKS: NavLink[] = [
  { name: 'Accueil', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Location', href: '#rental' },
  { name: 'Vente', href: '#sale' },
  { name: 'Projets', href: '#projects' },
  { name: 'Témoignages', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    icon: <SparePartIcon className="w-12 h-12 text-brand-yellow" />,
    title: 'Pièces de Rechange',
    description: 'Vaste stock de pièces détachées pour tous types d\'engins de BTP.',
    details: 'Nous fournissons des pièces d\'origine et adaptables de haute qualité pour garantir la longévité et la performance de vos équipements. Notre réseau nous permet de trouver rapidement la pièce qu\'il vous faut.',
  },
  {
    icon: <ExcavatorIcon className="w-12 h-12 text-brand-yellow" />,
    title: 'Terrassement & Excavation',
    description: 'Travaux de terrassement, d\'excavation et de préparation de terrain.',
    details: 'Avec des opérateurs qualifiés et un parc matériel moderne, nous réalisons tous vos projets de terrassement, des plus simples aux plus complexes, en respectant les délais et les normes de sécurité.',
  },
  {
    icon: <DemolitionIcon className="w-12 h-12 text-brand-yellow" />,
    title: 'Travaux de Démolition',
    description: 'Services de démolition contrôlée, de déconstruction et de recyclage.',
    details: 'Nous effectuons des démolitions sélectives ou complètes avec des techniques modernes qui assurent la sécurité du site et la gestion optimisée des déchets. Nous valorisons les matériaux recyclables.',
  },
  {
    icon: <CivilEngIcon className="w-12 h-12 text-brand-yellow" />,
    title: 'Génie Civil',
    description: 'Réalisation d\'ouvrages de génie civil, voiries et réseaux divers.',
    details: 'Notre expertise en génie civil couvre la construction de routes, ponts, systèmes d\'assainissement et autres infrastructures essentielles, en contribuant au développement du territoire.',
  },
  {
    icon: <ConstructionIcon className="w-12 h-12 text-brand-yellow" />,
    title: 'Construction BTP',
    description: 'Projets de construction de bâtiments industriels, commerciaux et résidentiels.',
    details: 'De la conception à la livraison, SENEGRA LOGISTIQUE gère votre projet de construction avec rigueur et professionnalisme pour un résultat conforme à vos attentes et aux plus hauts standards de qualité.',
  },
  {
    icon: <TransportIcon className="w-12 h-12 text-brand-yellow" />,
    title: 'Transport & Fret Maritime',
    description: 'Solutions logistiques complètes pour le transport national et international.',
    details: 'Nous organisons le transport de vos marchandises, équipements et matériaux par voie terrestre et maritime. Notre service de fret garantit des livraisons fiables et sécurisées partout dans le monde.',
  },
];

export const RENTAL_FLEET: Equipment[] = [
  { id: 'rental-1', name: 'Bulldozer CAT D8', category: 'Bulldozers', imageUrl: 'https://images.unsplash.com/photo-1583749718728-9a85c259a440?q=80&w=400&h=300&fit=crop' },
  { id: 'rental-2', name: 'Niveleuse 140H', category: 'Niveleuses', imageUrl: 'https://images.unsplash.com/photo-1621254247545-223405391d43?q=80&w=400&h=300&fit=crop' },
  { id: 'rental-3', name: 'Pelle Hydraulique 330D', category: 'Pelles', imageUrl: 'https://images.unsplash.com/photo-1552055568-a4a9c68004f2?q=80&w=400&h=300&fit=crop' },
  { id: 'rental-4', name: 'Tractopelle 428F', category: 'Tractopelles', imageUrl: 'https://images.unsplash.com/photo-1618059883584-2a6a3b2b2b1a?q=80&w=400&h=300&fit=crop' },
  { id: 'rental-5', name: 'Camion Benne Man', category: 'Camions', imageUrl: 'https://images.unsplash.com/photo-1593022533818-4b9975b3a32f?q=80&w=400&h=300&fit=crop' },
  { id: 'rental-6', name: 'Compacteur vibrant', category: 'Compacteurs', imageUrl: 'https://images.unsplash.com/photo-1599398055532-3a5554476388?q=80&w=400&h=300&fit=crop' },
];

export const PRODUCTS_FOR_SALE: Product[] = [
  { id: 'sale-1', name: 'Moteur Perkins', description: 'Moteur diesel reconditionné, prêt à l\'emploi.', imageUrl: 'https://images.unsplash.com/photo-1593949887362-944a99165b4f?q=80&w=400&h=300&fit=crop' },
  { id: 'sale-2', name: 'Conteneur 40 pieds', description: 'Conteneur maritime vide, état quasi neuf.', imageUrl: 'https://images.unsplash.com/photo-1617454800326-9990263f350c?q=80&w=400&h=300&fit=crop' },
  { id: 'sale-3', name: 'Lot de pièces hydrauliques', description: 'Pompes, vérins et distributeurs divers.', imageUrl: 'https://images.unsplash.com/photo-1558556403-349e5d4474a8?q=80&w=400&h=300&fit=crop' },
  { id: 'sale-4', name: 'Camion Renault Kerax 6x4', description: 'Véhicule d\'occasion, révisé et garanti.', imageUrl: 'https://images.unsplash.com/photo-1627993355535-a6e5b4f84a44?q=80&w=400&h=300&fit=crop' },
];

export const PROJECTS: Project[] = [
  { title: 'Construction entrepôt logistique', description: 'Dakar Port', imageUrl: 'https://images.unsplash.com/photo-1664403065842-2ae42719782a?q=80&w=600&h=400&fit=crop' },
  { title: 'Travaux VRD - Cité Keur Gorgui', description: 'Dakar', imageUrl: 'https://images.unsplash.com/photo-1541709939210-93454b4f5979?q=80&w=600&h=400&fit=crop' },
  { title: 'Démolition Ancien Marché', description: 'Saint-Louis', imageUrl: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=600&h=400&fit=crop' },
  { title: 'Terrassement Autoroute Ila Touba', description: 'Section Thiès', imageUrl: 'https://images.unsplash.com/photo-1605513222384-5f498f3b7d60?q=80&w=600&h=400&fit=crop' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Le professionnalisme et la ponctualité de SENEGRA LOGISTIQUE ont été un atout majeur pour notre chantier. Le matériel loué était en parfait état.",
    author: "Moussa Diop",
    company: "Chef de chantier, BTP-Construction SA",
  },
  {
    quote: "Une équipe réactive et des solutions logistiques sur mesure. Le transport de nos équipements lourds s'est déroulé sans le moindre accroc.",
    author: "Fatou Ndiaye",
    company: "Directrice des Opérations, Senegal Mines",
  },
  {
    quote: "Nous avons fait appel à eux pour des travaux de génie civil complexes. Leur expertise technique est indéniable. Nous les recommandons vivement.",
    author: "Ibrahim Fall",
    company: "Ingénieur Projet, VRD Engineering",
  },
];
