import { check } from "express-validator";
import { validateCreateRequest } from "../../methods";

export const generateOrderValidator = [
  check('id_user').exists().isInt(),
  check('delivery_date').exists().isDate(),
  check('payment_method').exists().isObject(),
  check('shipping_address').exists().isObject(),

  (req: any, res: any, next: any) => {
    validateCreateRequest(req, res, next)
  }
]