<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $rules = $request->validate([
            'email' => 'exists:admins,email',
            'password' => 'required|min:6|max:255',
        ]);

        if (auth()->guard('admin')->attempt(['email' => $request->email, 'password' => $request->password], false, false)) {
            $admin = auth()->guard('admin')->user();
            $admin->token = $admin->createToken('My Token');
            if ($request->remember_me) {
                $admin->token->expires_at = Carbon::now()->addWeeks(1);
                $admin->token->save();

            }

            return response()->json(['admin' => $admin->token], 200);
        }
        return response()->json(['message' => 'These credentials do not match our records.'], 401);
    }
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();

        return response()->json(['message' => 'Logout successfully'], 200);

    }
    public function user(Request $request)
    {
        return response()->json(['user' => $request->user()], 200);
    }
}
