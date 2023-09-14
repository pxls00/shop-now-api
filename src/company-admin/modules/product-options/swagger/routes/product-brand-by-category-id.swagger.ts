/**
 *  @openapi
 * /api-marketplace/product_brands/{brand_id}:
 *    get:
 *      tags:
 *      - Product Options
 *      summary: Get Product brand list
 *      parameters:
 *      - name: brand_id
 *        in: path
 *        description: The id of the category for sort brands
 *        required: true
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: 'array'
 *                items:
 *                  $ref: '#/components/schemas/ProductBrand'
 */
