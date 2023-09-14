/**
 *  @openapi
 * /api-marketplace/company_tags:
 *    get:
 *      tags:
 *      - Company Options
 *      summary: Get Company tag list
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *               schema:
 *                type: 'array'
 *                items:
 *                  $ref: '#/components/schemas/CompanyTag'
 *    post:
 *      tags:
 *      - Company Options
 *      summary: Create Company Tag
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateCompanyTagFields'
 *      responses:
 *        201:
 *          description: Success
 *          content:
 *            application/json:
 *               schema:
 *                 $ref: '#/components/schemas/CompanyTag'
 *        409:
 *          description: Conflict
 *        400:
 *          description: Bad Request
 */
