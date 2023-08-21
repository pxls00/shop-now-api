/**
 *  @openapi
 *  /api/product_tags/{tag_id}:
 *    patch:
 *      tags:
 *      - Company Options
 *      summary: Edit Company Tag by Id
 *      parameters:
 *      - name: tag_id
 *        in: path
 *        description: The id of tag
 *        required: true
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
 *              schema:
 *                $ref: '#/components/schemas/CompanyTag'
 *        409:
 *          description: Conflict
 *        400:
 *          description: Bad Request
 *        404:
 *          description: Company Tag not found
 *    delete:
 *      tags:
 *      - Company Options
 *      summary: Delete Company Tag by Id
 *      parameters:
 *      - name: tag_id
 *        in: path
 *        description: The id of the category for sort tags
 *        required: true
 *      responses:
 *        201:
 *          description: Company Tag deleted successfully
 *        400:
 *          description: Bad Request
 *        404:
 *          description: Company Tag not found
 */
