import {
  ApprovalForAll as ApprovalForAllEvent,
  ContributionCreated as ContributionCreatedEvent,
  DatasetCreated as DatasetCreatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RequestCreated as RequestCreatedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent,
  assertionVote as assertionVoteEvent,
  contributionAssertionCreated as contributionAssertionCreatedEvent,
  datasetAssertionCreated as datasetAssertionCreatedEvent
} from "../generated/Contract/Contract"
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
} from "../generated/schema"

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleContributionCreated(
  event: ContributionCreatedEvent
): void {
  let entity = new ContributionCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.assertionId = event.params.assertionId
  entity.formID = event.params.formID
  entity.contributionCID = event.params.contributionCID
  entity.rows = event.params.rows
  entity.contributor = event.params.contributor

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDatasetCreated(event: DatasetCreatedEvent): void {
  let entity = new DatasetCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.formCID = event.params.formCID
  entity.mintPrice = event.params.mintPrice
  entity.tokenTreasury = event.params.tokenTreasury

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRequestCreated(event: RequestCreatedEvent): void {
  let entity = new RequestCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.formID = event.params.formID
  entity.requestName = event.params.requestName
  entity.requestDescription = event.params.requestDescription
  entity.category = event.params.category
  entity.dataFormatCID = event.params.dataFormatCID
  entity.requiredEntries = event.params.requiredEntries
  entity.minSubRows = event.params.minSubRows
  entity.creator = event.params.creator
  entity.claimGroups = event.params.claimGroups

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferBatch(event: TransferBatchEvent): void {
  let entity = new TransferBatch(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.ids = event.params.ids
  entity.values = event.params.values

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  let entity = new TransferSingle(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.Contract_id = event.params.id
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleURI(event: URIEvent): void {
  let entity = new URI(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.value = event.params.value
  entity.Contract_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleassertionVote(event: assertionVoteEvent): void {
  let entity = new assertionVote(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.assertionID = event.params.assertionID
  entity.voter = event.params.voter
  entity.vote = event.params.vote

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlecontributionAssertionCreated(
  event: contributionAssertionCreatedEvent
): void {
  let entity = new contributionAssertionCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.formID = event.params.formID
  entity.assertionID = event.params.assertionID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handledatasetAssertionCreated(
  event: datasetAssertionCreatedEvent
): void {
  let entity = new datasetAssertionCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.formID = event.params.formID
  entity.assertionID = event.params.assertionID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
