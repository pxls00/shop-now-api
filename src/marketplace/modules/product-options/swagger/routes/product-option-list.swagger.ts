/**
 *  @openapi
 * /api-marketplace/product_options:
 *    get:
 *      tags:
 *      - Product Options
 *      summary: Get Product custom options list
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *               schema:
 *                type: 'array'
 *                items:
 *                  $ref: '#/components/schemas/ProductOption'
 *    post:
 *      tags:
 *      - Product Options
 *      summary: Create Product custom option
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateProductOptionFields'
 *      responses:
 *        201:
 *          description: Success
 *          content:
 *            application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ProductOption'
 *        409:
 *          description: Conflict
 *        400:
 *          description: Bad Request
 */
