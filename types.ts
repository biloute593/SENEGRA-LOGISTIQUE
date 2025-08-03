
import React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
}

export interface Equipment {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
}

export interface RequestItem {
  id: string;
  name: string;
  type: 'rental' | 'purchase';
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}
