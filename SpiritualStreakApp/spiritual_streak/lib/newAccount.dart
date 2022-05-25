import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:modal_progress_hud_nsn/modal_progress_hud_nsn.dart';
import 'package:rflutter_alert/rflutter_alert.dart';
import 'main.dart';
import 'logIn.dart';

class createAccount extends StatefulWidget {
  const createAccount({Key? key}) : super(key: key);

  @override
  State<createAccount> createState() => _createAccountState();
}

class _createAccountState extends State<createAccount> {
  final _auth = FirebaseAuth.instance;

  String email = '';
  String password = '';
  String password2 = '';

  bool showSpinner = false;

  final emailController = TextEditingController();
  final passwordController = TextEditingController();
  final password2Controller = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // backgroundColor: Colors.black54,
      appBar: AppBar(
        title: const Text(
          'Spiritual Streak',
        ),
      ),
      body: ModalProgressHUD(
        inAsyncCall: showSpinner,
        child: Container(
          child: SafeArea(
            child: ListView(
              children: <Widget>[
                Container(
                    alignment: Alignment.center,
                    padding: const EdgeInsets.all(10),
                    child: const Text(
                      'Spiritual Streak',
                      style:
                          TextStyle(fontWeight: FontWeight.w500, fontSize: 30),
                    )),
                Container(
                    alignment: Alignment.center,
                    padding: const EdgeInsets.all(10),
                    child: const Text(
                      'Create Account',
                      style: TextStyle(fontSize: 20),
                    )),
                Container(
                  padding: const EdgeInsets.all(10),
                  child: TextField(
                    controller: emailController,
                    decoration: const InputDecoration(
                      border: OutlineInputBorder(),
                      labelText: 'email',
                      hintText: 'john@example.com',
                    ),
                    keyboardType: TextInputType.emailAddress,
                    onChanged: (value) {
                      email = value;
                    },
                  ),
                ),
                Container(
                  padding: const EdgeInsets.fromLTRB(10, 10, 10, 0),
                  child: TextField(
                    obscureText: true,
                    controller: passwordController,
                    decoration: const InputDecoration(
                      border: OutlineInputBorder(),
                      labelText: 'Password',
                    ),
                    onChanged: (value) {
                      password = value;
                    },
                  ),
                ),
                Container(
                  padding: const EdgeInsets.fromLTRB(10, 10, 10, 10),
                  child: TextField(
                    obscureText: true,
                    controller: password2Controller,
                    decoration: const InputDecoration(
                      border: OutlineInputBorder(),
                      labelText: 'Verify password',
                    ),
                    onChanged: (value) {
                      password2 = value;
                    },
                  ),
                ),
                Container(
                    height: 60,
                    padding: const EdgeInsets.fromLTRB(10, 0, 10, 0),
                    child: ElevatedButton(
                      child: const Text('Create Account'),
                      onPressed: () async {
                        if (password == password2) {
                          print('passwords Match');
                          setState(() {
                            showSpinner = true;
                          });
                          try {
                            final newUser =
                                await _auth.createUserWithEmailAndPassword(
                                    email: email, password: password);

                            if (newUser != null) {
                              Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                      builder: (context) => MyApp()));
                              setState(() {
                                showSpinner = false;
                              });
                            }
                          } catch (e) {
                            print(e);
                            setState(() {
                              showSpinner = false;
                              Alert(
                                context: context,
                                style: AlertStyle(
                                  // backgroundColor: Colors.blueGrey.shade900,
                                  titleStyle: TextStyle(
                                    color:
                                        Theme.of(context).colorScheme.onPrimary,
                                  ),
                                  descStyle: TextStyle(
                                    color:
                                        Theme.of(context).colorScheme.onPrimary,
                                  ),
                                ),
                                title: e.toString().split(']')[1],
                                buttons: [
                                  DialogButton(
                                    onPressed: () => Navigator.pop(context),
                                    child: const Text(
                                      "close",
                                      style: TextStyle(
                                          color: Colors.black, fontSize: 20),
                                    ),
                                  ),
                                ],
                              ).show();
                            });
                            MaterialPageRoute(
                                builder: (context) => const login());
                          }
                        } else {
                          print('invalid password');
                          setState(() {
                            Alert(
                              style: AlertStyle(
                                // backgroundColor: Colors.blueGrey.shade900,
                                titleStyle: TextStyle(
                                  color:
                                      Theme.of(context).colorScheme.onPrimary,
                                ),
                                descStyle: TextStyle(
                                  color:
                                      Theme.of(context).colorScheme.onPrimary,
                                ),
                              ),
                              context: context,
                              title: "Passwords do not match",
                              buttons: [
                                DialogButton(
                                  onPressed: () => Navigator.pop(context),
                                  child: const Text(
                                    "close",
                                    style: TextStyle(
                                        color: Colors.black, fontSize: 20),
                                  ),
                                ),
                              ],
                            ).show();
                            passwordController.clear();
                            password2Controller.clear();
                          });
                        }
                      },
                    )),
                Row(
                  children: <Widget>[
                    const Text('Have an account?'),
                    TextButton(
                      child: const Text(
                        'Log In',
                        style: TextStyle(
                          fontSize: 20,
                          color: Colors.blueGrey,
                        ),
                      ),
                      onPressed: () {
                        Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) => const login()));
                      },
                    )
                  ],
                  mainAxisAlignment: MainAxisAlignment.center,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
