import { ProtoField, ProtoMessage } from "@saltify/typeproto";
import { PWss } from "../index.ts";

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
}
