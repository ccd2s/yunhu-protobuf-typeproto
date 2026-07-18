import type { ProtoModel, InferProtoModel, InferProtoModelInput } from "@saltify/typeproto";

export type DecodeProtoFactory<T$1 extends ProtoModel> = (input: Buffer) => InferProtoModel<T$1>;
export type EncodeProtoFactory<T$1 extends ProtoModel> = (
  input: InferProtoModelInput<T$1>
) => Buffer;
