import generateUtilityClass from '../generateUtilityClass';
import generateUtilityClasses from '../generateUtilityClasses';
export function getOptionUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiOption', slot);
}
const optionUnstyledClasses = generateUtilityClasses('MuiOption', ['root', 'disabled', 'selected', 'highlighted']);
export default optionUnstyledClasses;