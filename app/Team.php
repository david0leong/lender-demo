<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Validation\Rule;

class Team extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name'
    ];

    /**
     * Get the players for the team.
     */
    public function players()
    {
        return $this->hasMany('App\Player');
    }

    public static function rules($id = 0, $merge = []) {
        return array_merge(
            [
                'name' => [
                    'required',
                    'string',
                    'max:255',
                    Rule::unique('App\Team')->ignore($id)
                ],
            ],
            $merge
        );
    }
}
