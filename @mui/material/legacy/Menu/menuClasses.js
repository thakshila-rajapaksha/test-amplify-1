import { unstable_generateUtilityClasses as generateUtilityClasses } from '@mui/utils';
import generateUtilityClass from '../generateUtilityClass';
export function getMenuUtilityClass(slot) {
  return generateUtilityClass('MuiMenu', slot);
}
var menuClasses = generateUtilityClasses('MuiMenu', ['root', 'paper', 'list']);
export default menuClasses;