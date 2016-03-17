import { loader } from 'ngES6';

const MODULE_NAME = 'es6.controllers';

loader.controllers(require.context('./', true, /^(?!\.\/index\.js$).+\.js$/), MODULE_NAME);
export default MODULE_NAME;
