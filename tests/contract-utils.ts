import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  ApprovalForAll,
  ContributionCreated,
  DatasetCreated,
  OwnershipTransferred,
  RequestCreated,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  TransferBatch,
  TransferSingle,
  URI,
  assertionVote,
  contributionAssertionCreated,
  datasetAssertionCreated
} from "../generated/Contract/Contract"

export function createApprovalForAllEvent(
  account: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createContributionCreatedEvent(
  assertionId: Bytes,
  formID: BigInt,
  contributionCID: string,
  rows: BigInt,
  contributor: Address
): ContributionCreated {
  let contributionCreatedEvent = changetype<ContributionCreated>(newMockEvent())

  contributionCreatedEvent.parameters = new Array()

  contributionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "assertionId",
      ethereum.Value.fromFixedBytes(assertionId)
    )
  )
  contributionCreatedEvent.parameters.push(
    new ethereum.EventParam("formID", ethereum.Value.fromUnsignedBigInt(formID))
  )
  contributionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "contributionCID",
      ethereum.Value.fromString(contributionCID)
    )
  )
  contributionCreatedEvent.parameters.push(
    new ethereum.EventParam("rows", ethereum.Value.fromUnsignedBigInt(rows))
  )
  contributionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "contributor",
      ethereum.Value.fromAddress(contributor)
    )
  )

  return contributionCreatedEvent
}

export function createDatasetCreatedEvent(
  tokenId: BigInt,
  formCID: string,
  mintPrice: BigInt,
  tokenTreasury: Address
): DatasetCreated {
  let datasetCreatedEvent = changetype<DatasetCreated>(newMockEvent())

  datasetCreatedEvent.parameters = new Array()

  datasetCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  datasetCreatedEvent.parameters.push(
    new ethereum.EventParam("formCID", ethereum.Value.fromString(formCID))
  )
  datasetCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "mintPrice",
      ethereum.Value.fromUnsignedBigInt(mintPrice)
    )
  )
  datasetCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenTreasury",
      ethereum.Value.fromAddress(tokenTreasury)
    )
  )

  return datasetCreatedEvent
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

export function createRequestCreatedEvent(
  formID: BigInt,
  requestName: string,
  requestDescription: string,
  category: string,
  dataFormatCID: string,
  requiredEntries: BigInt,
  minSubRows: BigInt,
  creator: Address,
  claimGroups: string
): RequestCreated {
  let requestCreatedEvent = changetype<RequestCreated>(newMockEvent())

  requestCreatedEvent.parameters = new Array()

  requestCreatedEvent.parameters.push(
    new ethereum.EventParam("formID", ethereum.Value.fromUnsignedBigInt(formID))
  )
  requestCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "requestName",
      ethereum.Value.fromString(requestName)
    )
  )
  requestCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "requestDescription",
      ethereum.Value.fromString(requestDescription)
    )
  )
  requestCreatedEvent.parameters.push(
    new ethereum.EventParam("category", ethereum.Value.fromString(category))
  )
  requestCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "dataFormatCID",
      ethereum.Value.fromString(dataFormatCID)
    )
  )
  requestCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "requiredEntries",
      ethereum.Value.fromUnsignedBigInt(requiredEntries)
    )
  )
  requestCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "minSubRows",
      ethereum.Value.fromUnsignedBigInt(minSubRows)
    )
  )
  requestCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  requestCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "claimGroups",
      ethereum.Value.fromString(claimGroups)
    )
  )

  return requestCreatedEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferSingleEvent
}

export function createURIEvent(value: string, id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uriEvent
}

export function createassertionVoteEvent(
  assertionID: Bytes,
  voter: Address,
  vote: boolean
): assertionVote {
  let assertionVoteEvent = changetype<assertionVote>(newMockEvent())

  assertionVoteEvent.parameters = new Array()

  assertionVoteEvent.parameters.push(
    new ethereum.EventParam(
      "assertionID",
      ethereum.Value.fromFixedBytes(assertionID)
    )
  )
  assertionVoteEvent.parameters.push(
    new ethereum.EventParam("voter", ethereum.Value.fromAddress(voter))
  )
  assertionVoteEvent.parameters.push(
    new ethereum.EventParam("vote", ethereum.Value.fromBoolean(vote))
  )

  return assertionVoteEvent
}

export function createcontributionAssertionCreatedEvent(
  formID: BigInt,
  assertionID: Bytes
): contributionAssertionCreated {
  let contributionAssertionCreatedEvent = changetype<
    contributionAssertionCreated
  >(newMockEvent())

  contributionAssertionCreatedEvent.parameters = new Array()

  contributionAssertionCreatedEvent.parameters.push(
    new ethereum.EventParam("formID", ethereum.Value.fromUnsignedBigInt(formID))
  )
  contributionAssertionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "assertionID",
      ethereum.Value.fromFixedBytes(assertionID)
    )
  )

  return contributionAssertionCreatedEvent
}

export function createdatasetAssertionCreatedEvent(
  formID: BigInt,
  assertionID: Bytes
): datasetAssertionCreated {
  let datasetAssertionCreatedEvent = changetype<datasetAssertionCreated>(
    newMockEvent()
  )

  datasetAssertionCreatedEvent.parameters = new Array()

  datasetAssertionCreatedEvent.parameters.push(
    new ethereum.EventParam("formID", ethereum.Value.fromUnsignedBigInt(formID))
  )
  datasetAssertionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "assertionID",
      ethereum.Value.fromFixedBytes(assertionID)
    )
  )

  return datasetAssertionCreatedEvent
}
