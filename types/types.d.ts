import type typia from "typia";

export type DecodeProtoFactory<T> = (input: Uint8Array) => typia.Resolved<T>;
export type EncodeProtoFactory<T> = (input: T) => Uint8Array;
