/**
 *  @openapi
 * /api-marketplace/order-basket:
 *    get:
 *      tags:
 *      - Order Basket
 *      summary: Get order basket list of authorized user
 *      parameters:
 *      - name: sortOption
 *        in: query
 *        description: Sort by option [by_cheaper - sort by cheaper to more expensive, by_more_expensive - sort by more expensive to cheaper, by_added_recently - by added recently from current date]
 *        required: false
 *        schema:
 *          type: integer
 *          example: by_order_count
 *      - name: search
 *        in: query
 *        description: Search Product by name
 *        required: false
 *        schema:
 *          type: string
 *      - name: skip
 *        in: query
 *        description: Skip data
 *        required: false
 *        schema:
 *          type: integer
 *      - name: limit
 *        in: query
 *        description: Limitation data
 *        required: false
 *        schema:
 *          type: integer
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: 'object'
 *                properties:
 *                  data:
 *                    type: 'array'
 *                    description: 'Array of Order Basket products data'
 *                    items:
 *                      $ref: '#/components/schemas/OrderBasket'
 *                  has_next_page:
 *                    type: 'boolean'
 *                    description: 'For pagination does exit next page, if true=yes or false=no'
 *                    example: false
 *                  total_price:
 *                    type: 'integer'
 *                    description: 'Total price of products in order basket'
 *                    example: 12000
 *                  total_count:
 *                    type: 'integer'
 *                    description: 'All count of data without skip and limit'
 *                    example: 100
 *        403:
 *          description: User unauthorized
 *        404:
 *          description: User not found
 *    post:
 *      tags:
 *      - Order Basket
 *      summary: Add Product to authorized users order basket list
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateOrderFields'
 *      responses:
 *        201:
 *          description: Product added successfuly
 *        400:
 *          description: Bad Request
 *        403:
 *          description: User unauthorized
 *        404:
 *          description: Product not found
 *        409:
 *          description: Conflict
 */
