import { loader } from 'ngES6';

const MODULE_NAME = 'es6.directives';

loader.directives(require.context('./', true, /^(?!\.\/index\.js$).+\.js$/), MODULE_NAME);

export default MODULE_NAME;
