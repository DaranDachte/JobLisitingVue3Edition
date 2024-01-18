import { defineRule } from "vee-validate";
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as excluded,
} from "@vee-validate/rules";

defineRule("required", required);
defineRule("min", min);
defineRule("max", max);
defineRule("alpha_spaces", alphaSpaces);
defineRule("email", email);
defineRule("min_value", minVal);
defineRule("max_value", maxVal);
defineRule("confirmed", confirmed);
defineRule("excluded", excluded);
