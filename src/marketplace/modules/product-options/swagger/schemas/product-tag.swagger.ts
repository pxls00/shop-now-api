/**
 * @openapi
 *  components:
 *    schemas:
 *      CreateProductTagFields:
 *        type: object
 *        required:
 *          - name
 *          - category_id
 *        properties:
 *          name:
 *            type: string
 *            default: Vans
 *          category_id:
 *            type: array
 *            default: ["category_id-1"]
 *      ProductTag:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *          name:
 *            type: string
 *          category_id:
 *            type: array
 */
