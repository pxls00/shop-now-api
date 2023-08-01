/**
 *  @openapi
 *  /api/product_brands:
 *    get:
 *      tags:
 *      - Product Options
 *      summary: Get Product brand list
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *               schema:
 *                type: 'array'
 *                items:
 *                  $ref: '#/components/schemas/ProductBrand'
 *    post:
 *      tags:
 *      - Product Options
 *      summary: Create Product Brand
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateProductBrandFields'
 *      responses:
 *        201:
 *          description: Success
 *          content:
 *            application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ProductBrand'
 *        409:
 *          description: Conflict
 *        400:
 *          description: Bad Request
 */
