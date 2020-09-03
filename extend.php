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

use Flarum\Api\Event\Serializing;
use Flarum\Extend;
use Flarum\Settings\Event\Saved;
use FoF\Components\Extend\AddFofComponents;
use FoF\Formatting\Listeners\FormatterConfigurator;
use Illuminate\Events\Dispatcher;
use s9e\TextFormatter\Configurator;
use s9e\TextFormatter\Configurator\Bundles\MediaPack;

return [
    new AddFofComponents(),

    (new Extend\Frontend('forum'))
        ->css(__DIR__.'/resources/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),

    new Extend\Locales(__DIR__.'/resources/locale'),

    (new Extend\Formatter())
        ->configure(function (Configurator $configurator) {
            $settings = app('flarum.settings');

            foreach (FormatterConfigurator::PLUGINS as $plugin) {
                $enabled = $settings->get('fof-formatting.plugin.'.strtolower($plugin));

                if ($enabled) {
                    if ($plugin == 'MediaEmbed') {
                        (new MediaPack())->configure($configurator);
                    } else {
                        $configurator->$plugin;
                    }
                }
            }
        }),

    function (Dispatcher $dispatcher) {
        $dispatcher->listen(Serializing::class, Listeners\FormatterConfigurator::class);
        $dispatcher->listen(Saved::class, Listeners\ClearCache::class);
    },
];
