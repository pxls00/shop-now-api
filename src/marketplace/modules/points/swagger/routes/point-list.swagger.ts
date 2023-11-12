/**
 *  @openapi
 * /api-marketplace/points:
 *    get:
 *      tags:
 *      - Points
 *      summary: Get Point list
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
 *                    description: 'Array of points data'
 *                    items:
 *                      $ref: '#/components/schemas/PointItem'
 *                  total_count:
 *                    type: 'integer'
 *                    description: 'All count of data'
 *                    example: 100
 *    post:
 *      tags:
 *      - Points
 *      summary: Create Point item
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreatePointItem'
 *      responses:
 *        201:
 *          description: Success
 *          content:
 *            application/json:
 *               schema:
 *                 $ref: '#/components/schemas/PointItem'
 *        409:
 *          description: Conflict
 *        400:
 *          description: Bad Request
 */
