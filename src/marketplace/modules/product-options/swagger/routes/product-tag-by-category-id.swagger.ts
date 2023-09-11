/**
 *  @openapi
 * /api-marketplace/product_tags/{tag_id}:
 *    get:
 *      tags:
 *      - Product Options
 *      summary: Get Product tag list
 *      parameters:
 *      - name: tag_id
 *        in: path
 *        description: The id of the category for sort tags
 *        required: true
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: 'array'
 *                items:
 *                  $ref: '#/components/schemas/ProductTag'
 */
