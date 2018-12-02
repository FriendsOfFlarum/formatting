<?php

/*
 * This file is part of fof/formatting.
 *
 * Copyright (c) 2018 FriendsOfFlarum.
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
    private $plugins = [
        'Autoimage',
        'Autovideo',
        'FancyPants',
        'HTMLEntities',
        'MediaEmbed',
        'PipeTables',
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
     * Subscribes to the Flarum events.
     *
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'addData']);
        $events->listen(Configuring::class, [$this, 'configureFormatter']);
    }

    /**
     * Adds settings to admin settings.
     *
     * @param Serializing $event
     */
    public function addData(Serializing $event)
    {
        if ($event->isSerializer(ForumSerializer::class) && $event->actor->isAdmin()) {
            $event->attributes['fof-formatting.plugins'] = $this->plugins;
        }
    }

    public function configureFormatter(Configuring $event)
    {
        foreach ($this->plugins as $plugin) {
            $enabled = $this->settings->get('fof-formatting.plugin.'.strtolower($plugin));

            if ($enabled) {
                if ($plugin == 'MediaEmbed') {
                    (new MediaPack())->configure($event->configurator);
                } else {
                    $event->configurator->$plugin;
                }
            }
        }
    }
}
