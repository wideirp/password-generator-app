import { reactive } from "vue";

export const store = reactive({
  password: "",
  characterLength: 0,
  includeUpper: false,
  includeLower: false,
  includeNumbers: false,
  includeSymbols: false,
  strength: "",
});

export const Strengths = Object.freeze({
  TOOWEAK: Symbol("too weak!"),
  WEAK: Symbol("weak"),
  MEDIUM: Symbol("medium"),
  STRONG: Symbol("strong"),
  NONE: Symbol(""),
});
