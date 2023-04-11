export type Color = 'dark' | 'mid' | 'light';

export interface Layout {
  title?: string;
  rootElement: ElementsType;
}

export type ElementsType =
  | TextTile
  | ImageTile
  | ButtonTile
  | HorizontalSplitter
  | VerticalSplitter;

export interface Element {
  type: string;
  elementKey: string;
}

/**
 * Displays the text.
 */
export interface TextTile extends Element {
  type: 'textTile';
  title?: string;
  text?: string;
  color?: Color;
}

/**
 * Displays an image.
 */
export interface ImageTile extends Element {
  type: 'imageTile';
  title: string;
  source: string;
}

/**
 * Hosts a button that performs an action on click.
 */
export interface ButtonTile extends Element {
  type: 'buttonTile';
  text: string;
  action: Action;
}

/**
 * Splits available space horizontally evenly across all child elements.
 */
export interface HorizontalSplitter extends Element {
  type: 'horizontalSplitter';
  elements: ElementsType[];
}

/**
 * Splits available space vertically evenly across all child elements.
 */
export interface VerticalSplitter extends Element {
  type: 'verticalSplitter';
  elements: ElementsType[];
}

/**
 * Executable action. Payload(value) depends on the action type.
 */
export interface Action {
  type: 'update';
  referenceElementkey: string;
  value: {
    [key: string]: string;
  };
}
