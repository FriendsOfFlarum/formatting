<?php

namespace FoF\Formatting;

use Flarum\Settings\SettingsRepositoryInterface;
use s9e\TextFormatter\Configurator;

class ConfigureYouTube
{
    public function __construct(
        protected SettingsRepositoryInterface $settings
    ) {}

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
