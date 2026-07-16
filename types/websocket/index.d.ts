import type { tags } from "typia";

export type TCmdMap =
  | "heartbeat_ack"
  | "push_message"
  | "draft_input"
  | "edit_message"
  | "invite_apply"
  | "bot_board_message";

export interface PWssBase {
  /** 消息 ID */
  id: string & tags.Sequence<1>;
  /** 返回消息 */
  cmd: TCmdMap & tags.Sequence<2>;
}

export interface PWssHeartbeat {
  base: PWssBase & tags.Sequence<1>;
}

export interface PWssPushMessage {
  base: PWssBase & tags.Sequence<1>;
  data: PWssPushMessageData & tags.Sequence<2>;
}

export type PWssPushMessageData = {
  any: string & tags.Sequence<1>;
  value: PWssPushMessageMsg & tags.Sequence<2>;
};

export type PWssPushMessageMsg = {
  /** 消息 ID */
  msgId?: string & tags.Sequence<1>;
  /** 发送者,编辑消息无此项 */
  sender?: PWssPushMessageSender & tags.Sequence<2>;
  /** 接收者ID */
  receiverId?: string & tags.Sequence<3>;
  /** 会话的ID */
  chatId?: string & tags.Sequence<4>;
  /** 会话类型,编辑消息无此项 */
  chatType?: number & tags.Sequence<5> & tags.Type<"int16">;
  /** 消息内容 */
  content?: PWssPushMessageContent & tags.Sequence<6>;
  /** 消息类型 */
  contentType?: number & tags.Sequence<7> & tags.Type<"int16">;
  /** 时间戳(毫秒),编辑消息无此项 */
  //timestamp?: number & tags.Sequence<8> & tags.Type<"uint64">;
  /** 指令,编辑消息无此项(客户端限制不让编辑指令消息) */
  cmd?: PWssPushMessageCmd & tags.Sequence<9>;
  /** 撤回消息时间,和 8 差别不大,编辑消息无此项 */
  deleteTimestamp?: number & tags.Sequence<10> & tags.Type<"uint64">;
  /** 引用消息ID */
  quoteMsgId?: string & tags.Sequence<11>;
  /** 消息序列 */
  msgSeq?: number & tags.Sequence<12> & tags.Type<"uint64">;
  /** 编辑时间,只有编辑消息有此项 */
  editTime?: number & tags.Sequence<14> & tags.Type<"uint64">;
};

export type PWssPushMessageCmd = {
  /** 命令ID */
  cmdId?: number & tags.Sequence<1> & tags.Type<"uint64">;
  /** 命令名称 */
  name?: string & tags.Sequence<2>;
  /** 指令类型（1-普通指令, 2-直发指令, 5-自定义输入指令） */
  type?: number & tags.Sequence<4> & tags.Type<"int32">;
};

export type PWssPushMessageSender = {
  chatId?: string & tags.Sequence<1>;
  chatType?: number & tags.Sequence<2> & tags.Type<"uint64">;
  name?: string & tags.Sequence<3>;
  avatarUrl?: string & tags.Sequence<4>;
  /** 标签(旧版显示) */
  tagOld?: string[] & tags.Sequence<6>;
  /** 标签 */
  tag?: PWssPushMessageTag[] & tags.Sequence<7>;
};

export type PWssPushMessageContent = {
  /** 消息内容 */
  text?: string & tags.Sequence<1>;
  /** 按钮 */
  buttons?: string & tags.Sequence<2>;
  /** 图片链接 */
  imageUrl?: string & tags.Sequence<3>;
  /** 文件名称 */
  fileName?: string & tags.Sequence<4>;
  /** 文件链接 */
  fileUrl?: string & tags.Sequence<5>;
  /** 提及的对象 ID ,可以填写多个 */
  mentioned_id?: string[] & tags.Sequence<6>;
  /** 表单消息 */
  form?: string & tags.Sequence<7>;
  /** 引用消息文字 */
  quoteMsgText?: string & tags.Sequence<8>;
  /** 表情URL */
  stickerUrl?: string & tags.Sequence<9>;
  /** 文章ID */
  postId?: string & tags.Sequence<10>;
  /** 文章标题 */
  postTitle?: string & tags.Sequence<11>;
  /** 文章内容 */
  postContent?: string & tags.Sequence<12>;
  /** 文章类型 */
  postContentType?: string & tags.Sequence<13>;
  /** 个人表情 ID */
  expressionId?: string & tags.Sequence<15>;
  /** 引用图片直链 */
  quoteImageUrl?: string & tags.Sequence<16>;
  /** 引用图片文件名称 */
  quoteImageName?: string & tags.Sequence<17>;
  /** 文件/图片大小(字节) */
  fileSize?: number & tags.Sequence<18> & tags.Type<"int64">;
  /** 视频 URL */
  videoUrl?: string & tags.Sequence<19>;
  /** 视频时长 */
  videoTime?: number & tags.Sequence<20> & tags.Type<"int32">;
  /** 语音 URL */
  audioUrl?: string & tags.Sequence<21>;
  /** 语音时长 */
  audioTime?: number & tags.Sequence<22> & tags.Type<"int32">;
  /** 引用视频直链 */
  quoteVideoUrl?: string & tags.Sequence<23>;
  /** 引用视频时长 */
  quoteVideoTime?: number & tags.Sequence<24> & tags.Type<"int32">;
  /** 表情 ID */
  stickerItemId?: number & tags.Sequence<25> & tags.Type<"int64">;
  /** 表情包 ID */
  stickerPackId?: number & tags.Sequence<26> & tags.Type<"int64">;
  /** 语音房间发送显示信息的文本 */
  roomName?: string & tags.Sequence<29>;
  /** 语音通话状态文字 */
  callStatusText?: string & tags.Sequence<32>;
  /** 图片的宽度 */
  width?: number & tags.Sequence<33> & tags.Type<"int32">;
  /** 图片的高度 */
  height?: number & tags.Sequence<34> & tags.Type<"int32">;
  /** 提示信息 */
  tip?: string & tags.Sequence<37>;
};

export type PWssPushMessageTag = {
  id?: number & tags.Sequence<1> & tags.Type<"uint64">;
  groupId?: string & tags.Sequence<2>;
  text?: string & tags.Sequence<3>;
  color?: string & tags.Sequence<4>;
};

/** 主消息结构 */
export type PWssDraftInput = {
  base: PWssBase & tags.Sequence<1>;
  data: PWssDraftInputData & tags.Sequence<2>;
};

/** Data 数据层 */
export type PWssDraftInputData = {
  any?: string & tags.Sequence<1>;
  value?: PWssDraft & tags.Sequence<2>;
};

/** 草稿详情 */
export type PWssDraft = {
  chatId: string & tags.Sequence<1>;
  input: string & tags.Sequence<2>;
};

/** 主消息结构 */
export type PWssBotBoardMessage = {
  base: PWssBase & tags.Sequence<1>;
  data: PWssBotBoardMessageData & tags.Sequence<2>;
};

/** Data 数据层 */
export type PWssBotBoardMessageData = {
  any?: string & tags.Sequence<1>;
  value?: PWssBotBoard & tags.Sequence<2>;
};

/** 看板 */
export type PWssBotBoard = {
  botId?: string & tags.Sequence<1>;
  chatId?: string & tags.Sequence<2>;
  chatType?: number & tags.Sequence<3> & tags.Type<"int16">;
  content?: string & tags.Sequence<4>;
  contentType?: number & tags.Sequence<5> & tags.Type<"int16">;
  last_update_time?: number & tags.Sequence<6> & tags.Type<"int64">;
  bot_name?: string & tags.Sequence<7>;
};
