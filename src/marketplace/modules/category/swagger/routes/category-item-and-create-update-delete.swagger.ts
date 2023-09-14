/**
 *  @openapi
 * /api-marketplace/categories/{category_id}:
 *    get:
 *      tags:
 *      - Category
 *      summary: Get Category by Id
 *      parameters:
 *      - name: category_id
 *        in: path
 *        description: The id of the Category
 *        required: true
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Category'
 *        404:
 *          description: Category not found
 *    post:
 *      tags:
 *      - Category
 *      summary: Create Category by Id
 *      parameters:
 *      - name: category_id
 *        in: path
 *        description: The id of the Category
 *        required: true
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
 *        404:
 *          description: Category not found
 *    patch:
 *      tags:
 *      - Category
 *      summary: Edit Category by Id
 *      parameters:
 *      - name: category_id
 *        in: path
 *        description: The id of the Category
 *        required: true
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
 *        404:
 *          description: Category not found
 *    delete:
 *      tags:
 *      - Category
 *      summary: Delete Category by Id
 *      parameters:
 *      - name: category_id
 *        in: path
 *        description: The id of the Category
 *        required: true
 *      responses:
 *        201:
 *          description: Category deleted successfully
 *        400:
 *          description: Bad Request
 *        404:
 *          description: Category not found
 *
 */
