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
