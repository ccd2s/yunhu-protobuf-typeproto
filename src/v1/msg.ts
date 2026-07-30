import { ProtoField, ProtoMessage } from "@saltify/typeproto";
import { PV1, PWss } from "../index.ts";

export namespace PMsg {
  export const ListMessageByMidSeqData = ProtoMessage.of({
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
    sendTime: ProtoField(6, "uint64"),
    /** 指令 */
    cmd: ProtoField(7, () => PWss.PushMessageCmd),
    /** 撤回消息时间 */
    recallTime: ProtoField(8, "uint64"),
    /** 引用消息ID */
    quoteMsgId: ProtoField(9, "string"),
    /** 消息序列 */
    msgSeq: ProtoField(10, "uint64"),
    /** 最后编辑时间 */
    editTime: ProtoField(12, "uint64")
  });

  /**
   * 按消息 ID 或 SEQ 列出消息
   */
  export const ListMessageByMidSeq = ProtoMessage.of({
    status: ProtoField(1, () => PV1.Status),
    data: ProtoField(2, ListMessageByMidSeqData, "repeated"),
    total: ProtoField(3, "int32")
  });
}

export namespace PMsgSend {
  /**
   * 发送信息
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
    msgSeq: ProtoField(3, "int64"),
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
}
