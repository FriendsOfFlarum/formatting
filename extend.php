<?php

/*
 * This file is part of fof/formatting.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Formatting;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend;
use Flarum\Settings\Event\Saved;
use FoF\Formatting\Listeners\FormatterConfigurator;

return [
    (new Extend\Frontend('forum'))
        ->css(__DIR__.'/resources/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),

    new Extend\Locales(__DIR__.'/resources/locale'),

    (new Extend\Formatter())
        ->configure(ConfigureFormatterPlugins::class),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attributes(FormatterConfigurator::class),

    (new Extend\Event())
        ->listen(Saved::class, Listeners\ClearCache::class),
];
