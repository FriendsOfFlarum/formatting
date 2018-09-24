<?php

/**
 *  This file is part of fof/formatting.
 *
 *  Copyright (c) 2018 FriendsOfFlarum.
 *
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 */

namespace FoF\Formatting\Controllers;


use Flarum\User\AssertPermissionTrait;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response;

class ClearCacheController implements RequestHandlerInterface
{
    use AssertPermissionTrait;

    /**
     * Handle the request and return a response.
     * @param ServerRequestInterface $request
     * @return ResponseInterface
     */
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $this->assertAdmin($request->getAttribute('actor'));

        app('flarum.formatter')->flush();

        return (new Response())->withStatus(204);
    }
}
