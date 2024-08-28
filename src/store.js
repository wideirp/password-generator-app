import { reactive } from "vue";

export const store = reactive({
  password: "",
  characterLength: 10,
  includeUpper: true,
  includeLower: true,
  includeNumbers: true,
  includeSymbols: true,
});
