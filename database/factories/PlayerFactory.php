<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Player;
use Faker\Generator as Faker;

$factory->define(Player::class, function (Faker $faker) {
    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'team_id' => rand(1, 10)
    ];
});
