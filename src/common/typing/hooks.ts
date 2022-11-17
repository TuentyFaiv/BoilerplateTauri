// HookModal
export type HookModalParameters = {
  query?: null | string;
  element?: string;
};
export type HookModalFunc = (custom?: unknown) => void;
export type HookModalReturn = [boolean, HookModalFunc];