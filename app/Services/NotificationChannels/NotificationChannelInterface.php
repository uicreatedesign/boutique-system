<?php

namespace App\Services\NotificationChannels;

interface NotificationChannelInterface
{
    public function send(array $data): bool;
    public function isEnabled(): bool;
    public function getName(): string;
}