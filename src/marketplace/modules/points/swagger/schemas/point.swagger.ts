/**
 * @openapi
 *  components:
 *    schemas:
 *      CreatePointItem:
 *        type: object
 *        required:
 *          - location
 *          - worktime
 *          - related_admin
 *          - contact_number
 *        properties:
 *          location:
 *            type: object
 *            default:
 *              city: "Toshkent"
 *              district: "Yunusobod"
 *              orientation: "Next to the Universam market"
 *              degrees:
 *                lng: "123123.casca123.0"
 *                ltd: "123123.sdom1234.0"
 *          worktime: 
 *            type: object
 *            default:
 *              work_time: "10:00~20:00"
 *              non_working_days: "Monday"
 *          related_admin: 
 *            type: object
 *            default:
 *              email: "admin@gmail.com"
 *              name: "Admin name"
 *          contact_number: 
 *            type: number
 *            default: "(99) 999-99-99"
 *      PointItem:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *          location:
 *            type: object
 *          worktime: 
 *            type: object
 *          related_admin: 
 *            type: object
 *          contact_number: 
 *            type: number
 *          created_at: 
 *            type: string
 */
