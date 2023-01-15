import { BigInt } from "@graphprotocol/graph-ts"
import {
  DefiContribute,
  AdminRevoke,
  ApprovedDonee,
  Donation,
  DoneeRequestCanceled,
  EliminatedDonee,
  NewAdmin,
  NewDonee,
  NewDoneeRequest,
  OwnershipTransferred,
  ReadyToRemove,
  RedFlag,
  RejectedDonee,
  SummedToThePool,
  Withdrawal
} from "../generated/DefiContribute/DefiContribute"
import { ExampleEntity } from "../generated/schema"

export function handleAdminRevoke(event: AdminRevoke): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from)

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.admin = event.params.admin

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.addressToDoneeId(...)
  // - contract.addressToRequestsSent(...)
  // - contract.admin(...)
  // - contract.doneeCandidateToFreezeTime(...)
  // - contract.doneePetition(...)
  // - contract.doneeToStatus(...)
  // - contract.doneeToWithdrawalFreeze(...)
  // - contract.doneesId(...)
  // - contract.idToDonee(...)
  // - contract.idToRedFlags(...)
  // - contract.owner(...)
  // - contract.randomDonationPool(...)
  // - contract.toNewDonee(...)
}

export function handleApprovedDonee(event: ApprovedDonee): void {}

export function handleDonation(event: Donation): void {}

export function handleDoneeRequestCanceled(event: DoneeRequestCanceled): void {}

export function handleEliminatedDonee(event: EliminatedDonee): void {}

export function handleNewAdmin(event: NewAdmin): void {}

export function handleNewDonee(event: NewDonee): void {}

export function handleNewDoneeRequest(event: NewDoneeRequest): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleReadyToRemove(event: ReadyToRemove): void {}

export function handleRedFlag(event: RedFlag): void {}

export function handleRejectedDonee(event: RejectedDonee): void {}

export function handleSummedToThePool(event: SummedToThePool): void {}

export function handleWithdrawal(event: Withdrawal): void {}
