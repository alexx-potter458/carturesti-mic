<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UsersController extends Controller
{
    public function getFavouriteBooks($userId)
    {
        $user = User::find($userId);

        if (!$user) {
            return response()->json([
                'message' => 'User not found!'
            ], Response::HTTP_NOT_FOUND);
        }

        return response()->json([
            'books' => $user->favouriteBooks,
        ], Response::HTTP_OK);
    }

    public function addFavouriteBook($userId, $bookId)
    {
        $user = User::find($userId);
        $book = Book::find($bookId);

        if (!$user || !$book) {
            return response()->json(['message' => 'User or Book not found'], 404);
        }

        // Check if the book is already in the user's favourites
        if ($user->favouriteBooks()->where('book_id', $bookId)->exists()) {
            return response()->json(['message' => 'Book already in favourites'], 400);
        }

        $user->favouriteBooks()->attach($bookId);

        return response()->json(['message' => 'Book added to favourites'], 200);
    }

    public function removeFavouriteBook($userId, $bookId)
    {
        $user = User::find($userId);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        // Check if the book is in the user's favourites
        if (!$user->favouriteBooks()->where('book_id', $bookId)->exists()) {
            return response()->json(['message' => 'Book not in favourites'], 404);
        }

        $user->favouriteBooks()->detach($bookId);

        return response()->json(['message' => 'Book removed from favourites'], 200);
    }
}
