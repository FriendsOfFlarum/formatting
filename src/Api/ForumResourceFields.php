<?php

/*
 * This file is part of fof/formatting.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Formatting\Api;

use Flarum\Api\Context;
use Flarum\Api\Schema;

class ForumResourceFields
{
    const PLUGINS = [
        'Autoimage',
        'Autovideo',
        'FancyPants',
        'HTMLEntities',
        'MediaEmbed',
        'PipeTables',
        'TaskLists',
    ];

    public function __invoke(): array
    {
        return [
            Schema\Arr::make('fof-formatting.plugins')
                ->visible(fn (object $model, Context $context) => $context->getActor()->isAdmin())
                ->get(function (object $model, Context $context) {
                    return self::PLUGINS;
                }),
        ];
    }
}
