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
use s9e\TextFormatter\Configurator;
use s9e\TextFormatter\Configurator\Bundles\MediaPack;

return [
    (new Extend\Frontend('forum'))
        ->css(__DIR__.'/resources/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),

    new Extend\Locales(__DIR__.'/resources/locale'),

    (new Extend\Formatter())
        ->configure(function (Configurator $configurator) {
            $settings = resolve('flarum.settings');

            foreach (FormatterConfigurator::PLUGINS as $plugin) {
                $enabled = $settings->get('fof-formatting.plugin.'.strtolower($plugin));

                if ($enabled) {
                    if ($plugin == 'MediaEmbed') {
                        (new MediaPack())->configure($configurator);

                        $configurator->MediaEmbed->add('youtube');

                        $tag = $configurator->tags['YOUTUBE'];
                        $tag->template = str_replace('www.youtube.com', 'www.youtube-nocookie.com', $tag->template);
                    } else {
                        //* @phpstan-ignore-next-line */
                        $configurator->$plugin;
                    }
                }
            }
        }),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attributes(FormatterConfigurator::class),

    (new Extend\Event())
        ->listen(Saved::class, Listeners\ClearCache::class),
];
