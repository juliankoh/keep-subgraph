// import { NewGravatar, UpdatedGravatar } from '../generated/Gravity/Gravity'
// import { Gravatar } from '../generated/schema'

// export function handleUpdatedGravatar(event: UpdatedGravatar): void {
//   let id = event.params.id.toHex()
//   let gravatar = Gravatar.load(id)
//   if (gravatar == null) {
//     gravatar = new Gravatar(id)
//   }
//   gravatar.owner = event.params.owner
//   gravatar.displayName = event.params.displayName
//   gravatar.imageUrl = event.params.imageUrl
//   gravatar.save()
// }

import { Created } from "../generated/TBTCSystem/TBTCSystem";
import { Deposit } from "../generated/schema";

import { getTBTCToken } from "./TBTCToken";

export function handleCreateNewDeposit(event: Created): void {
  const depositID =
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
