<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{

    public function userSignIn(Request $request): JsonResponse
    {

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json([
                'message' => 'valid email',
            ]);
        }
        //return response()->json([
           // 'message' => 'Invalid email',
       // ]);
            if($this->isUserCredentials($request->all(),$user)){
                return response()->json([
                    'message' => 'message found',
                    'create_token' => $user->createToken('testToken',['server:admin'])->plainTextToken,
                ]);
            }
            return response()->json([]);
    }
        public function isUserCredentials(array $request,User $user): bool
        {
         return $user->email===$request['email']&& Hash::check($request['password'], $user->password);

        }

}
