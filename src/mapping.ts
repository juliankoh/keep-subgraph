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
import {
  Deposit,
  TBTCDepositToken,
  TBTCToken,
  FeeRebateToken,
  DepositFunding,
} from "../generated/schema";

export function handleCreateNewDeposit(event: Created): void {}
