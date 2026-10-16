import { ProtoField, ProtoMessage } from "@saltify/typeproto";
import { PV1 } from "./index.ts";

export namespace PInstruction {
  export const GetBotInstructionData = ProtoMessage.of({
    /** 指令 id */
    commandId: ProtoField(1, "uint64"),
    /** 机器人 id */
    botId: ProtoField(2, "string"),
    /** 指令名称 */
    commandName: ProtoField(3, "string"),
    /** 指令类型: 1-普通指令，2-直发指令，5-自定义输入指令 */
    instructionType: ProtoField(5, "int32"),
    /** 指令输入框默认文本 */
    commandDefaultText: ProtoField(7, "string"),
    /** 指令设置 JSON（表单指令，自定义输入指令） */
    commandSettingsJson: ProtoField(10, "string")
  });

  /**
   * 获取机器人私聊指令
   */
  export const GetBotInstruction = ProtoMessage.of({
    status: ProtoField(1, () => PV1.Status),
    data: ProtoField(2, GetBotInstructionData)
  });
}

export namespace PInstructionSend {
  /**
   * 获取机器人私聊指令
   */
  export const GetBotInstruction = ProtoMessage.of({
    botId: ProtoField(3, "string")
  });
}
