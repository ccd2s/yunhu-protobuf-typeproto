import { ProtoField, ProtoMessage } from "@saltify/typeproto";

export namespace PWss {
  export type CmdMap =
    | "heartbeat_ack"
    | "push_message"
    | "draft_input"
    | "edit_message"
    | "invite_apply"
    | "bot_board_message";

  export const Base = ProtoMessage.of({
    /** 消息 ID */
    id: ProtoField(1, "string"),
    /** 返回消息 */
    cmd: ProtoField(2, "string")
  });

  export const Heartbeat = ProtoMessage.of({
    base: ProtoField(1, Base)
  });

  export const PushMessageTag = ProtoMessage.of({
    id: ProtoField(1, "uint64"),
    groupId: ProtoField(2, "string"),
    text: ProtoField(3, "string"),
    color: ProtoField(4, "string")
  });

  export const PushMessageSender = ProtoMessage.of({
    chatId: ProtoField(1, "string"),
    chatType: ProtoField(2, "int32"),
    name: ProtoField(3, "string"),
    avatarUrl: ProtoField(4, "string"),
    /** 标签(旧版显示) */
    tagOld: ProtoField(6, "string", "repeated"),
    /** 标签 */
    tag: ProtoField(7, PushMessageTag, "repeated")
  });

  export const PushMessageCmd = ProtoMessage.of({
    /** 命令ID */
    cmdId: ProtoField(1, "uint64"),
    /** 命令名称 */
    name: ProtoField(2, "string"),
    /** 指令类型（1-普通指令, 2-直发指令, 5-自定义输入指令） */
    type: ProtoField(4, "int32")
  });

  export const PushMessageContent = ProtoMessage.of({
    /** 消息内容 */
    text: ProtoField(1, "string"),
    /** 按钮 */
    buttons: ProtoField(2, "string"),
    /** 图片链接 */
    imageUrl: ProtoField(3, "string"),
    /** 文件名称 */
    fileName: ProtoField(4, "string"),
    /** 文件链接 */
    fileUrl: ProtoField(5, "string"),
    /** 提及的对象 ID ,可以填写多个 */
    mentionedId: ProtoField(6, "string", "repeated"),
    /** 表单消息 */
    form: ProtoField(7, "string"),
    /** 引用消息文字 */
    quoteMsgText: ProtoField(8, "string"),
    /** 表情URL */
    stickerUrl: ProtoField(9, "string"),
    /** 文章ID */
    postId: ProtoField(10, "string"),
    /** 文章标题 */
    postTitle: ProtoField(11, "string"),
    /** 文章内容 */
    postContent: ProtoField(12, "string"),
    /** 文章类型 */
    postContentType: ProtoField(13, "string"),
    /** 个人表情 ID */
    expressionId: ProtoField(15, "string"),
    /** 引用图片直链 */
    quoteImageUrl: ProtoField(16, "string"),
    /** 引用图片文件名称 */
    quoteImageName: ProtoField(17, "string"),
    /** 文件/图片大小(字节) */
    fileSize: ProtoField(18, "int64"),
    /** 视频 URL */
    videoUrl: ProtoField(19, "string"),
    /** 视频时长 */
    videoTime: ProtoField(20, "int32"),
    /** 语音 URL */
    audioUrl: ProtoField(21, "string"),
    /** 语音时长 */
    audioTime: ProtoField(22, "int32"),
    /** 引用视频直链 */
    quoteVideoUrl: ProtoField(23, "string"),
    /** 引用视频时长 */
    quoteVideoTime: ProtoField(24, "int32"),
    /** 表情 ID */
    stickerItemId: ProtoField(25, "int64"),
    /** 表情包 ID */
    stickerPackId: ProtoField(26, "int64"),
    /** 语音房间发送显示信息的文本 */
    roomName: ProtoField(29, "string"),
    /** 语音通话状态文字 */
    callStatusText: ProtoField(32, "string"),
    /** 图片的宽度 */
    width: ProtoField(33, "int32"),
    /** 图片的高度 */
    height: ProtoField(34, "int32"),
    /** 提示信息 */
    tip: ProtoField(37, "string")
  });

  export const PushMessageMsg = ProtoMessage.of({
    /** 消息 ID */
    msgId: ProtoField(1, "string"),
    /** 发送者,编辑消息无此项 */
    sender: ProtoField(2, PushMessageSender),
    /** 接收者ID */
    receiverId: ProtoField(3, "string"),
    /** 会话的ID */
    chatId: ProtoField(4, "string"),
    /** 会话类型,编辑消息无此项 */
    chatType: ProtoField(5, "int32"),
    /** 消息内容 */
    content: ProtoField(6, PushMessageContent),
    /** 消息类型 */
    contentType: ProtoField(7, "int32"),
    /** 时间戳(毫秒),编辑消息无此项 */
    //timestamp: ProtoField(8, "number"),
    /** 指令,编辑消息无此项(客户端限制不让编辑指令消息) */
    cmd: ProtoField(9, PushMessageCmd),
    /** 撤回消息时间,和 8 差别不大,编辑消息无此项 */
    deleteTimestamp: ProtoField(10, "uint64"),
    /** 引用消息ID */
    quoteMsgId: ProtoField(11, "string"),
    /** 消息序列 */
    msgSeq: ProtoField(12, "uint64"),
    /** 编辑时间,只有编辑消息有此项 */
    editTime: ProtoField(14, "uint64")
  });

  export const PushMessageData = ProtoMessage.of({
    any: ProtoField(1, "string"),
    value: ProtoField(2, PushMessageMsg)
  });

  export const PushMessage = ProtoMessage.of({
    base: ProtoField(1, Base),
    data: ProtoField(2, PushMessageData)
  });

  /** 草稿详情 */
  export const Draft = ProtoMessage.of({
    chatId: ProtoField(1, "string"),
    input: ProtoField(2, "string")
  });

  /** Data 数据层 */
  export const DraftInputData = ProtoMessage.of({
    any: ProtoField(1, "string"),
    value: ProtoField(2, Draft)
  });

  /** 主消息结构 */
  export const DraftInput = ProtoMessage.of({
    base: ProtoField(1, Base),
    data: ProtoField(2, DraftInputData)
  });

  /** 看板 */
  export const BotBoard = ProtoMessage.of({
    botId: ProtoField(1, "string"),
    chatId: ProtoField(2, "string"),
    chatType: ProtoField(3, "int32"),
    content: ProtoField(4, "string"),
    contentType: ProtoField(5, "int32"),
    lastUpdateTime: ProtoField(6, "int64"),
    botName: ProtoField(7, "string")
  });

  /** Data 数据层 */
  export const BotBoardMessageData = ProtoMessage.of({
    any: ProtoField(1, "string"),
    value: ProtoField(2, BotBoard)
  });

  /** 主消息结构 */
  export const BotBoardMessage = ProtoMessage.of({
    base: ProtoField(1, Base),
    data: ProtoField(2, BotBoardMessageData)
  });
}
