import { loader } from 'ngES6';

const MODULE_NAME = 'es6.controllers';
const TPL_CACHE = {}; // template cache

loader.controllers(require.context('./', true, /^(?!\.\/index\.js$).+\.js$/),
        MODULE_NAME, [], TPL_CACHE);

export default MODULE_NAME;
export const templateCache = TPL_CACHE;
