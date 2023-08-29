/**
 *  @openapi
 *  /api/products/{product_id}:
 *    get:
 *      tags:
 *      - Product
 *      summary: Get Product by Id
 *      parameters:
 *      - name: product_id
 *        in: path
 *        description: The id of the product
 *        required: true
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Product-detail'
 *        404:
 *          description: Product not found
 *    patch:
 *      tags:
 *      - Product
 *      summary: Update Product by Id
 *      parameters:
 *      - name: product_id
 *        in: path
 *        description: The id of the product
 *        required: true
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateProductFields'
 *      responses:
 *        201:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Product-detail'
 *        400:
 *          description: Bad Request
 *        404:
 *          description: Product not found
 *        409:
 *          description: Conflict
 *    delete:
 *      tags:
 *      - Product
 *      summary: Delete Product by Id
 *      parameters:
 *      - name: product_id
 *        in: path
 *        description: The id of the product
 *        required: true
 *      responses:
 *        201:
 *          description: Category deleted successfully
 *        400:
 *          description: Bad Request
 *        404:
 *          description: Product not found
 */
