import { MenuItemMetadata, MenuItemState, UseMenuListboxSlotProps, UseMenuParameters } from './useMenu.types';
import { EventHandlers } from '../utils';
/**
 *
 * Demos:
 *
 * - [Unstyled Menu](https://mui.com/base/react-menu/#hooks)
 *
 * API:
 *
 * - [useMenu API](https://mui.com/base/api/use-menu/)
 */
export default function useMenu(parameters?: UseMenuParameters): {
    contextValue: {
        getItemProps: <TOther extends EventHandlers = {}>(option: string, otherHandlers?: TOther) => import("../ListboxUnstyled").UseListboxOptionSlotProps<TOther>;
        getItemState: (id: string) => MenuItemState;
        registerHighlightChangeHandler: (handler: (newValue: string | null) => void) => () => void;
        registerItem: (id: string, metadata: MenuItemMetadata) => void;
        unregisterItem: (id: string) => void;
    };
    getListboxProps: <TOther_1 extends EventHandlers>(otherHandlers?: TOther_1) => UseMenuListboxSlotProps;
    highlightedOption: string | null;
    highlightFirstItem: () => void;
    highlightLastItem: () => void;
    menuItems: Record<string, MenuItemMetadata>;
};
