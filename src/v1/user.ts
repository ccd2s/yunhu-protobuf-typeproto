import { ProtoField, ProtoMessage } from "@saltify/typeproto";
import { PV1 } from "./index.ts";

export namespace PUser {
  export const SelfInfoData = ProtoMessage.of({
    id: ProtoField(1, "string"),
    name: ProtoField(2, "string"),
    avatarUrl: ProtoField(4, "string"),
    avatarId: ProtoField(5, "int64"),
    phone: ProtoField(6, "string"),
    email: ProtoField(7, "string"),
    coin: ProtoField(8, "double"),
    isVip: ProtoField(9, "bool"),
    vipExpiredTime: ProtoField(10, "int64"),
    invitationCode: ProtoField(12, "string")
  });

  /**
   * 获取自身信息
   */
  export const SelfInfo = ProtoMessage.of({
    status: ProtoField(1, () => PV1.Status),
    data: ProtoField(2, SelfInfoData)
  });
}
