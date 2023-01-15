import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
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

export function createAdminRevokeEvent(admin: Address): AdminRevoke {
  let adminRevokeEvent = changetype<AdminRevoke>(newMockEvent())

  adminRevokeEvent.parameters = new Array()

  adminRevokeEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )

  return adminRevokeEvent
}

export function createApprovedDoneeEvent(donee: Address): ApprovedDonee {
  let approvedDoneeEvent = changetype<ApprovedDonee>(newMockEvent())

  approvedDoneeEvent.parameters = new Array()

  approvedDoneeEvent.parameters.push(
    new ethereum.EventParam("donee", ethereum.Value.fromAddress(donee))
  )

  return approvedDoneeEvent
}

export function createDonationEvent(
  to: Address,
  from: Address,
  amount: BigInt
): Donation {
  let donationEvent = changetype<Donation>(newMockEvent())

  donationEvent.parameters = new Array()

  donationEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  donationEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  donationEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationEvent
}

export function createDoneeRequestCanceledEvent(
  donee: Address
): DoneeRequestCanceled {
  let doneeRequestCanceledEvent = changetype<DoneeRequestCanceled>(
    newMockEvent()
  )

  doneeRequestCanceledEvent.parameters = new Array()

  doneeRequestCanceledEvent.parameters.push(
    new ethereum.EventParam("donee", ethereum.Value.fromAddress(donee))
  )

  return doneeRequestCanceledEvent
}

export function createEliminatedDoneeEvent(
  cause: string,
  doneeId: BigInt,
  donee: Address
): EliminatedDonee {
  let eliminatedDoneeEvent = changetype<EliminatedDonee>(newMockEvent())

  eliminatedDoneeEvent.parameters = new Array()

  eliminatedDoneeEvent.parameters.push(
    new ethereum.EventParam("cause", ethereum.Value.fromString(cause))
  )
  eliminatedDoneeEvent.parameters.push(
    new ethereum.EventParam(
      "doneeId",
      ethereum.Value.fromUnsignedBigInt(doneeId)
    )
  )
  eliminatedDoneeEvent.parameters.push(
    new ethereum.EventParam("donee", ethereum.Value.fromAddress(donee))
  )

  return eliminatedDoneeEvent
}

export function createNewAdminEvent(admin: Address): NewAdmin {
  let newAdminEvent = changetype<NewAdmin>(newMockEvent())

  newAdminEvent.parameters = new Array()

  newAdminEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )

  return newAdminEvent
}

export function createNewDoneeEvent(
  cause: string,
  doneeId: BigInt,
  donee: Address,
  message: string
): NewDonee {
  let newDoneeEvent = changetype<NewDonee>(newMockEvent())

  newDoneeEvent.parameters = new Array()

  newDoneeEvent.parameters.push(
    new ethereum.EventParam("cause", ethereum.Value.fromString(cause))
  )
  newDoneeEvent.parameters.push(
    new ethereum.EventParam(
      "doneeId",
      ethereum.Value.fromUnsignedBigInt(doneeId)
    )
  )
  newDoneeEvent.parameters.push(
    new ethereum.EventParam("donee", ethereum.Value.fromAddress(donee))
  )
  newDoneeEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )

  return newDoneeEvent
}

export function createNewDoneeRequestEvent(
  donee: Address,
  message: string
): NewDoneeRequest {
  let newDoneeRequestEvent = changetype<NewDoneeRequest>(newMockEvent())

  newDoneeRequestEvent.parameters = new Array()

  newDoneeRequestEvent.parameters.push(
    new ethereum.EventParam("donee", ethereum.Value.fromAddress(donee))
  )
  newDoneeRequestEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )

  return newDoneeRequestEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createReadyToRemoveEvent(
  cause: string,
  id: BigInt,
  wallet: Address
): ReadyToRemove {
  let readyToRemoveEvent = changetype<ReadyToRemove>(newMockEvent())

  readyToRemoveEvent.parameters = new Array()

  readyToRemoveEvent.parameters.push(
    new ethereum.EventParam("cause", ethereum.Value.fromString(cause))
  )
  readyToRemoveEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  readyToRemoveEvent.parameters.push(
    new ethereum.EventParam("wallet", ethereum.Value.fromAddress(wallet))
  )

  return readyToRemoveEvent
}

export function createRedFlagEvent(
  cause: string,
  doneeId: BigInt,
  donee: Address,
  admin: Address
): RedFlag {
  let redFlagEvent = changetype<RedFlag>(newMockEvent())

  redFlagEvent.parameters = new Array()

  redFlagEvent.parameters.push(
    new ethereum.EventParam("cause", ethereum.Value.fromString(cause))
  )
  redFlagEvent.parameters.push(
    new ethereum.EventParam(
      "doneeId",
      ethereum.Value.fromUnsignedBigInt(doneeId)
    )
  )
  redFlagEvent.parameters.push(
    new ethereum.EventParam("donee", ethereum.Value.fromAddress(donee))
  )
  redFlagEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )

  return redFlagEvent
}

export function createRejectedDoneeEvent(donee: Address): RejectedDonee {
  let rejectedDoneeEvent = changetype<RejectedDonee>(newMockEvent())

  rejectedDoneeEvent.parameters = new Array()

  rejectedDoneeEvent.parameters.push(
    new ethereum.EventParam("donee", ethereum.Value.fromAddress(donee))
  )

  return rejectedDoneeEvent
}

export function createSummedToThePoolEvent(amount: BigInt): SummedToThePool {
  let summedToThePoolEvent = changetype<SummedToThePool>(newMockEvent())

  summedToThePoolEvent.parameters = new Array()

  summedToThePoolEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return summedToThePoolEvent
}

export function createWithdrawalEvent(
  doneeId: BigInt,
  donee: Address,
  proceeds: BigInt
): Withdrawal {
  let withdrawalEvent = changetype<Withdrawal>(newMockEvent())

  withdrawalEvent.parameters = new Array()

  withdrawalEvent.parameters.push(
    new ethereum.EventParam(
      "doneeId",
      ethereum.Value.fromUnsignedBigInt(doneeId)
    )
  )
  withdrawalEvent.parameters.push(
    new ethereum.EventParam("donee", ethereum.Value.fromAddress(donee))
  )
  withdrawalEvent.parameters.push(
    new ethereum.EventParam(
      "proceeds",
      ethereum.Value.fromUnsignedBigInt(proceeds)
    )
  )

  return withdrawalEvent
}
