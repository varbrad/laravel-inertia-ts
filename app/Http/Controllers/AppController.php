<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AppController extends Controller
{
    public function __invoke()
    {
        $v = (int) request()->input('v');
        if ($v > 0) {
            usleep($v * 1000);
        }
        return Inertia::render('index', [ 'v' => $v, 'links' => [
            [
                'href' => route('home', ['v' => 50]),
                'text' => '50ms',
            ],
            [
                'href' => route('home', ['v' => 500]),
                'text' => '500ms',
            ],
            [
                'href' => route('home', ['v' => 2000]),
                'text' => '2000ms',
            ],
            [
                'href' => route('home', ['v' => 5000]),
                'text' => '5000ms',
            ]
        ] ]);
    }
}
