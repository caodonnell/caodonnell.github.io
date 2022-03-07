# PhysTEC-opoly

A themed version of Monopoly, using PhysTEC 5+ Club Awardees as properties and related items/events for other spaces. Since most teachers stay within about 50 miles of their teacher prep/certification programs, property costs are based on local costs of living and the rents are based on teacher salary schedules.

## Rounding

Currently, all values are rounded to the nearest $10, since many of the values are about ten times greater than in Classic Monopoly (i.e., one order of magnitude higher). If we were to ever play this game in real life, we'd likely want to make this change so that it's easier to make the "game cash" for people to play with. If you wish to change the rounding (e.g., eliminate it):

* `monopoly.js`: change `roundval` in line 5
* `PhysTECedition_BoardX.js`: change the default parameterization of `ronundval` in line 1 in the defintion of `Square` (needs to be done for each board)
* The PDF guide will also need to be updated:
  * For the tables: update the Google spreadsheet used to generate the tables, and then update the tables in the document
    * Each table "header" has some notes, including the fact everything is rounded to the nearest $10
    * The forumulas to create the cells cite the `roundval` in cell `M3`
  * The section on `Additional Information about Amounts` also makes a note about the rounding.



# Original code

This game is adapted from [https://github.com/intrepidcoder/monopoly](https://github.com/intrepidcoder/monopoly):

>A JavaScript/HTML/CSS Monopoly implementation with full game play. Supports two-eight players.
>
>Play online at [http://www.intrepidcoder.com/projects/monopoly/](http://www.intrepidcoder.com/projects/monopoly/).
>
>Includes an experimental capability to play against an AI. A test AI for demonstration purposes is included.
