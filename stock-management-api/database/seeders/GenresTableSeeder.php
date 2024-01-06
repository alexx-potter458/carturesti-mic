<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GenresTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $genres = [
            ['name' => 'Fiction'],
            ['name' => 'Non-fiction'],
            ['name' => 'Mystery'],
            ['name' => 'Thriller'],
            ['name' => 'Historical'],
            ['name' => 'Romance'],
            ['name' => 'Science Fiction'],
            ['name' => 'Fantasy'],
            ['name' => 'Young Adult'],
        ];

        DB::table('genres')->insert($genres);
    }
}
