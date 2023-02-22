import { unstable_generateUtilityClasses as generateUtilityClasses } from '@mui/utils';
import generateUtilityClass from '../generateUtilityClass';
export function getSnackbarContentUtilityClass(slot) {
  return generateUtilityClass('MuiSnackbarContent', slot);
}
var snackbarContentClasses = generateUtilityClasses('MuiSnackbarContent', ['root', 'message', 'action']);
export default snackbarContentClasses;