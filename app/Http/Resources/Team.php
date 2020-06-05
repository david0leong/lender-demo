<?php

namespace App\Http\Resources;

use App\Http\Resources\Player as PlayerResource;
use Illuminate\Http\Resources\Json\JsonResource;

class Team extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return array_merge(
            parent::toArray($request),
            [
                'players' => PlayerResource::collection($this->whenLoaded('players')),
            ]
        );
    }
}
