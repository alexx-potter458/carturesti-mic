<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $table = 'books';

    protected $fillable = ['title', 'price', 'genre_id', 'quantity'];

    protected $hidden = ['genre_id', 'pivot'];

    public $timestamps = false;

    use HasFactory;

    /**
     * Get the genre associated with the book.
     */
    public function genre()
    {
        return $this->belongsTo(Genre::class, 'genre_id');
    }
}
