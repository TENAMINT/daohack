import {
  FUNC,
  NEW_STORE_VALUE,
  PROPOSAL_DESCRIPTION,
} from "../hardhat-helper-config";
import { propose } from "./utils";

propose([NEW_STORE_VALUE], FUNC, PROPOSAL_DESCRIPTION)
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
