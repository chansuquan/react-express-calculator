import * as URL from 'server/constants/URL';
import middlewarify from 'server/utils/middlewarify';
import { calculateResult } from 'server/api/middleware/Calculator';

export default router => {
  router.post(URL.CALCULATE, middlewarify(calculateResult));
  
  return router;
}