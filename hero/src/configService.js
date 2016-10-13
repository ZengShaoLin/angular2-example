//当需要注入的内容不是一个Class时，可以使用OpaqueToken来定义token

import { OpaqueToken } from '@angular/core';

export let ConfigProvider = new OpaqueToken('ConfigService');

export let ConfigService = {
    name: 'angular2-example',
    version: '1.0.0',
    author: 'ZengShaoLin'
};