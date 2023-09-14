/**
 *  @openapi
 * /api-marketplace/product_brands/{brand_id}:
 *    patch:
 *      tags:
 *      - Product Options
 *      summary: Edit Product Brand by Id
 *      parameters:
 *      - name: brand_id
 *        in: path
 *        description: The id of the category for sort brands
 *        required: true
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
 *              schema:
 *                $ref: '#/components/schemas/ProductBrand'
 *        409:
 *          description: Conflict
 *        400:
 *          description: Bad Request
 *        404:
 *          description: Product Brand not found
 *    delete:
 *      tags:
 *      - Product Options
 *      summary: Delete Product Brand by Id
 *      parameters:
 *      - name: brand_id
 *        in: path
 *        description: The id of the category for sort brands
 *        required: true
 *      responses:
 *        201:
 *          description: Product Brand deleted successfully
 *        400:
 *          description: Bad Request
 *        404:
 *          description: Product Brand not found
 */
