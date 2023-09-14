/**
 *  @openapi
 * /api-marketplace/product_tags/{tag_id}:
 *    patch:
 *      tags:
 *      - Product Options
 *      summary: Edit Product Tag by Id
 *      parameters:
 *      - name: tag_id
 *        in: path
 *        description: The id of the category for sort tags
 *        required: true
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
 *              schema:
 *                $ref: '#/components/schemas/ProductTag'
 *        409:
 *          description: Conflict
 *        400:
 *          description: Bad Request
 *        404:
 *          description: Product Tag not found
 *    delete:
 *      tags:
 *      - Product Options
 *      summary: Delete Product Tag by Id
 *      parameters:
 *      - name: tag_id
 *        in: path
 *        description: The id of the category for sort tags
 *        required: true
 *      responses:
 *        201:
 *          description: Product Tag deleted successfully
 *        400:
 *          description: Bad Request
 *        404:
 *          description: Product Tag not found
 */
