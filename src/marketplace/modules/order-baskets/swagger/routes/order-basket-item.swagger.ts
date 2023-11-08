/**
 *  @openapi
 * /api-marketplace/order-basket/{order_id}:
 *    delete:
 *      tags:
 *      - Order Basket
 *      summary: Delete Product from order basket of authorized user
 *      parameters:
 *      - name: order_id
 *        in: path
 *        description: The id of the product
 *        required: true
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        201:
 *          description: Product deleted successfully from order basket
 *        400:
 *          description: Bad Request
 *        403:
 *          description: User unauthorized
 *        404:
 *          description: Product not found
 */
