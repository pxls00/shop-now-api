/**
 * @openapi
 *  components:
 *    schemas:
 *      CreateCategoryFields:
 *        type: object
 *        required:
 *          - name
 *        properties:
 *          name:
 *            type: string
 *            default: T-shirts
 *      Category:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *          name:
 *            type: string
 *          key:
 *            type: string
 *          nested_categories:
 *            type: array
 *            default: []
 *          created_at:
 *            type: string
 */
