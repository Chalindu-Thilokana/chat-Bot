<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use OpenAI\Laravel\Facades\OpenAI;

class ChatBotController extends Controller
{
    public function sendchat(Request $request)
    {
        $input = $request->input('input');

        try {
            $result = OpenAI::completions()->create([
                'model' => 'gpt-3.5-turbo',
                'prompt' => $input,
                'max_tokens' => 100
            ]);

            $response = '';
            foreach ($result->choices as $choice) {
                $response .= $choice['text'];
            }

            return $response;
        } catch (\Exception $e) {
            return 'Error: ' . $e->getMessage();
        }
    }
}