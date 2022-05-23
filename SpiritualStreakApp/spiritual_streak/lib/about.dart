import 'package:flutter/material.dart';

class about extends StatelessWidget {
  const about({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // backgroundColor: Colors.black54,
      appBar: AppBar(
        title: const Text(
          'Spiritual Streak',
        ),
        // backgroundColor: Colors.blueGrey.shade900,
      ),
      body: Container(
        child: const SafeArea(
          child: Padding(
            padding: EdgeInsets.all(35.0),
            child: Center(
              child: Text(
                'Spiritual Streak is a way to keep track of your daily consumption of spiritual content. \n '
                '\n\n\n\n\n\n'
                'created by: \n        Tyler Christensen \u00a9 2022',
                style: TextStyle(
                  fontSize: 20,
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
