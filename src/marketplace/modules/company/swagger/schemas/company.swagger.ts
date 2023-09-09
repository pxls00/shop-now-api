/**
 * @openapi
 *  components:
 *    schemas:
 *      CreateCompanyFields:
 *        type: object
 *        required:
 *          - email
 *          - name
 *          - phone_number
 *          - description
 *        properties:
 *          email:
 *            type: string
 *            default: balenciaga@example.com
 *          name:
 *            type: string
 *            default: Balenciaga
 *          phone_number:
 *            type: string
 *            default: (00) 000-00-00
 *          description:
 *            type: string
 *            default: "The most popular dress store"
 *      Company-detail:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *          email:
 *            type: string
 *          name:
 *            type: string
 *          phone_number:
 *            type: string
 *          description:
 *            type: string
 *          logo_img:
 *            type: string
 *          created_at:
 *            type: string
 *          orders_count:
 *            type: number
 *          rate:
 *            type: array
 *          rate_base:
 *            type: number
 *          followers:
 *            type: array
 *          followers_count:
 *            type: number
 *          banner_img:
 *            type: string
 *      Company:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *          email:
 *            type: string
 *          name:
 *            type: string
 *          phone_number:
 *            type: string
 *          description:
 *            type: string
 *          logo_img:
 *            type: string
 *          created_at:
 *            type: string
 *          orders_count:
 *            type: number
 *          rate_base:
 *            type: number
 *          followers_count:
 *            type: number
 *          banner_img:
 *            type: string
 *
 */
