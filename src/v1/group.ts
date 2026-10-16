import { ProtoField, ProtoMessage } from "@saltify/typeproto";
import { PV1 } from "./index.ts";
import { PWss } from "../index.ts";

export namespace PGroup {
  export const Pagination = ProtoMessage.of({
    /** 分页大小 */
    size: ProtoField(1, "int32"),
    /** 页数 */
    page: ProtoField(2, "int32")
  });

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

  export const ListMemberUserInfo = ProtoMessage.of({
    userId: ProtoField(1, "string"),
    name: ProtoField(2, "string"),
    avatarUrl: ProtoField(4, "string"),
    isVip: ProtoField(6, "bool")
  });

  export const ListMemberUser = ProtoMessage.of({
    groupId: ProtoField(1, "string"),
    userInfo: ProtoField(2, ListMemberUserInfo),
    /** 权限等级, 群主 100 管理员 2 普通用户无/0 */
    permissionLevel: ProtoField(3, "int32"),
    /** 禁言时间戳 */
    gagTimestamp: ProtoField(4, "int64"),
    /** 是否被禁言 */
    isGag: ProtoField(5, "bool")
  });

  /** 获取群成员列表 */
  export const ListMember = ProtoMessage.of({
    status: ProtoField(1, () => PV1.Status),
    user: ProtoField(2, ListMemberUser, "repeated"),
    total: ProtoField(3, "int32")
  });

  /** 快捷菜单 */
  export const MenuData = ProtoMessage.of({
    id: ProtoField(1, "int64"),
    botId: ProtoField(2, "string"),
    /** 是否隐藏/删除,猜的 */
    field3: ProtoField(3, "int32"),
    name: ProtoField(4, "string"),
    /** 内容 */
    content: ProtoField(5, "string"),
    /** 按钮类型: 1-普通按钮 2-选中按钮 3-下拉选择 */
    menuType: ProtoField(6, "int32"),
    createTimestamp: ProtoField(7, "int64"),
    /** 操作类型 */
    menuAction: ProtoField(10, "int32"),
    /** 选择的选项,在选择按钮的时候也作为状态,选中为 1,未选中为 0 */
    select: ProtoField(99, "string")
  });

  /** 命令 */
  export const InstructionData = ProtoMessage.of({
    id: ProtoField(1, "int64"),
    botId: ProtoField(2, "string"),
    /** 指令名 */
    name: ProtoField(3, "string"),
    /** 指令描述 */
    desc: ProtoField(4, "string"),
    /** 指令类型（1-普通指令, 2-直发指令, 5-自定义输入指令） */
    type: ProtoField(5, "int32"),
    /** 输入框提示文字 */
    hintText: ProtoField(6, "string"),
    /** 输入框默认文字 */
    defaultText: ProtoField(7, "string"),
    /** 是否隐藏/删除,猜的,有误欢迎指正 */
    field8: ProtoField(8, "int32"),
    /** 和排序相关 不确定 */
    sort: ProtoField(9, "int64"),
    /** 表单 */
    form: ProtoField(10, "string"),
    /** 机器人名称 */
    botName: ProtoField(11, "string")
  });

  /** 获取群机器人列表 */
  export const BotList = ProtoMessage.of({
    status: ProtoField(1, () => PV1.Status),
    bot: ProtoField(2, BotData, "repeated"),
    instruction: ProtoField(3, InstructionData, "repeated"),
    menu: ProtoField(4, MenuData, "repeated")
  });

  /** 获取群口令关联群聊 */
  export const InfoAddFriend = ProtoMessage.of({
    status: ProtoField(1, () => PV1.Status),
    data: ProtoField(2, GroupData)
  });

  /** 创建群聊 */
  export const CreateGroup = ProtoMessage.of({
    status: ProtoField(1, () => PV1.Status),
    /** 新群聊 ID */
    groupId: ProtoField(2, "string")
  });
}

export namespace PGroupSend {
  /**
   * 获取群聊信息。同时适用于 `dismiss-group` 和 `bot-list`
   */
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

  /** 获取群成员列表 */
  export const ListMember = ProtoMessage.of({
    data: ProtoField(2, () => PGroup.Pagination),
    /** 群聊 ID */
    groupId: ProtoField(3, "string"),
    /** 搜索关键词 */
    keywords: ProtoField(4, "string")
  });

  /** 获取群口令关联群聊 */
  export const InfoAddFriend = ProtoMessage.of({
    /** 欲要搜索的群口令 */
    keyword: ProtoField(2, "string")
  });

  /** 创建群聊 */
  export const CreateGroup = ProtoMessage.of({
    /** 群聊名称 */
    name: ProtoField(2, "string"),
    /** 群简介 */
    introduction: ProtoField(3, "string"),
    /** 头像 URL */
    avatarUrl: ProtoField(4, "string")
  });
}
