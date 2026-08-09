import { ProtoField, ProtoMessage } from "@saltify/typeproto";
import { PV1, PWss } from "../index.ts";

export namespace PMsg {
  export const ListMessageData = ProtoMessage.of({
    /** 消息 ID */
    msgId: ProtoField(1, "string"),
    /** 发送者 */
    sender: ProtoField(2, () => PWss.PushMessageSender),
    /** 消息位置: 左边 left/右边 right */
    direction: ProtoField(3, "string"),
    /** 消息类型 */
    contentType: ProtoField(4, "int32"),
    /** 消息内容 */
    content: ProtoField(5, () => PWss.PushMessageContent),
    /** 时间戳(毫秒) */
    sendTimestampMs: ProtoField(6, "uint64"),
    /** 指令 */
    cmd: ProtoField(7, () => PWss.PushMessageCmd),
    /** 撤回消息时间 */
    recallTimestamp: ProtoField(8, "uint64"),
    /** 引用消息ID */
    quoteMsgId: ProtoField(9, "string"),
    /** 消息序列 */
    msgSeq: ProtoField(10, "uint32"),
    /** 最后编辑时间 */
    editTimestamp: ProtoField(12, "uint64")
  });

  /**
   * 列出消息列表。同时适用于 list-message、list-message-by-mid-seq 和 list-message-by-seq
   */
  export const ListMessage = ProtoMessage.of({
    status: ProtoField(1, () => PV1.Status),
    data: ProtoField(2, ListMessageData, "repeated"),
    total: ProtoField(3, "int32")
  });
}

export namespace PMsgSend {
  /**
   * 发送信息。同时适用于 edit-message
   */
  export const SendMsg = ProtoMessage.of({
    /** 信息 ID */
    msgId: ProtoField(2, "string"),
    /** 欲发送到的信息对象 */
    chatId: ProtoField(3, "string"),
    /** 欲发送到的信息对象的类别 */
    chatType: ProtoField(4, "int32"),
    data: ProtoField(5, () => PWss.PushMessageContent),
    /** 信息类别 */
    contentType: ProtoField(6, "int32"),
    /** 所使用命令 ID */
    commandId: ProtoField(7, "int64", "optional"),
    /** 引用信息 ID */
    quoteMsgId: ProtoField(8, "string", "optional")
  });

  /**
   * 按消息 ID 或 SEQ 列出消息
   */
  export const SendListMessageByMidSeq = ProtoMessage.of({
    /** 与 msgId 二选一，msgSeq 优先，填 -1 以使用 msgId */
    msgSeq: ProtoField(3, "int32"),
    /** 欲获取的信息对象的类别 */
    chatType: ProtoField(4, "int32"),
    /** 欲获取的信息对象 */
    chatId: ProtoField(5, "string"),
    field6: ProtoField(6, "uint64", "optional"),
    /** 获取的消息数 */
    msgCount: ProtoField(7, "int32"),
    /** 与 msgSeq 二选一 */
    msgId: ProtoField(8, "string")
  });

  /**
   * 按消息 SEQ 列出消息，一般用来列出最新消息（距离最新消息大于 30 个只会返回最新消息）
   */
  export const SendListMsgBySeq = ProtoMessage.of({
    /** 从第 N 个消息开始，填 0 列出最新消息 */
    msgStart: ProtoField(3, "uint32"),
    /** 欲获取的信息对象的类别 */
    chatType: ProtoField(4, "int32"),
    /** 欲获取的信息对象 */
    chatId: ProtoField(5, "string")
  });

  /**
   * 列出消息。列出的是指定消息 ID 前的消息
   */
  export const SendListMsg = ProtoMessage.of({
    /** 获取消息数 */
    msgCount: ProtoField(2, "int32"),
    /** 从指定消息 ID 开始 */
    msgId: ProtoField(3, "string"),
    /** 欲获取的信息对象的类别 */
    chatType: ProtoField(4, "int32"),
    /** 欲获取的信息对象 */
    chatId: ProtoField(5, "string")
  });
}
