import { Created, TBTCSystem } from "../generated/TBTCSystem/TBTCSystem";
import { Deposit } from "../generated/schema";

import { getTBTCToken } from "./TBTCToken";

export function handleCreateNewDeposit(event: Created): void {
  let depositID =
    event.params._depositContractAddress.toHexString() +
    "-" +
    event.params._keepAddress.toHexString() +
    "-" +
    event.params._timestamp.toString();

  let deposit = new Deposit(depositID);
  deposit.keepAddress = event.params._keepAddress;
  deposit.tbtcToken = getTBTCToken().id;
  deposit.save();
}
