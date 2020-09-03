<?php

/*
 * This file is part of fof/formatting.
 *
 * Copyright (c) 2019 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace FoF\Formatting\Listeners;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Formatter\Event\Configuring;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;
use s9e\TextFormatter\Configurator\Bundles\MediaPack;

class FormatterConfigurator
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

    /**
     * @var SettingsRepositoryInterface
     */
    private $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    /**
     * Adds settings to admin settings.
     *
     * @param Serializing $event
     */
    public function handle(Serializing $event)
    {
        if ($event->isSerializer(ForumSerializer::class) && $event->actor->isAdmin()) {
            $event->attributes['fof-formatting.plugins'] = self::PLUGINS;
        }
    }
}
