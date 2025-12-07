<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MeasurementField extends Model
{
    protected $fillable = [
        'category_id',
        'name',
        'slug',
        'unit',
        'is_required',
        'sort_order',
    ];

    protected $casts = [
        'is_required' => 'boolean',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(MeasurementCategory::class);
    }
}