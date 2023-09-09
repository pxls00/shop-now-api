/**
 *  @openapi
 *  /api/wishes:
 *    get:
 *      tags:
 *      - Wishes
 *      summary: Get wishes list of authorized user
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
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: 'object'
 *                properties:
 *                  data:
 *                    type: 'array'
 *                    description: 'Array of Wish data'
 *                    items:
 *                      $ref: '#/components/schemas/Wish'
 *                  has_next_page:
 *                    type: 'boolean'
 *                    description: 'For pagination does exit next page, if true=yes or false=no'
 *                    example: false
 *                  total_count:
 *                    type: 'integer'
 *                    description: 'All count of data without skip and limit'
 *                    example: 100
 *        403:
 *          description: User unauthorized
 *        404:
 *          description: User not found
 */
