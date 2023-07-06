"use strict";
/**
 *  @openapi
 *  /api/companies/{company_id}/follow:
 *    post:
 *      tags:
 *      - Company
 *      summary: Follow Company
 *      parameters:
 *      - name: company_id
 *        in: path
 *        description: The id of the company
 *        required: true
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        201:
 *          description: User has been followed succesfully
 *        403:
 *          description: User unauthorized
 *        404:
 *          description: Company not found
 *        409:
 *          description: User already followed
 */
//# sourceMappingURL=company-item-follow.swagger.js.map