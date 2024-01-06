<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class StockController extends Controller
{
    public function getStock($bookId)
    {
        $book = Book::find($bookId);

        return response()->json([
            'quantity' => $book->quantity,
        ], 200);
    }

    public function decreaseStock($bookId, Request $request)
    {
        $book = Book::find($bookId);
        if (!$book) {
            return response()->json(['message' => 'Book not found'], 404);
        }

        $decreaseAmount = $request->input('quantity', 0);

        // Check if the decrease amount is greater than the current stock
        if ($decreaseAmount > $book->quantity) {
            return response()->json([
                'message' => 'The requested quantity to decrease exceeds the available stock.'
            ], Response::HTTP_BAD_REQUEST);
        }

        $book->decrement('quantity', $decreaseAmount);

        return response()->json($book);
    }

    public function increaseStock($bookId, Request $request)
    {
        $book = Book::find($bookId);
        if (!$book) {
            return response()->json(['message' => 'Book not found'], 404);
        }

        $quantity = $request->input('quantity', 0);
        $book->increment('quantity', $quantity);

        return response()->json($book);
    }
}
