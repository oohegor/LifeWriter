<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return Renderable
     */
    public function index(): Renderable
    {
        $text = '';

        $texts = DB::select('select * from user_text');

        foreach ($texts as $text) {
            $text = $text->text;
        }
//        DB::insert('insert into user_text (text, session) values (?, ?)', ['text', '123123123']);
        return view('welcome');//->with('text', $text);
    }
}
