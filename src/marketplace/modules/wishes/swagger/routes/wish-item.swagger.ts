/**
 *  @openapi
 * /api-marketplace/wishes/{wish_id}:
 *    post:
 *      tags:
 *      - Wishes
 *      summary: Add Product to authorized users wish list
 *      parameters:
 *      - name: wish_id
 *        in: path
 *        description: The id of the product
 *        required: true
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateWishFields'
 *      responses:
 *        201:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Product-detail'
 *        400:
 *          description: Bad Request
 *        403:
 *          description: User unauthorized
 *        404:
 *          description: Product not found
 *        409:
 *          description: Conflict
 *    delete:
 *      tags:
 *      - Wishes
 *      summary: Delete Product from wishlist of authorized user
 *      parameters:
 *      - name: wish_id
 *        in: path
 *        description: The id of the product
 *        required: true
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        201:
 *          description: Product deleted successfully from wishlist
 *        400:
 *          description: Bad Request
 *        403:
 *          description: User unauthorized
 *        404:
 *          description: Product not found
 */
