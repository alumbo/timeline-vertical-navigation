/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface TimelineVerticalNavigation {
    }
}
declare global {
    interface HTMLTimelineVerticalNavigationElement extends Components.TimelineVerticalNavigation, HTMLStencilElement {
    }
    var HTMLTimelineVerticalNavigationElement: {
        prototype: HTMLTimelineVerticalNavigationElement;
        new (): HTMLTimelineVerticalNavigationElement;
    };
    interface HTMLElementTagNameMap {
        "timeline-vertical-navigation": HTMLTimelineVerticalNavigationElement;
    }
}
declare namespace LocalJSX {
    interface TimelineVerticalNavigation {
    }
    interface IntrinsicElements {
        "timeline-vertical-navigation": TimelineVerticalNavigation;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "timeline-vertical-navigation": LocalJSX.TimelineVerticalNavigation & JSXBase.HTMLAttributes<HTMLTimelineVerticalNavigationElement>;
        }
    }
}
