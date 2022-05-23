import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:rflutter_alert/rflutter_alert.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'firebase_options.dart';
import 'dart:convert';

import 'about.dart';
import 'history.dart';
import 'theme.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  static const String _title = 'Spiritual Streak';

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: _title,
      home: const MyStatefulWidget(),
      theme: lightTheme,
      darkTheme: darkTheme,
      themeMode: ThemeMode.system,
      initialRoute: '/',
      routes: {
        '/about': (context) => const about(),
        '/history': (context) => const history(),
      },
    );
  }
}

class MyStatefulWidget extends StatefulWidget {
  const MyStatefulWidget({Key? key}) : super(key: key);

  @override
  State<MyStatefulWidget> createState() => _MyStatefulWidgetState();
}

class _MyStatefulWidgetState extends State<MyStatefulWidget> {
  int counter = 0;
  @override
  Widget build(BuildContext context) {
    getCount().then((value) {
      setState(() {
        counter = value;
      });
    });
    return Scaffold(
      // backgroundColor: Colors.black54,
      drawer: Drawer(
        // backgroundColor: Colors.black12,
        child: ListView(
          // Important: Remove any padding from the ListView.
          padding: EdgeInsets.zero,
          children: [
            const DrawerHeader(
              decoration: BoxDecoration(
                  // color: Colors.blueGrey,
                  ),
              child: Text('Spiritual Streak',
                  style: TextStyle(
                    fontSize: 20,
                  )),
            ),
            ListTile(
              title: const Text(
                'About',
              ),
              onTap: () {
                // Update the state of the app.
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const about()),
                );
              },
            ),
            ListTile(
              title: const Text(
                'History',
              ),
              onTap: () {
                getHistoryList();
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const history()),
                );
              },
            ),
            ListTile(
              title: const Text(
                'Reset',
              ),
              onTap: () {
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
                    title: "Reset",
                    desc: "Are you sure you want to reset the counter?",
                    buttons: [
                      DialogButton(
                        onPressed: () => Navigator.pop(context),
                        child: const Text(
                          "Cancel",
                          style: TextStyle(color: Colors.black, fontSize: 20),
                        ),
                      ),
                      DialogButton(
                        color: Colors.redAccent,
                        onPressed: () {
                          setState(() {
                            counter = 0;
                            setCount(counter);
                            resetHistory();
                          });

                          Navigator.pop(context);
                        },
                        child: const Text(
                          "Reset",
                          style: TextStyle(color: Colors.black, fontSize: 20),
                        ),
                      ),
                    ],
                  ).show();
                });
              },
            ),
          ],
        ),
      ),
      appBar: AppBar(
        title: const Text(
          'Spiritual Streak',
          textAlign: TextAlign.center,
        ),
        // backgroundColor: Colors.blueGrey.shade900,
      ),
      body: Center(
        child: Text(
          '$counter',
          style: TextStyle(fontSize: 90, color: TextColor(counter)),
        ),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
      floatingActionButton: Stack(
        fit: StackFit.expand,
        children: [
          Positioned(
            bottom: 20,
            right: 125,
            width: 125,
            height: 125,
            child: FloatingActionButton(
              heroTag: 'add',
              onPressed: () {
                setState(() {
                  counter++;
                  setCount(counter);
                  //Just for testing
                });
              },
              child: const Icon(
                Icons.add,
                size: 90,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

getCount() async {
  int counter = await _read('counter').then((value) {
    return value;
  });
  return counter;
}

getHistory() async {
  List list = await _readCountHistory('countHistory').then((value) {
    return json.decode(value);
  });
  return list;
}

setCount(int count) async {
  //set the counter
  await _save('counter', count).then((value) {
    return count;
  });

  //set the date and count
  DateTime now = DateTime.now();
  DateTime dateObject = DateTime(now.year, now.month, now.day);
  var dateList = dateObject.toString().split(' ');
  String date = dateList[0];

  countHistory history = countHistory(date, count);
  // List historyList = [];
  //pull the previous list of objects
  historyList = await getHistory();

  //then append history to the new list
  historyList.add(history);

  //instead of pushing the single history object push the entire list
  await _saveCountHistory('countHistory', json.encode(historyList))
      .then((value) {
    return value;
  });
}

Future<int> _read(String string) async {
  final prefs = await SharedPreferences.getInstance();
  final key = string;
  final value = prefs.getInt(key) ?? 0;
  return value;
}

Future<int> _save(string, count) async {
  final prefs = await SharedPreferences.getInstance();
  final key = string;
  final value = count;
  prefs.setInt(key, value);
  return 0;
}

_readCountHistory(String string) async {
  final prefs = await SharedPreferences.getInstance();
  final key = string;
  final value = prefs.getString(key) ?? '';
  return value;
}

_saveCountHistory(String string, String list) async {
  final prefs = await SharedPreferences.getInstance();
  final key = string;
  final value = list;
  prefs.setString(key, value);
}

resetHistory() async {
  List historyList = [];
  await _saveCountHistory('countHistory', json.encode(historyList))
      .then((value) {
    return value;
  });
}

class countHistory {
  String date = '';
  int count = 0;

  countHistory(this.date, this.count);
  int get getCount {
    return count;
  }

  String get getDate {
    return date;
  }

  Map<String, dynamic> toJson() => {
        'date': date,
        'count': count,
      };

  countHistory.fromJson(Map<String, dynamic> json)
      : date = json['date'],
        count = json['count'];
}

List historyList = [];
getHistoryList() async {
  historyList = await getHistory();

  return historyList;
}

Color TextColor(int count) {
  if (count < 10) {
    return Colors.white;
  }
  if (count > 10 && count < 50) {
    return Colors.yellowAccent;
  }
  if (count > 50 && count < 100) {
    return gold;
  }
  if (count > 100) {
    return Colors.orange;
  }
  return Colors.white;
}
