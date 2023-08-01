/**
 * @openapi
 *  components:
 *    schemas:
 *      CreateProductOptionFields:
 *        type: object
 *        required:
 *          - name
 *          - category_id
 *          - value
 *        properties:
 *          name:
 *            type: string
 *            default: Memory Of Phone
 *          category_id:
 *            type: array
 *            default: ["category_id-1"]
 *          value:
 *            type: array
 *            default: ["max", "min"]
 *      ProductOption:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *          name:
 *            type: string
 *          category_id:
 *            type: array
 *          value:
 *            type: array
 *          key:
 *            type: string
 */
