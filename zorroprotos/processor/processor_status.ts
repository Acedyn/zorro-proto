/* eslint-disable */

export const protobufPackage = "zorro";

export enum ProcessorStatus {
  /** STARTING - The program is starting */
  STARTING = 0,
  /** IDLE - The program is running but not executing any commands */
  IDLE = 1,
  /** PROCESSING - The program is running and executing commands */
  PROCESSING = 2,
  /** SHUTTING_DOWN - The program received a shutting down command */
  SHUTTING_DOWN = 3,
  /** SHUT_DOWN - The program is now off */
  SHUT_DOWN = 4,
  /** NOT_RESPONDING - No ping received from the processor */
  NOT_RESPONDING = 5,
  UNRECOGNIZED = -1,
}

export function processorStatusFromJSON(object: any): ProcessorStatus {
  switch (object) {
    case 0:
    case "STARTING":
      return ProcessorStatus.STARTING;
    case 1:
    case "IDLE":
      return ProcessorStatus.IDLE;
    case 2:
    case "PROCESSING":
      return ProcessorStatus.PROCESSING;
    case 3:
    case "SHUTTING_DOWN":
      return ProcessorStatus.SHUTTING_DOWN;
    case 4:
    case "SHUT_DOWN":
      return ProcessorStatus.SHUT_DOWN;
    case 5:
    case "NOT_RESPONDING":
      return ProcessorStatus.NOT_RESPONDING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProcessorStatus.UNRECOGNIZED;
  }
}

export function processorStatusToJSON(object: ProcessorStatus): string {
  switch (object) {
    case ProcessorStatus.STARTING:
      return "STARTING";
    case ProcessorStatus.IDLE:
      return "IDLE";
    case ProcessorStatus.PROCESSING:
      return "PROCESSING";
    case ProcessorStatus.SHUTTING_DOWN:
      return "SHUTTING_DOWN";
    case ProcessorStatus.SHUT_DOWN:
      return "SHUT_DOWN";
    case ProcessorStatus.NOT_RESPONDING:
      return "NOT_RESPONDING";
    case ProcessorStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
