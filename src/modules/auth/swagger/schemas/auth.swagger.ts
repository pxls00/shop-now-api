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
 *      RegisteredUser:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *          email:
 *            type: string
 *          name:
 *            type: string
 *          password:
 *            type: string
 *          logo_img:
 *            type: string
 *          created_at:
 *            type: Date
 *          followings:
 *            type: array
 *          token:
 *            type: object
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
 *
 */
