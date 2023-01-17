List<Widget> _animePopular(data) {
  List<Widget> list = [];

  for (var anime in data) {

    list.add(Text(anime.nombre));
  }
  return animes;
}


import 'package:flutter/material.dart';
import 'package:flutter_app/listAnimes/animes.dart';

class listAnime extends StatelessWidget {

  const listAnime({super.key});

  @override
  Widget build(BuildContext context) {
    return SingleC
    hildScrollView(

      child: Column(
        children: [
          animes(
              "img/sao.jpg",
              "Sword Art Online",
              "Aventura, romance, acción, fantasía.",
              "Un chico de 14 años llamado kirito entra en un juego de realidad virtual llamado sword arte online (SAO)..."),
          animes(
              "img/akamegakill.jpg",
              "Akame Ga Kill!",
              "Aventura, romance, acción, fantasía.",
              "Un chico de 14 años llamado kirito entra en un juego de realidad virtual llamado sword arte online (SAO)..."),
          animes(
              "img/rezero.jpg",
              "Re:Zero kara Hajimeru",
              "Aventura, romance, acción, fantasía.",
              "Un chico de 14 años llamado kirito entra en un juego de realidad virtual llamado sword arte online (SAO)..."),
          animes(
              "img/demonsa.jpg",
              "Kimetsu no Yaiba",
              "Ficción, aventuras, Fantasía oscura.",
              "Un chico de 14 años llamado kirito entra en un juego de realidad virtual llamado sword arte online (SAO)..."),
        ],
      ),
    );
  }
}
