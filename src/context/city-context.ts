import { createContext } from "react";
import {
  KaleidoscopeData,
  defaultKaleidoscopeData,
} from "../api/graphql-kaleidoscope";

export type KaleidoscopeDataContext = {
  KaleidoscopeData: KaleidoscopeData;
};

const contextDefaultValue: KaleidoscopeDataContext = {
  KaleidoscopeData: defaultKaleidoscopeData,
};

export const kaleidoscopeAppContext =
  createContext<KaleidoscopeDataContext>(contextDefaultValue);
