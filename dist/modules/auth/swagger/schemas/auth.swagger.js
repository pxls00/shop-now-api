"use strict";
/**
 * @openapi
 *  components:
 *    schemas:
 *      RegisterUserFields:
 *        type: object
 *        required:
 *          - email
 *          - name
 *          - password
 *        properties:
 *          email:
 *            type: string
 *            default: user@example.com
 *          name:
 *            type: string
 *            default: UserTest
 *          password:
 *            type: string
 *            default: testpassword
 *      LoginUserFields:
 *        type: object
 *        required:
 *          - email
 *          - password
 *        properties:
 *          email:
 *            type: string
 *            default: user@example.com
 *          password:
 *            type: string
 *            default: testpassword
 *      LoginResponse:
 *        type: object
 *        properties:
 *          token:
 *            type: string
 */
//# sourceMappingURL=auth.swagger.js.map