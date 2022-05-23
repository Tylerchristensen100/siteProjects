import 'package:flutter/material.dart';

//constants
const gold = Color(0xEFFFDD00);

var lightTheme = ThemeData(
  colorScheme: ColorScheme(
    brightness: Brightness.light,
    primary: Colors.white,
    onPrimary: Colors.black,
    secondary: Colors.lightBlueAccent,
    onSecondary: Colors.white,
    background: Colors.grey,
    onBackground: Colors.grey,
    surface: Colors.blueGrey.shade900,
    onSurface: Colors.grey,
    error: Colors.grey,
    onError: Colors.red,
  ),
  backgroundColor: Colors.white,
  dialogTheme: const DialogTheme(
    backgroundColor: Colors.lightBlueAccent,
  ),
);

var darkTheme = ThemeData(
  colorScheme: ColorScheme(
    brightness: Brightness.dark,
    primary: Colors.black12,
    onPrimary: Colors.white,
    secondary: Colors.lightBlueAccent,
    onSecondary: Colors.white,
    background: Colors.black12,
    onBackground: Colors.white,
    surface: Colors.blueGrey.shade900,
    onSurface: Colors.white,
    error: Colors.black12,
    onError: Colors.redAccent,
  ),
  backgroundColor: Colors.black54,
  dialogTheme: const DialogTheme(
    backgroundColor: Colors.lightBlueAccent,
  ),
);
