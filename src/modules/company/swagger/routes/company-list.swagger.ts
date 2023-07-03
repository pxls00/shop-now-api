/**
 *  @openapi
 *  /api/companies:
 *    get:
 *      tags:
 *      - Company
 *      summary: Get Company List
 *      parameters:
 *      - name: sortOption
 *        in: query
 *        description: Sort by option [by_order_count - sort by order count, by_popular - sort by folloers count, by_rate - sort by rate higher num]
 *        schema:
 *          type: integer
 *      - name: search
 *        in: query
 *        description: Search companies by name
 *        required: false
 *        schema:
 *          type: string
 *      - name: skip
 *        in: query
 *        description: Skip data
 *        required: false
 *        schema:
 *          type: integer
 *      - name: limit
 *        in: query
 *        description: Limitation data
 *        required: false
 *        schema:
 *          type: integer
 *      responses:
 *         200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: 'array'
 *                items:
 *                  $ref: '#/components/schemas/Company'
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
 *                $ref: '#/components/schemas/Company-detail'
 *        409:
 *          description: Conflict
 *        400:
 *          description: Bad Request
 */
