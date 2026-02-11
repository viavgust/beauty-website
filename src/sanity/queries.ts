import { groq } from 'next-sanity'

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  title,
  description,
  email,
  phone,
  address,
  instagram,
  telegram,
  heroImage,
  heroText,
  aboutText,
  aboutImage
}`

export const portfolioQuery = groq`*[_type == "portfolioItem"] | order(date desc){
  _id,
  title,
  image,
  category,
  description,
  date
}`

export const servicesQuery = groq`*[_type == "service"] | order(order asc){
  _id,
  title,
  description,
  price,
  duration
}`

export const coursesQuery = groq`*[_type == "course" && status != "draft"]{
  _id,
  title,
  description,
  image,
  price,
  duration,
  status
}`

export const testimonialsQuery = groq`*[_type == "testimonial"]{
  _id,
  text,
  name,
  source
}`
