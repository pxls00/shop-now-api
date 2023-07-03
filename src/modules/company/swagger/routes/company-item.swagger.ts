/**
 *  @openapi
 *  /api/companies/{companyId}:
 *    get:
 *      tags:
 *      - Company
 *      summary: Get Company by Id
 *      parameters:
 *      - name: companyId
 *        in: path
 *        description: The id of the company
 *        required: true
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Company'
 *        404:
 *          description: Company not found
 */
