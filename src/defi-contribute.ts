import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import {
  NewAdmin as NewAdminEvent,
  AdminRevoke as AdminRevokeEvent,
  ApprovedDonee as ApprovedDoneeEvent,
  NewDoneeRequest as NewDoneeRequestEvent,
  DoneeRequestCanceled as DoneeRequestCanceledEvent,
  NewDonee as NewDoneeEvent,
  RejectedDonee as RejectedDoneeEvent,
  Donation as DonationEvent,
  RedFlag as RedFlagEvent,
  ReadyToRemove as ReadyToRemoveEvent,
  EliminatedDonee as EliminatedDoneeEvent,
  Withdrawal as WithdrawalEvent,
  SummedToThePool as SummedToThePoolEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/DefiContribute/DefiContribute";
import {
  ActiveAdmin,
  DeletedAdmin,
  ActiveDoneeRequest,
  ApprovedDonee,
  ActiveDonee,
  DeletedDonee,
  Donation,
  RedFlag,
  ReadyToRemove,
  SummedToThePool,
  Withdrawal,
  Owner,
} from "../generated/schema";

let deadAddress = "0x000000000000000000000000000000000000dEaD";

export function handleNewAdmin(event: NewAdminEvent): void {
  let activeAdmin = ActiveAdmin.load(event.params.admin.toHexString());

  if (!activeAdmin) {
    activeAdmin = new ActiveAdmin(event.params.admin.toHexString());
  }

  activeAdmin.admin = event.params.admin;

  activeAdmin.save();
}

export function handleAdminRevoke(event: AdminRevokeEvent): void {
  let deletedAdmin = DeletedAdmin.load(event.params.admin.toHexString());

  if (!deletedAdmin) {
    deletedAdmin = new DeletedAdmin(event.params.admin.toHexString());
  }

  let activeAdmin = ActiveAdmin.load(event.params.admin.toHexString());

  deletedAdmin.admin = event.params.admin;
  activeAdmin!.admin = Address.fromString(deadAddress);

  deletedAdmin.save();
  activeAdmin!.save();
}

export function handleApprovedDonee(event: ApprovedDoneeEvent): void {
  let approvedDonee = ApprovedDonee.load(event.params.donee.toHexString());
  let activeDoneeRequest = ActiveDoneeRequest.load(
    event.params.donee.toHexString()
  );

  if (!approvedDonee) {
    approvedDonee = new ApprovedDonee(event.params.donee.toHexString());
  }

  approvedDonee.donee = event.params.donee;
  activeDoneeRequest!.donee = Address.fromString(deadAddress);
  activeDoneeRequest!.message = "";

  approvedDonee.save();
  activeDoneeRequest!.save();
}

export function handleNewDoneeRequest(event: NewDoneeRequestEvent): void {
  let activeDoneeRequest = ActiveDoneeRequest.load(
    event.params.donee.toHexString()
  );

  if (!activeDoneeRequest) {
    activeDoneeRequest = new ActiveDoneeRequest(
      event.params.donee.toHexString()
    );
  }

  activeDoneeRequest.donee = event.params.donee;
  activeDoneeRequest.message = event.params.message;

  activeDoneeRequest.save();
}

export function handleDoneeRequestCanceled(
  event: DoneeRequestCanceledEvent
): void {
  let activeDoneeRequest = ActiveDoneeRequest.load(
    event.params.donee.toHexString()
  );

  activeDoneeRequest!.donee = Address.fromString(deadAddress);
  activeDoneeRequest!.message = "";

  activeDoneeRequest!.save();
}

export function handleNewDonee(event: NewDoneeEvent): void {
  let activeDonee = ActiveDonee.load(event.params.doneeId.toHexString());
  let activeDoneeRequest = ActiveDoneeRequest.load(
    event.params.donee.toHexString()
  );

  if (!activeDonee) {
    activeDonee = new ActiveDonee(event.params.doneeId.toHexString());
  }

  activeDonee.cause = event.params.cause;
  activeDonee.donee = event.params.donee;
  activeDonee.doneeId = event.params.doneeId;
  activeDonee.message = event.params.message;

  activeDoneeRequest!.donee = Bytes.fromHexString(deadAddress);
  activeDoneeRequest!.message = "";

  activeDonee.save();
  activeDoneeRequest!.save();
}

export function handleRejectedDonee(event: RejectedDoneeEvent): void {
  let activeDoneeRequest = ActiveDoneeRequest.load(
    event.params.donee.toHexString()
  );

  activeDoneeRequest!.donee = Address.fromString(deadAddress);

  activeDoneeRequest!.save();
}

export function handleDonation(event: DonationEvent): void {
  let donation = new Donation(
    event.params.from.toHexString() + event.block.number.toHexString()
  );

  donation.to = event.params.to;
  donation.from = event.params.from;
  donation.amount = event.params.amount;

  donation.save();
}

export function handleRedFlag(event: RedFlagEvent): void {
  let redFlag = RedFlag.load(event.params.doneeId.toHexString());

  if (!redFlag) {
    redFlag = new RedFlag(event.params.doneeId.toHexString());
  }

  redFlag.cause = event.params.cause;
  redFlag.doneeId = event.params.doneeId;
  redFlag.donee = event.params.donee;
  redFlag.admin = event.params.admin;

  redFlag.save();
}

export function handleReadyToRemove(event: ReadyToRemoveEvent): void {
  let readyToRemove = ReadyToRemove.load(event.params.id.toHexString());

  if (!readyToRemove) {
    readyToRemove = new ReadyToRemove(event.params.id.toHexString());
  }

  readyToRemove.cause = event.params.cause;
  readyToRemove.doneeId = event.params.id;
  readyToRemove.donee = event.params.wallet;

  readyToRemove.save();
}

export function handleEliminatedDonee(event: EliminatedDoneeEvent): void {
  let deletedDonee = DeletedDonee.load(event.params.doneeId.toHexString());
  let activeDonee = ActiveDonee.load(event.params.doneeId.toHexString());

  if (!deletedDonee) {
    deletedDonee = new DeletedDonee(event.params.doneeId.toHexString());
  }

  deletedDonee.cause = event.params.cause;
  deletedDonee.doneeId = event.params.doneeId;
  deletedDonee.donee = event.params.donee;

  activeDonee!.cause = "";
  activeDonee!.donee = Address.fromString(deadAddress);
  activeDonee!.doneeId = BigInt.fromI32(0);
  activeDonee!.message = "";

  deletedDonee.save();
  activeDonee!.save();
}

export function handleWithdrawal(event: WithdrawalEvent): void {
  let withdrawal = Withdrawal.load(
    event.params.doneeId.toHexString() + event.block.number.toHexString()
  );

  if (!withdrawal) {
    withdrawal = new Withdrawal(
      event.params.doneeId.toHexString() + event.block.number.toHexString()
    );
  }

  withdrawal.doneeId = event.params.doneeId;
  withdrawal.donee = event.params.donee;
  withdrawal.proceeds = event.params.proceeds;

  withdrawal.save();
}

export function handleSummedToThePool(event: SummedToThePoolEvent): void {
  let summedToThePool = SummedToThePool.load(
    event.params.amount.toHexString() + event.block.number.toHexString()
  );

  if (!summedToThePool) {
    summedToThePool = new SummedToThePool(
      event.params.amount.toHexString() + event.block.number.toHexString()
    );
  }

  summedToThePool.amount = event.params.amount;

  summedToThePool.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  // Index the new owner of the contract
  let owner = Owner.load(event.params.newOwner.toHexString());
  if (!owner) {
    owner = new Owner(event.params.newOwner.toHexString());
  }
  owner.owner = event.params.newOwner;

  owner.save();
}
