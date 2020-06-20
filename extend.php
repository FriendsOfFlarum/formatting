<?php

/*
 * This file is part of fof/formatting.
 *
 * Copyright (c) 2019 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace FoF\Formatting;

use Flarum\Extend;
use FoF\Components\Extend\AddFofComponents;
use Illuminate\Events\Dispatcher;

return [
    new AddFofComponents(),

    (new Extend\Frontend('forum'))
        ->css(__DIR__.'/resources/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),

    new Extend\Locales(__DIR__.'/resources/locale'),

    function (Dispatcher $dispatcher) {
        $dispatcher->subscribe(Listeners\FormatterConfigurator::class);
        $dispatcher->subscribe(Listeners\ClearCache::class);
    },
];
