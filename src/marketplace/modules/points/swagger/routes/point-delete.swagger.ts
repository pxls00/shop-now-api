/**
 *  @openapi
 * /api-marketplace/points/{point_id}:
 *    get:
 *      tags:
 *      - Points
 *      summary: Get Point by Id
 *      parameters:
 *      - name: point_id
 *        in: path
 *        description: The id of the Point
 *        required: true
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *               schema:
 *                 $ref: '#/components/schemas/PointItem'
 *        400:
 *          description: Bad Request
 *        404:
 *          description: Point not found
 *    delete:
 *      tags:
 *      - Points
 *      summary: Delete Point by Id
 *      parameters:
 *      - name: point_id
 *        in: path
 *        description: The id of the Point
 *        required: true
 *      responses:
 *        201:
 *          description: Point deleted successfully
 *        400:
 *          description: Bad Request
 *        404:
 *          description: Point not found
 */
