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

use Flarum\Settings\SettingsRepositoryInterface;
use FoF\Formatting\Listeners\FormatterConfigurator as FormatterConfiguratorListener;
use Illuminate\Support\Arr;
use s9e\TextFormatter\Configurator;
use s9e\TextFormatter\Configurator\Bundles\MediaPack;

class ConfigureFormatterPlugins
{
    /** @var SettingsRepositoryInterface */
    protected $settings;

    public function __construct(
        SettingsRepositoryInterface $settings
    ) {
        $this->settings = $settings;
    }

    public function __invoke(Configurator $configurator): void
    {
        // Enable all plugins based on their settings
        foreach (FormatterConfiguratorListener::PLUGINS as $plugin) {
            $enabled = (bool) $this->settings->get('fof-formatting.plugin.'.strtolower($plugin));

            if ($enabled) {
                if ($plugin === 'MediaEmbed') {
                    (new MediaPack())->configure($configurator);

                    // Apply YouTube-specific privacy and security modifications
                    $tag = Arr::get($configurator->tags, 'YOUTUBE');
                    if ($tag) {
                        $tag->template = str_replace('www.youtube.com', 'www.youtube-nocookie.com', $tag->template);
                        $tag->template = str_replace('allowfullscreen=""', 'allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"', $tag->template);
                    }
                } else {
                    // Enable other plugins by accessing them (triggers auto-loading)
                    // @phpstan-ignore-next-line
                    $configurator->$plugin;
                }
            }
        }
    }
}
