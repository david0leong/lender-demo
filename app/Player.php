<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name'
    ];

     /**
     * Get the team that owns the player.
     */
    public function team()
    {
        return $this->belongsTo('App\Team');
    }
}
