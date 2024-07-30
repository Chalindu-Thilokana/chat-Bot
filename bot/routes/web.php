<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChatBotController;

Route::get('/', function () {
    return view('chatbot');
});

Route::post('/send', [ChatBotController::class, 'sendchat']);