import { unstable_generateUtilityClasses as generateUtilityClasses } from '@mui/utils';
import generateUtilityClass from '../generateUtilityClass';
export function getListUtilityClass(slot) {
  return generateUtilityClass('MuiList', slot);
}
const listClasses = generateUtilityClasses('MuiList', ['root', 'padding', 'dense', 'subheader']);
export default listClasses;