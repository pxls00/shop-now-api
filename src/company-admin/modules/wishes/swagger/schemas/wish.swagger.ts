/**
 * @openapi
 *  components:
 *    schemas:
 *      CreateWishFields:
 *        type: object
 *        required:
 *          - user
 *        properties:
 *          user:
 *            $ref: '#/components/schemas/User'
 *          wishes:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/Product'
 *      Wish:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *          user:
 *            $ref: '#/components/schemas/User'
 *          wishes:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/Product'
 */
