import 'package:flutter/material.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:http/http.dart' as http;

// This is inside your LogInOptionScreen class
void _handleGoogleSignIn() async {
  try {
    GoogleSignIn _googleSignIn = GoogleSignIn(
      scopes: ['email'],
    );
    GoogleSignInAccount? googleUser = await _googleSignIn.signIn();
    if (googleUser != null) {
      GoogleSignInAuthentication googleAuth = await googleUser.authentication;
      String token = googleAuth.idToken!;
      // Send this token to your backend
      var response = await http.post(
        Uri.parse('YOUR_BACKEND_ENDPOINT'), // Replace with your actual endpoint
        body: {'token': token},
      );
      if (response.statusCode == 200) {
        // Handle successful authentication
      } else {
        // Handle error
      }
    }
  } catch (error) {
    // Handle sign in error
  }
}
