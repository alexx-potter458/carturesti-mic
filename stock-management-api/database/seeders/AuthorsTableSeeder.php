<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AuthorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $authors = [
            ['name' => 'Mihai Eminescu'],
            ['name' => 'George Coșbuc'],
            ['name' => 'Lucian Blaga'],
            ['name' => 'Ion Creangă'],
            ['name' => 'Marin Preda'],
        ];

        DB::table('authors')->insert($authors);
    }
}
