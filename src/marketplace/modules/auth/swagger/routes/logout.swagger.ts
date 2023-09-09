/**
 *  @openapi
 *  /api/auth/logout:
 *    delete:
 *      tags:
 *      - Auth
 *      summary: Logout User
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        204:
 *          description: Success
 *        403:
 *          description: User unauthorized
 */
