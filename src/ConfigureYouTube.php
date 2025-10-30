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
use s9e\TextFormatter\Configurator;

class ConfigureYouTube
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
        $mediaEmbedEnabled = (bool) $this->settings->get('fof-formatting.plugin.mediaembed');

        if ($mediaEmbedEnabled) {
            $configurator->MediaEmbed->add('youtube');

            $tag = $configurator->tags['YOUTUBE'];
            $tag->template = str_replace('www.youtube.com', 'www.youtube-nocookie.com', $tag->template);
            $tag->template = str_replace('allowfullscreen=""', 'allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"', $tag->template);
        }
    }
}
