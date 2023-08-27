/**
 * @openapi
 *  components:
 *    schemas:
 *      CreateProductFields:
 *        type: object
 *        required:
 *          - name
 *          - price
 *          - sale_price
 *          - in_sale
 *          - short_desc
 *          - tag_names
 *          - category_id
 *          - images
 *          - brand
 *          - amount_by_option
 *        properties:
 *          name:
 *            type: string
 *            default: Iphone 14 pro max
 *          price:
 *            type: number
 *            default: 14000000
 *          sale_price:
 *            type: number
 *            default: 15000000
 *          in_sale:
 *            type: boolean
 *            default: true
 *          short_desc:
 *            type: string
 *            default: "Short description of Iphone 14 pro product"
 *          tag_names:
 *            type: array
 *            default: ["some name"]
 *          category_id:
 *            type: array
 *            default: ["id of category"]
 *          images:
 *            type: array
 *            default: ["image link"]
 *          brand:
 *            type: string
 *            default: "Apple"
 *          amount_by_option:
 *            type: array
 *            default: [{amount: 20, color: "Purple", img: "image link"}]
 *      Product-detail:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *          name:
 *            type: string
 *          price:
 *            type: number
 *          sale_price:
 *            type: number
 *          brand:
 *            type: string
 *          in_sale:
 *            type: boolean
 *          delivery_time_to_reseive_point:
 *            type: string
 *          tag_names:
 *            type: array
 *          short_desc:
 *            type: string
 *          full_desc:
 *            type: string
 *          images:
 *            type: array
 *          amount_by_option:
 *            type: array
 *          sales_company:
 *            type: object
 *          rate:
 *            type: array
 *          rate_base:
 *            type: number
 *          created_at:
 *            type: string
 *          orders_count:
 *            type: number
 *          category_id:
 *            type: array
 *      Product:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *          name:
 *            type: string
 *          price:
 *            type: number
 *          sale_price:
 *            type: number
 *          brand:
 *            type: string
 *          in_sale:
 *            type: boolean
 *          delivery_time_to_reseive_point:
 *            type: string
 *          short_desc:
 *            type: string
 *          images:
 *            type: array
 *          sales_company:
 *            type: object
 *          rate_base:
 *            type: number
 *          created_at:
 *            type: string
 *          orders_count:
 *            type: number
 *          category_id:
 *            type: array
 */
