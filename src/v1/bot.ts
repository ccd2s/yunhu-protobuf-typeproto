import { ProtoField, ProtoMessage } from "@saltify/typeproto";
import { PV1, PWss, PGroup } from "../index.ts";

export namespace PBot {
  /**
   * 获取机器人信息
   */
  export const BotInfo = ProtoMessage.of({
    status: ProtoField(1, () => PV1.Status),
    data: ProtoField(2, () => PGroup.BotData)
  });

  /**
   * 获取机器人群聊看板
   */
  export const Board = ProtoMessage.of({
    status: ProtoField(1, () => PV1.Status),
    data: ProtoField(2, () => PWss.BotBoard)
  });

  /**
   * 创建机器人
   */
  export const CreateBot = ProtoMessage.of({
    status: ProtoField(1, () => PV1.Status),
    data: ProtoField(2, () => PGroup.BotData)
  });

  /**
   * 获取使用者列表
   */
  export const ListFollower = ProtoMessage.of({
    status: ProtoField(1, () => PV1.Status),
    user: ProtoField(2, () => PGroup.ListMemberUserInfo, "repeated"),
    total: ProtoField(3, "int32")
  });

  export const GroupListInfo = ProtoMessage.of({
    /** 群聊 ID */
    id: ProtoField(1, "string"),
    /** 群聊名称 */
    name: ProtoField(2, "string"),
    /** 头像 URL */
    avatarUrl: ProtoField(3, "string")
  });

  /**
   * 获取加入群聊列表
   */
  export const JoinGroupList = ProtoMessage.of({
    status: ProtoField(1, () => PV1.Status),
    group: ProtoField(2, GroupListInfo, "repeated"),
    total: ProtoField(3, "int32")
  });
}

export namespace PBotSend {
  /**
   * 获取机器人信息
   */
  export const BotInfo = ProtoMessage.of({
    /** 机器人 ID */
    botId: ProtoField(2, "string")
  });

  /**
   * 获取机器人群聊看板
   */
  export const Board = ProtoMessage.of({
    /** 对象 ID */
    id: ProtoField(3, "string"),
    /** 对象类型 */
    chatType: ProtoField(4, "int32")
  });

  /**
   * 创建机器人
   */
  export const CreateBot = ProtoMessage.of({
    /** 机器人名称 */
    name: ProtoField(2, "string"),
    /** 机器人简介 */
    introduction: ProtoField(3, "string"),
    /** 头像 URL */
    avatarUrl: ProtoField(4, "string"),
    /** 是否私有(0-公开，1-私有) */
    private: ProtoField(5, "bool")
  });

  /**
   * 获取使用者列表。同时适用于 `join-group-list`
   */
  export const ListFollower = ProtoMessage.of({
    pagination: ProtoField(2, () => PGroup.Pagination),
    /** 机器人 ID */
    botId: ProtoField(3, "string"),
    /** 搜索关键词 */
    keywords: ProtoField(4, "string")
  });
}
