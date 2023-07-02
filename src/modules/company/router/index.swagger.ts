/**
 *  @openapi
 *  /api/companies:
 *    get:
 *      tags:
 *      - Company
 *      summary: Get Company List
 *    post:
 *      tags:
 *      - Company
 *      summary: Create Company
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateCompanyFields'
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/CreateUserResponse'
 *        409:
 *          description: Conflict
 *        400:
 *          description: Bad Request
 */
