<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class StitchingStatus extends Model
{
    protected $fillable = ['name', 'slug', 'color', 'order', 'description', 'status'];

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($status) {
            if (empty($status->slug)) {
                $status->slug = Str::slug($status->name);
            }
        });
    }
}
