"use strict";
/**
 *  @openapi
 *  /api/users/{user_id}:
 *    get:
 *      tags:
 *      - User
 *      summary: Get User by Id
 *      parameters:
 *      - name: user_id
 *        in: path
 *        description: The id of the User
 *        required: true
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User-detail'
 *        404:
 *          description: User not found
 *
 */
//# sourceMappingURL=user-item.swagger.js.map