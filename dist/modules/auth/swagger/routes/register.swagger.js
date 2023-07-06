"use strict";
/**
 *  @openapi
 *  /api/auth/register:
 *    post:
 *      tags:
 *      - Auth
 *      summary: Register User
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/RegisterUserFields'
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User-detail'
 *        409:
 *          description: Conflict
 *        400:
 *          description: Bad Request
 */
//# sourceMappingURL=register.swagger.js.map