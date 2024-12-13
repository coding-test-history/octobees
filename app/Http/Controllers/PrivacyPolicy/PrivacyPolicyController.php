<?php

namespace App\Http\Controllers\PrivacyPolicy;

use App\Http\Controllers\Controller;
use Laravel\Jetstream\Jetstream;
use Inertia\Inertia;
use Illuminate\Support\Str;

class PrivacyPolicyController extends Controller
{
    public function index()
    {
        $policyFile = Jetstream::localizedMarkdownPath('policy.md');

        return Inertia::render('PrivacyPolicy/Show', [
            'policy' => Str::markdown(file_get_contents($policyFile)),
        ]);
    }
}
