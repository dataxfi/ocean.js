import DID from '../DID'
import { Metadata } from '../../ddo/interfaces/Metadata'
import { MetadataAlgorithm } from '../../ddo/interfaces/MetadataAlgorithm'

export interface ComputeJob {
  owner: string
  did?: string
  jobId: string
  dateCreated: string
  dateFinished: string
  status: number
  statusText: string
  algorithmLogUrl: string
  resultsUrl: string[]
  resultsDid?: DID
  inputDID?: string[]
  algoDID?: string
}

export interface ComputeOutput {
  publishAlgorithmLog?: boolean
  publishOutput?: boolean
  providerAddress?: string
  providerUri?: string
  metadata?: Metadata
  metadataUri?: string
  nodeUri?: string
  owner?: string
  secretStoreUri?: string
  whitelist?: string[]
}

export interface ComputeInput {
  documentId: string
  serviceId: number
  transferTxId?: string
}

export interface ComputeAlgorithm {
  did?: string
  serviceIndex?: number
  meta?: MetadataAlgorithm
  transferTxId?: string
  dataToken?: string
}
