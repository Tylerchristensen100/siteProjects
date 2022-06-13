import 'package:flutter/material.dart';
import 'main.dart';

class history extends StatelessWidget {
  const history({
    Key? key,
  }) : super(key: key);
  @override
  Widget build(BuildContext context) {
    List history = historyList;

    return Scaffold(
      // backgroundColor: Colors.black54,
      appBar: AppBar(
        title: const Text(
          'Spiritual Streak',
        ),
      ),
      body: SafeArea(
        child: ListView.separated(
          itemCount: history.length,
          padding: const EdgeInsets.only(top: 20, bottom: 20),
          itemBuilder: (BuildContext context, int index) {
            // return Container(
            //   height: 50,
            //   margin: const EdgeInsets.only(top: 5, bottom: 10),
            //   child: Center(
            //     child: Text(
            //       'Date: ${dateFormat(history[index]['date'])}, \n   Streak: ${history[index]['count']} days',
            //       style: const TextStyle(
            //         fontSize: 20,
            //       ),
            //     ),
            //   ),
            // );
            return Container(
              height: 50,
              margin: const EdgeInsets.only(top: 5, bottom: 10),
              child: ListTile(
                title: Text(
                  'Date: ${dateFormat(history[index]['date'])}, \n   Streak: ${history[index]['count']} days',
                  style: const TextStyle(
                    fontSize: 20,
                  ),
                ),
              ),
            );
          },
          separatorBuilder: (context, index) {
            return const Divider();
          },
        ),
      ),
    );
  }
}

String dateFormat(String date) {
  var splitDate = date.split('-');
  return '${splitDate[1]}, ${splitDate[2]}, ${splitDate[0]}';
}
