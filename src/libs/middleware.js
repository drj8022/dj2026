// import { cacheLife } from "next/cache"
// import { API_URL } from "./constants"
// // import { BACKEND_CMS } from "./constants"

// export const getComponentType = component => {
//   return component.__component.split('.')[1].toLowerCase().replace('-', '')
// }

// export const getPageDetail = async (path) => {
//   'use cache'
//   cacheLife('max')
//   const url = [
//     `${API_URL}/pages`,
//     `?filters[path][$eq]=${path}`,
//     `&populate[main][on][component.carousel][populate][ctas][populate]=*`,
//     `&populate[main][on][component.carousel][populate][categories][populate]=*`,
//     `&populate[main][on][component.carousel][populate][title][populate]=*`,
//     `&populate[main][on][component.hero][populate][images][populate]=*`,
//     `&populate[main][on][component.hero][populate][ctas][populate]=*`,
//     `&populate[main][on][component.link-list][populate]=*`,
//     `&populate[main][on][component.teaser][populate][title][populate]=*`,
//     `&populate[main][on][component.teaser][populate][images][populate]=*`,
//     `&populate[main][on][component.teaser][populate][ctas][populate]=*`,
//     `&populate[main][on][custom.search][populate]=*`,
//     `&populate[main][on][custom.tip-list][populate][title][populate]=*`,
//     `&populate[main][on][custom.tip-list][populate][tips][populate][tip_type][populate]=*`,
//     `&populate[main][on][custom.tip-list][populate][tips][populate][ingredient][populate][image][populate]=*`,
//     `&populate[main][on][custom.tool][populate]=*`
//   ]
//   const res = await fetch(url.join(''))
//   return res.json()
// }

// export const getCategoryDetail = async (slug) => {
//   'use cache'
//   cacheLife('max')
//   const url = [
//     `${API_URL}/categories`,
//     `?filters[slug][$eq]=${slug}`,
//     `&populate[group][populate][categories][populate][image][populate]=*`,
//     `&populate[image][populate]=*`,
//     `&populate[ingredients][populate][image][populate]=*`,
//     `&populate[ingredients][populate][tips][populate][0]=tip_type`,
//     `&populate[ingredients][populate][tips][populate][1]=tip_behavior`,
//     `&populate[ingredients][populate][tips][populate][2]=tip_motivator`,
//     `&populate[tips][populate]=*`
//   ]
//   const res = await fetch(url.join(''))
//   return res.json()
// }

// export const getAllPages = async () => {
//   'use cache'
//   cacheLife('max')
//   const res = await fetch(`${API_URL}/pages?populate=seo`)
//   return res.json()
// }

// export const getAllCategories = async () => {
//   'use cache'
//   cacheLife('max')
//   const res = await fetch(`${API_URL}/categories?populate=seo`)
//   return res.json()
// }

// export const getAllIngredients = async () => {
//   'use cache'
//   cacheLife('max')
//   const res = await fetch(`${API_URL}/ingredients?populate=*`)
//   return res.json()
// }
