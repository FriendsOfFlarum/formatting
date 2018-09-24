<?php

/**
 *  This file is part of fof/formatting.
 *
 *  Copyright (c) 2018 FriendsOfFlarum.
 *
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 */

namespace FoF\Formatting;

use Flarum\Extend;
use Illuminate\Events\Dispatcher;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/less/admin.less'),
    (new Extend\Routes('api'))
        ->post('/fof/formatting/cache', 'fof.formatting.cache', Controllers\ClearCacheController::class),
    function (Dispatcher $dispatcher) {
        $dispatcher->subscribe(Listeners\FormatterConfigurator::class);
    }
];
