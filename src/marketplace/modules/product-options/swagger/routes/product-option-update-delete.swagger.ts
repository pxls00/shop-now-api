/**
 *  @openapi
 *  /api/product_options/{option_id}:
 *    patch:
 *      tags:
 *      - Product Options
 *      summary: Edit Product Option by Id
 *      parameters:
 *      - name: option_id
 *        in: path
 *        description: The id of the category for sort product options
 *        required: true
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
 *              schema:
 *                $ref: '#/components/schemas/ProductOption'
 *        409:
 *          description: Conflict
 *        400:
 *          description: Bad Request
 *        404:
 *          description: Product custom option not found
 *    delete:
 *      tags:
 *      - Product Options
 *      summary: Delete Product custom option by Id
 *      parameters:
 *      - name: brand_id
 *        in: path
 *        description: The id of the category for sort brands
 *        required: true
 *      responses:
 *        201:
 *          description: Product custom option deleted successfully
 *        400:
 *          description: Bad Request
 *        404:
 *          description: Product custom option not found
 */
