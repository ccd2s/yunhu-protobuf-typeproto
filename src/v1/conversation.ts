import { ProtoField, ProtoMessage } from "@saltify/typeproto";
import { PV1 } from "./index.ts";

export namespace PConversation {
  export const ConversationAtData = ProtoMessage.of({
    /** 似乎是名称 ID */
    field1: ProtoField(1, "uint64"),
    /** 被@的 ID,感觉没啥用 */
    mentionedId: ProtoField(2, "string"),
    /** 被@的名称,感觉也没啥用 */
    mentionedName: ProtoField(3, "string"),
    /** @消息所属的对话 ID(例如群 ID),感觉还没啥用 */
    mentionedIn: ProtoField(4, "string"),
    /** 发起@的对象 ID */
    mentionerId: ProtoField(6, "string"),
    /** 发起@对象的名称 */
    mentionerName: ProtoField(7, "string"),
    /** 发起@的消息序列 */
    msgSeq: ProtoField(8, "uint64")
  });

  export const ConversationListData = ProtoMessage.of({
    /** 对象 ID */
    chatId: ProtoField(1, "string"),
    /** 对象类型 */
    chatType: ProtoField(2, "int32"),
    /** 备注名称 */
    remark: ProtoField(3, "string"),
    /** 消息内容 */
    chatContent: ProtoField(4, "string"),
    /** 加入对话列表时间戳(毫秒) */
    timestampMs: ProtoField(5, "uint64"),
    /** 未读消息数 */
    unreadMsg: ProtoField(6, "int32"),
    /** 是否被@ */
    at: ProtoField(7, "bool"),
    /** 头像 ID */
    avatarId: ProtoField(8, "uint64"),
    /** 头像 URL */
    avatarUrl: ProtoField(9, "string"),
    /** 免打扰 */
    doNotDisturb: ProtoField(11, "bool"),
    /** 消息发送时间戳(秒) */
    sendTimestamp: ProtoField(12, "uint64"),
    /** 是否为 VIP */
    isVip: ProtoField(13, "bool"),
    /** @数据 */
    atData: ProtoField(14, ConversationAtData),
    /** 用户真实名称 */
    name: ProtoField(15, "string"),
    /** 认证,1-官方, 2-地区 */
    certificationLevel: ProtoField(16, "int32")
  });

  /** 获取对话列表 */
  export const ConversationList = ProtoMessage.of({
    status: ProtoField(1, () => PV1.Status),
    data: ProtoField(2, ConversationListData, "repeated"),
    total: ProtoField(3, "int32"),
    md5: ProtoField(4, "string")
  });
}

export namespace PConversationSend {
  /** 获取对话列表 */
  export const ConversationList = ProtoMessage.of({
    /** 上次获取对话的 MD5, 如果与服务端一致则返回空列表 */
    md5: ProtoField(2, "string")
  });
}
