import { ProtoField, ProtoMessage } from "@saltify/typeproto";
import { PV1 } from "./index.ts";
import { PWss } from "../index.ts";

export namespace PGroup {
  export const GroupData = ProtoMessage.of({
    groupId: ProtoField(1, "string"),
    name: ProtoField(2, "string"),
    avatarUrl: ProtoField(3, "string"),
    /** 头像 ID */
    avatarId: ProtoField(4, "uint64"),
    introduction: ProtoField(5, "string"),
    /** 群人数 */
    headcount: ProtoField(6, "uint64"),
    /** 创建者 */
    createBy: ProtoField(7, "string"),
    /** 进群免审核 */
    directJoin: ProtoField(8, "bool"),
    /** 权限等级 */
    permissionLevel: ProtoField(9, "int32"),
    /** 历史消息 */
    historyMsg: ProtoField(10, "bool"),
    /** 分类名 */
    categoryName: ProtoField(11, "string"),
    /** 分类 ID */
    categoryId: ProtoField(12, "uint64"),
    /** 是否为私有群聊 */
    private: ProtoField(13, "bool"),
    /** 免打扰 */
    doNotDisturb: ProtoField(14, "bool"),
    /** 加入的社区 ID */
    communityId: ProtoField(15, "uint64"),
    /** 加入的社区名 */
    communityName: ProtoField(16, "string"),
    /** 封禁 ID */
    banId: ProtoField(17, "int64"),
    /** 封禁截至时间,时区 UTC+8 */
    banUntilTimestamp: ProtoField(18, "int64"),
    /** 会话置顶 */
    top: ProtoField(19, "bool"),
    /** 管理员列表 */
    admin: ProtoField(20, "string", "repeated"),
    /** 群聊创建时间 */
    createTimestamp: ProtoField(21, "uint64"),
    /** 被限制的消息类型,例如 1,2,3 */
    limitedMsgType: ProtoField(22, "string"),
    /** 群主 */
    owner: ProtoField(23, "string"),
    /** 是否加入群推荐 */
    recommendation: ProtoField(24, "bool"),
    /** 是否被禁言 */
    isGag: ProtoField(25, "int64"),
    /** 标签(旧版) */
    tagOld: ProtoField(26, "string", "repeated"),
    tag: ProtoField(27, () => PWss.PushMessageTag, "repeated"),
    /** 我的群昵称 */
    myGroupNickname: ProtoField(28, "string"),
    /** 群口令 */
    groupCode: ProtoField(29, "string"),
    /** 隐藏群成员（开启时为 1） */
    hideGroupMembers: ProtoField(30, "bool"),
    field31: ProtoField(31, "int64"),
    /** 消息自动销毁时间 */
    autoDeleteMessage: ProtoField(32, "bool"),
    /** 禁止群成员上传文件到群云盘（开启时为 1） */
    denyMembersUploadToGroupDisk: ProtoField(33, "bool"),
    /** 封禁原因 */
    banReason: ProtoField(34, "string")
  });

  export const BotData = ProtoMessage.of({
    /** 机器人 ID */
    botId: ProtoField(1, "string"),
    /** 机器人名称 */
    name: ProtoField(2, "string"),
    /** 机器人名称 ID */
    nameId: ProtoField(3, "int64"),
    /** 机器人头像 URL */
    avatarUrl: ProtoField(4, "string"),
    /** 机器人头像 ID */
    avatarId: ProtoField(5, "int64"),
    /** 机器人介绍 */
    introduction: ProtoField(6, "string"),
    /** 机器人创建者 ID */
    createBy: ProtoField(7, "string"),
    /** 机器人创建时间戳 */
    createTimestamp: ProtoField(8, "int64"),
    /** 使用人数 */
    headcount: ProtoField(9, "int64"),
    /** 是否为私有: 0-公开，1-私有 */
    private: ProtoField(10, "bool"),
    /** 是否停用: 0-启用，1-停用 */
    isStop: ProtoField(11, "bool"),
    /** 自动进群: 0-不自动进群，1-自动进群 */
    alwaysAgree: ProtoField(13, "bool"),
    /** 禁止删除 */
    preventDeletion: ProtoField(14, "bool"),
    /** 免打扰: 0-不免打扰，1-免打扰 */
    doNotDisturb: ProtoField(15, "bool"),
    /** 封禁 ID */
    banId: ProtoField(16, "int64"),
    /** 封禁截至时间,时区 UTC+8 */
    banUntilTimestamp: ProtoField(17, "int64"),
    /** 置顶: 0-未置顶，1-已置顶 */
    top: ProtoField(18, "bool"),
    /** 是否删除,客户端会显示个已删除的标,虽然说实际上压根碰不到看到这个标的情况 */
    isDeleted: ProtoField(19, "bool"),
    /** 限制进群: 0-允许进群，1-限制进群 */
    groupLimit: ProtoField(20, "bool"),
    field21: ProtoField(21, "int32"),
    /** 封禁原因 */
    banReason: ProtoField(22, "string")
  });

  /** 获取群聊信息 */
  export const GroupInfo = ProtoMessage.of({
    status: ProtoField(1, () => PV1.Status),
    data: ProtoField(2, GroupData),
    bot: ProtoField(3, BotData, "repeated")
  });
}

export namespace PGroupSend {
  /** 获取群聊信息 */
  export const GroupInfo = ProtoMessage.of({
    /** 群聊 ID */
    groupId: ProtoField(2, "string")
  });

  /** 编辑群聊信息 */
  export const EditGroup = ProtoMessage.of({
    groupId: ProtoField(2, "string"),
    /** 群聊名称 */
    name: ProtoField(3, "string"),
    /** 群聊简介 */
    introduction: ProtoField(4, "string"),
    /** 群聊头像 url */
    avatarUrl: ProtoField(5, "string"),
    /** 进群免审核 */
    directJoin: ProtoField(6, "bool"),
    /** 历史消息 */
    historyMsg: ProtoField(7, "bool"),
    /** 分类名 */
    categoryName: ProtoField(8, "string"),
    /** 分类ID */
    categoryId: ProtoField(9, "uint64"),
    /** 是否私有 */
    private: ProtoField(10, "bool"),
    /** 隐藏群成员 */
    hideGroupMembers: ProtoField(11, "bool")
  });
}
