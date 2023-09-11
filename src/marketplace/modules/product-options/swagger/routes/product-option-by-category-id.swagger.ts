/**
 *  @openapi
 * /api-marketplace/product_options/{option_id}:
 *    get:
 *      tags:
 *      - Product Options
 *      summary: Get Product custom option list
 *      parameters:
 *      - name: option_id
 *        in: path
 *        description: The id of the category for sort custom options
 *        required: true
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: 'array'
 *                items:
 *                  $ref: '#/components/schemas/ProductOPtion'
 */
