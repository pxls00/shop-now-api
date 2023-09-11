/**
 *  @openapi
 * /api-marketplace/companies/{company_id}:
 *    get:
 *      tags:
 *      - Company
 *      summary: Get Company by Id
 *      parameters:
 *      - name: company_id
 *        in: path
 *        description: The id of the company
 *        required: true
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Company-detail'
 *        404:
 *          description: Company not found
 */
