import type { ReactNode } from "react";
import type { PositionDto } from "./interfaces";
import type { ObjStrCustom } from "./types";

export interface ModalProps {
  children: (config: ObjStrCustom<boolean>) => ReactNode;
  title?: string;
  config?: ObjStrCustom<boolean>;
  open: boolean;
  onClose: (custom?: unknown) => void;
}

export type PositionProps = PositionDto;

export type TopProps = PositionProps;
