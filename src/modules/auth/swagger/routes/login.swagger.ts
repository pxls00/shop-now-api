/**
 *  @openapi
 *  /api/auth/login:
 *    post:
 *      tags:
 *      - Auth
 *      summary: Login User
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/LoginUserFields'
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/LoginResponse'
 *        409:
 *          description: Conflict
 *        400:
 *          description: Bad Request
 */
