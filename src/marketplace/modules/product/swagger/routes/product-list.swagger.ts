/**
 *  @openapi
 *  /api/products:
 *    get:
 *      tags:
 *      - Product
 *      summary: Get Product List
 *      parameters:
 *      - name: sortOption
 *        in: query
 *        description: Sort by option [by_order_count - sort by order count, by_rate - sort by rate high num, by_cheaper - sort by cheaper to more expensive, by_more_expensive - sort by more expensive to cheaper, by_added_recently - by added recently from current date]
 *        required: false
 *        schema:
 *          type: integer
 *          example: by_order_count
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
 *      - name: fl_category_id
 *        in: query
 *        description: Get products which has id in category_id field
 *        required: false
 *        schema:
 *          type: string
 *          example: "category_id"
 *      - name: fl_price
 *        in: query
 *        description: Get Products which matches this price
 *        required: false
 *        schema:
 *          type: string
 *          example: "1000~100000000"
 *      - name: fl_color
 *        in: query
 *        description: Get Products which has same color in color field
 *        required: false
 *        schema:
 *          type: string
 *          example: "red"
 *      - name: fl_brand
 *        in: query
 *        description: Get Products which has same brand in brand field
 *        required: false
 *        schema:
 *          type: string
 *      - name: fl_in_sale
 *        in: query
 *        description: Get Products which in sale
 *        required: false
 *        schema:
 *          type: boolean
 *      - name: fl_custom_options
 *        in: query
 *        description: Get Products by custom filter options
 *        required: false
 *        schema:
 *          type: object
 *      responses:
 *         200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: 'object'
 *                properties:
 *                  data:
 *                    type: 'array'
 *                    description: 'Array of product data'
 *                    items:
 *                      $ref: '#/components/schemas/Product'
 *                  has_next_page:
 *                    type: 'boolean'
 *                    description: 'For pagination does exit next page, if true=yes or false=no'
 *                    example: false
 *                  total_count:
 *                    type: 'integer'
 *                    description: 'All count of data without skip and limit'
 *                    example: 100
 *    post:
 *      tags:
 *      - Product
 *      summary: Create Product
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
 *        409:
 *          description: Conflict
 *        400:
 *          description: Bad Request
 */
