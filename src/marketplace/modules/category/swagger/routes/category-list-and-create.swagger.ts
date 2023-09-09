/**
 *  @openapi
 *  /api/categories:
 *    get:
 *      tags:
 *      - Category
 *      summary: Get Category List
 *      responses:
 *         200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: 'array'
 *                items:
 *                  $ref: '#/components/schemas/Category'
 *    post:
 *      tags:
 *      - Category
 *      summary: Create Category
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateCategoryFields'
 *      responses:
 *        201:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Category'
 *        409:
 *          description: Conflict
 *        400:
 *          description: Bad Request
 */
