import { ProtoField, ProtoMessage } from "@saltify/typeproto";
import { PGroup } from "./group.ts";

export namespace PGroupTagSend {
  /**
   * 获取标签绑定的用户列表
   *
   * 响应 {@link PGroup.ListMember}
   */
  export const TagMember = ProtoMessage.of({
    pagination: ProtoField(2, () => PGroup.Pagination),
    /** 标签所处群聊 ID */
    groupId: ProtoField(3, "string"),
    /** 标签 ID */
    tagId: ProtoField(4, "int64")
  });
}
