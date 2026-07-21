import { ProtoField, ProtoMessage } from "@saltify/typeproto";

export namespace PV1 {
  /** 请求状态 */
  export const Status = ProtoMessage.of({
    requestId: ProtoField(1, "int64"),
    /** 请求状态码，1为正常 */
    code: ProtoField(2, "int32"),
    /** 返回消息 */
    msg: ProtoField(3, "string")
  });

  /** V1 API Base */
  export const Base = ProtoMessage.of({
    status: ProtoField(1, Status)
  });
}

export * from "./friend.ts";
export * from "./group.ts";
export * from "./msg.ts";
export * from "./user.ts";
