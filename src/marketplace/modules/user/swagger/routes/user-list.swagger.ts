/**
 *  @openapi
 *  /api/users:
 *    get:
 *      tags:
 *      - User
 *      summary: Get User List
 *      responses:
 *         200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: 'array'
 *                items:
 *                  $ref: '#/components/schemas/User'
 */
