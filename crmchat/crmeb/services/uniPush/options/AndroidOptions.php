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

namespace crmeb\services\uniPush\options;


use crmeb\services\uniPush\OptionsBase;
use think\helper\Str;

/**
 * Class AndroidOptions
 * @package crmeb\services\uniPush\options
 */
class AndroidOptions extends OptionsBase
{

    public $title;

    public $body;

    public $clickType = 'payload';

    public $payload = '';

    /**
     * @return array
     */
    public function toArray()
    {
        $publicData = get_object_vars($this);
        $data       = [];
        foreach ($publicData as $key => $value) {
            $data[Str::snake($key)] = $value;
        }
        return [
            'ups' => ['notification' => $data]
        ];
    }
}