// Borislav Hadzhiev - Tue Jan 11 2022
// https://bobbyhadz.com/blog/javascript-check-if-two-elements-overlap
export function isIntersecting(first: HTMLElement, second: HTMLElement) {
  const firstRect = first.getBoundingClientRect();
  const secondRect = second.getBoundingClientRect();
  return !(
    firstRect.top > secondRect.bottom ||
    firstRect.right < secondRect.left ||
    firstRect.bottom < secondRect.top ||
    firstRect.left > secondRect.right
  );
}

export function isNullish(val: unknown): val is null | undefined {
  return val === null || val === undefined;
}

export function isNumber(val: unknown): val is number {
  return typeof val === 'number';
}

export function isOver(value: number, ...num: number[]) {
  return num.every((num) => isNumber(num) && num > value);
}

export function useWindowListener<K extends keyof WindowEventMap>(
  type: K,
  handler: (this: Window, event: WindowEventMap[K]) => void,
  options?: AddEventListenerOptions | boolean
) {
  window.addEventListener(type, handler, options);
  return () => window.removeEventListener(type, handler, options);
}
