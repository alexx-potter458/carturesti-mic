<?php

use App\Http\Controllers\AuthorsController;
use App\Http\Controllers\BooksController;
use App\Http\Controllers\GenresController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('books', BooksController::class);
Route::resource('authors', AuthorsController::class);
Route::resource('genres', GenresController::class);

// Stock routes
Route::get('stock/{bookId}', [StockController::class, 'getStock']);
Route::patch('stock/increase/{bookId}', [StockController::class, 'increaseStock']);
Route::patch('stock/decrease/{bookId}', [StockController::class, 'decreaseStock']);

// Favourite books routes
Route::get('user/books/{userId}', [UsersController::class, 'getFavouriteBooks']);
Route::post('user/{userId}/add-favourite/{bookId}', [UsersController::class, 'addFavouriteBook']);
Route::delete('user/{userId}/remove-favourite/{bookId}', [UsersController::class, 'removeFavouriteBook']);
