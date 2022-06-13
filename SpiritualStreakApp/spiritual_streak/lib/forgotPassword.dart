import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
// import 'package:modal_progress_hud_nsn/modal_progress_hud_nsn.dart';
import 'package:rflutter_alert/rflutter_alert.dart';
import 'logIn.dart';

class ForgotPassword extends StatefulWidget {
  static String id = 'forgot-password';

  @override
  State<ForgotPassword> createState() => _ForgotPasswordState();
}

class _ForgotPasswordState extends State<ForgotPassword> {
  @override
  Widget build(BuildContext context) {
    String email = '';
    final emailController = TextEditingController();
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Spiritual Streak',
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 30.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(
              'Reset your password',
              style: TextStyle(fontSize: 30, color: Colors.white),
            ),
            TextField(
              controller: emailController,
              style: const TextStyle(color: Colors.white),
              decoration: const InputDecoration(
                labelText: 'Email',
                icon: Icon(
                  Icons.mail,
                  color: Colors.white,
                ),
                focusedBorder: UnderlineInputBorder(
                  borderSide: BorderSide(color: Colors.white),
                ),
                enabledBorder: UnderlineInputBorder(
                  borderSide: BorderSide(color: Colors.white),
                ),
                errorBorder: UnderlineInputBorder(
                  borderSide: BorderSide(color: Colors.white),
                ),
              ),
              onChanged: (value) {
                email = value;
              },
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              child: const Text('Send Email'),
              onPressed: () {
                try {
                  resetPassword(email);

                  setState(() {
                    Alert(
                      style: AlertStyle(
                        // backgroundColor: Colors.blueGrey.shade900,
                        titleStyle: TextStyle(
                          color: Theme.of(context).colorScheme.onPrimary,
                        ),
                        descStyle: TextStyle(
                          color: Theme.of(context).colorScheme.onPrimary,
                        ),
                      ),
                      context: context,
                      title: 'Email Sent',
                      buttons: [
                        DialogButton(
                          onPressed: () => Navigator.pop(context),
                          child: const Text(
                            "close",
                            style: TextStyle(color: Colors.black, fontSize: 20),
                          ),
                        ),
                      ],
                    ).show();
                  });
                  emailController.clear();
                } catch (e) {
                  print(e);
                  setState(() {
                    Alert(
                      style: AlertStyle(
                        // backgroundColor: Colors.blueGrey.shade900,
                        titleStyle: TextStyle(
                          color: Theme.of(context).colorScheme.onPrimary,
                        ),
                        descStyle: TextStyle(
                          color: Theme.of(context).colorScheme.onPrimary,
                        ),
                      ),
                      context: context,
                      title: e.toString().split(']')[1],
                      buttons: [
                        DialogButton(
                          onPressed: () => Navigator.pop(context),
                          child: const Text(
                            "close",
                            style: TextStyle(color: Colors.black, fontSize: 20),
                          ),
                        ),
                      ],
                    ).show();
                  });
                }
              },
            ),
            TextButton(
                child: const Text('Sign In'),
                onPressed: () {
                  MaterialPageRoute(builder: (context) => const login());
                })
          ],
        ),
      ),
    );
  }
}

final _auth = FirebaseAuth.instance;
resetPassword(String email) async {
  await _auth.sendPasswordResetEmail(email: email);
}
