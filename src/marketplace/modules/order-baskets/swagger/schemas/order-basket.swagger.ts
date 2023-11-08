/**
 * @openapi
 *  components:
 *    schemas:
 *      CreateOrderFields:
 *        type: object
 *        required:
 *          - name
 *          - price
 *          - _id
 *          - sale_price
 *          - in_sale
 *          - amount
 *          - img
 *          - brand
 *          - sales_company
 *          - created_at
 *        properties:
 *          _id:
 *            type: string
 *            default: 64d77d78ca6bce1c6dc1d9ee
 *          name:
 *            type: string
 *            default: Iphone 14 pro max
 *          price:
 *            type: number
 *            default: 14000000
 *          amount:
 *            type: number
 *            default: 1
 *          sale_price:
 *            type: number
 *            default: 15000000
 *          in_sale:
 *            type: boolean
 *            default: true
 *          img:
 *            type: string
 *            default: "img url"
 *          brand:
 *            type: string
 *            default: "Apple"
 *          color:
 *            type: string
 *            default: "Black"
 *          custom_options:
 *            type: object
 *            default: {memory: "256gb",type: "LLA"}
 *          created_at:
 *            type: string
 *            default: "2023-11-07T14:45:33.492Z"
 *          sales_company:
 *            type: object
 *            default: {_id: "64a31d38dac437beefa62b5a",name: "Test",logo_img: ""}
 *      OrderBasket:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *          name:
 *            type: string
 *          price:
 *            type: number
 *          amount:
 *            type: number
 *          sale_price:
 *            type: number
 *          in_sale:
 *            type: boolean
 *          img:
 *            type: string
 *          brand:
 *            type: string
 *          color:
 *            type: string
 *          custom_options:
 *            type: object
 *          created_at:
 *            type: string
 *          sales_company:
 *            type: object
 */
