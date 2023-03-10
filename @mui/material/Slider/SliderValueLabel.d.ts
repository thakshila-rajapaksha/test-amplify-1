import * as React from 'react';
import PropTypes from 'prop-types';
import { SliderValueLabelProps } from './SliderValueLabel.types';
/**
 * @ignore - internal component.
 */
declare function SliderValueLabel(props: SliderValueLabelProps): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare namespace SliderValueLabel {
    var propTypes: {
        children: PropTypes.Validator<PropTypes.ReactElementLike>;
        className: PropTypes.Requireable<string>;
        value: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
}
export default SliderValueLabel;
