// Models
import ProductBrandModel from './models/brands/product-brand.model'
import ProductTagModel from './models/tags/product-tag.model'
import ProductOptionModel from './models/options/product-option.model'

// Routers
import ProductBrandRouter from './router/brands/brands'
import ProductTagRouter from './router/tags/tags'
import ProductOptionRouter from './router/options/options'

export {
  ProductBrandModel,
  ProductOptionModel,
  ProductTagModel,
  
  // Router
  ProductBrandRouter,
  ProductTagRouter,
  ProductOptionRouter,
}
