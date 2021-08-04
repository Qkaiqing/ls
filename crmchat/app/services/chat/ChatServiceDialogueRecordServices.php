<?php
// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2020 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------

namespace app\services\chat;


use app\dao\chat\ChatServiceDialogueRecordDao;
use crmeb\basic\BaseServices;
use think\db\exception\DataNotFoundException;
use think\db\exception\DbException;
use think\db\exception\ModelNotFoundException;

/**
 * Class ChatServiceDialogueRecordServices
 * @package app\services\chat
 * @method whereByCount(array $where) 根据条件获取条数
 * @method getServiceList(array $where, int $page, int $limit, array $field = ['*']) 获取聊天记录并分页
 * @method saveAll(array $data) 插入数据
 * @method getMessageNum(array $where) 获取聊天记录条数
 * @method getMessageList(array $where)
 */
class ChatServiceDialogueRecordServices extends BaseServices
{
    //文本消息类型
    const MSN_TYPE_TXT = 1;
    //表情消息类型
    const MSN_TYPE_EMOT = 2;
    //图片消息类型
    const MSN_TYPE_IME = 3;
    //音频消息类型
    const MSN_TYPE_VOICE = 4;
    //商品链接消息类型
    const MSN_TYPE_GOODS = 5;
    //订单信息消息类型
    const MSN_TYPE_ORDER = 6;

    /**
     * 消息类型
     * @var array  1=文字 2=表情 3=图片 4=语音 5 = 商品链接 6 = 订单类型
     */
    const MSN_TYPE = [
        self::MSN_TYPE_TXT,
        self::MSN_TYPE_EMOT,
        self::MSN_TYPE_IME,
        self::MSN_TYPE_VOICE,
        self::MSN_TYPE_GOODS,
        self::MSN_TYPE_ORDER
    ];

    /**
     * ChatServiceDialogueRecordServices constructor.
     * @param ChatServiceDialogueRecordDao $dao
     */
    public function __construct(ChatServiceDialogueRecordDao $dao)
    {
        $this->dao = $dao;
    }


    /**
     * 获取聊天记录中的uid和to_uid
     * @param int $userId
     * @return array
     */
    public function getChatUserIds(int $userId)
    {
        $list     = $this->dao->getServiceUserUids($userId);
        $arr_user = $arr_to_user = [];
        foreach ($list as $key => $value) {
            array_push($arr_user, $value["user_id"]);
            array_push($arr_to_user, $value["to_user_id"]);
        }
        $userids = array_merge($arr_user, $arr_to_user);
        $userids = array_flip(array_flip($userids));
        $userids = array_flip($userids);
        unset($userids[$userId]);
        return array_flip($userids);
    }

    /**
     * 获取某个用户的客服聊天记录
     * @param array $where
     * @return array
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     */
    public function getChatLogList(array $where)
    {
        [$page, $limit] = $this->getPageValue();
        $list  = $this->dao->getServiceList($where, $page, $limit);
        $count = $this->dao->count($where);
        return compact('list', 'count');
    }

    /**
     * 获取聊天记录列表
     * @param array $where
     * @param int $uid
     * @return array
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     */
    public function getChatList(array $where, int $uid)
    {
        [$page, $limit] = $this->getPageValue();
        $list = $this->dao->getServiceList($where, $page, $limit);
        return $this->tidyChat($list);
    }

    /**
     * 聊天列表格式化
     * @param array $list
     * @param int $uid
     * @return array
     */
    public function tidyChat(array $list)
    {
        $toUser = $user = [];
        $toUid  = $list[0]['to_user_id'] ?? 0;
        $uid    = $list[0]['user_id'] ?? 0;
        foreach ($list as &$item) {
            $item['_add_time'] = $item['add_time'];
            $item['add_time']  = strtotime($item['_add_time']);

        }

        if ($toUid && $uid) {
            /** @var ChatServiceRecordServices $recordServices */
            $recordServices = app()->make(ChatServiceRecordServices::class);
            $toUser         = $recordServices->get(['user_id' => $uid, 'to_user_id' => $toUid], ['nickname', 'avatar']);
            $user           = $recordServices->get(['user_id' => $toUid, 'to_user_id' => $uid], ['nickname', 'avatar']);
        }

        foreach ($list as &$item) {

            $item['msn_type'] = (int)$item['msn_type'];
            if (!isset($item['nickname'])) {
                $item['nickname'] = '';
            }
            if (!isset($item['avatar'])) {
                $item['avatar'] = '';
            }

            if (!$item['avatar'] && !$item['nickname']) {
                if ($item['user_id'] == $uid && $item['to_user_id'] == $toUid) {
                    $item['nickname'] = $user['nickname'] ?? '';
                    $item['avatar']   = $user['avatar'] ?? '';
                }
                if ($item['user_id'] == $toUid && $item['to_user_id'] == $uid) {
                    $item['nickname'] = $toUser['nickname'] ?? '';
                    $item['avatar']   = $toUser['avatar'] ?? '';
                }
            }
        }
        return $list;
    }

    /**
     * 获取聊天记录
     * @param array $where
     * @param int $page
     * @param int $limit
     * @param bool $isUp
     * @return array
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     */
    public function getServiceChatList(array $where, int $limit, int $upperId)
    {
        return $this->dao->getChatList($where, $limit, $upperId);
    }
}
