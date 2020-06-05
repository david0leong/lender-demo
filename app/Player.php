<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Validation\Rule;

class Player extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'team_id'
    ];

     /**
     * Get the team that owns the player.
     */
    public function team()
    {
        return $this->belongsTo('App\Team');
    }

    public static function rules($id = 0, $merge = []) {
        return array_merge(
            [
                'first_name' => ['required', 'string', 'max:30'],
                'last_name' => ['required', 'string', 'max:30'],
                'team_id' => ['exists:App\Team,id']
            ],
            $merge
        );
    }
}
