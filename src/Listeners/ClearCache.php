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

use Flarum\Settings\Event\Saved;
use Illuminate\Contracts\Events\Dispatcher;

class ClearCache
{
    /**
     * Subscribes to the Flarum events.
     *
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Saved::class, [$this, 'saved']);
    }

    public function saved(Saved $event)
    {
        foreach ($event->settings as $key => $setting) {
            if (strpos($key, 'fof-formatting.plugin.') === 0) {
                app('flarum.formatter')->flush();

                return;
            }
        }
    }
}
