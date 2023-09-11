/**
 *  @openapi
 * /api-marketplace/product_tags:
 *    get:
 *      tags:
 *      - Product Options
 *      summary: Get Product tag list
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *               schema:
 *                type: 'array'
 *                items:
 *                  $ref: '#/components/schemas/ProductTag'
 *    post:
 *      tags:
 *      - Product Options
 *      summary: Create Product Tag
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateProductTagFields'
 *      responses:
 *        201:
 *          description: Success
 *          content:
 *            application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ProductTag'
 *        409:
 *          description: Conflict
 *        400:
 *          description: Bad Request
 */
