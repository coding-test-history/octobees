<?php

namespace App\Http\Controllers\TermsOfService;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Laravel\Jetstream\Jetstream;
use Illuminate\Support\Str;

class TermsOfServiceController extends Controller
{
    public function index()
    {
        $termsFile = Jetstream::localizedMarkdownPath('terms.md');
        return Inertia::render('TermsOfService/Show', [
            'terms' => Str::markdown(file_get_contents($termsFile)),
        ]);
    }
}
