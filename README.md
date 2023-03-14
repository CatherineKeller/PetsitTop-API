# PetsitTop :paw_prints:

Dans le cadre de ma formation de [_Développeur Web Fullstack JavaScript_](https://oclock.io/formations/developpeur-web-fullstack-javascript) suivie à l'école O'clock, j'ai réalisé le projet **PetsitTop** en équipe. Il s'agit d'un projet complet (2 personnes en front et 2 personnes en back) développé en méthode Agile (4 sprints) pendant 1 mois.

## Développement de l'API de l'application
J'ai travaillé sur la partie Backend en réalisant l'API de l'application. Le développement c'est fait principalement en pair-programming avec [Axelle](https://github.com/Axelle-SKICA/).

Documentation de l'API : https://petsitterfriendly-production.up.railway.app/api-docs/


 :sparkles: Voici [notre site PetsitTop](https://petsittop.herokuapp.com/) ! :sparkles:

## Lancement

N'hésitez pas à cloner ce dépôt GitHub !

Installation des dépendances :

```bash
npm i
```

Lancement du serveur :

```bash
npm run dev
```

## Présentation

PetsitTop est une plateforme d'entraide et de mise en relation entre particuliers pour du "petsitting" : la garde d'animaux domestiques.  

2 rôles existent pour tout utilisateur (qui peut choisir d'avoir un seul rôle ou les deux):   

- "Petowner" : propriétaire d'animaux ayant besoin de les faire garder
- "Petsitter" : personne acceptant de garder des animaux domestiques

## Fonctionnalités

Tout __visiteur__ (non connecté) du site peut rechercher des profils de Petsitters disponibles, en filtrant par département et par type d'animal à faire garder.  

Une fois connecté, un __utilisateur__ ("user") peut :

- afficher son profil et celui des autres utilisateurs 
- modifier/supprimer son profil
- contacter d'autres utilisateurs (affichage de l'adresse email de contact)
- accéder à l'ensemble des annonces postées par des Petowners pour leur recherche de Petsitter (filtre possible par département)
- un __Petowner__ connecté va pouvoir aussi :
  
  - ajouter/modifier/supprimer ses animaux ("pets") => à venir
  - ajouter/modifier/supprimer des annonces de recherche de petsitter ("ads")

- un __Petsitter__ connecté va pouvoir aussi :
  
  - spécifier s'il est disponible actuellement (avec détails de sa disponibilité et types d'animaux qu'il accepte de garder)

## Technologies & outils utilisés

![VSCode](https://img.shields.io/badge/visual_studio_code-%23007ACC.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-C53635?style=for-the-badge&logo=npm&logoColor=white)
![ESLint](https://img.shields.io/badge/eslint-8080F2?style=for-the-badge&logo=eslint)
![Git](https://img.shields.io/badge/git-%23F05032.svg?style=for-the-badge&logo=git&logoColor=white)
![Railway](https://img.shields.io/badge/railway-13121d?style=for-the-badge&logo=railway&logoColor=white)
![Trello](https://img.shields.io/badge/trello-0052CC?style=for-the-badge&logo=trello&logoColor=white)
![Whimsical](https://img.shields.io/badge/whimsical-8313DD?style=for-the-badge)
![MOCODO](https://img.shields.io/badge/mocodo-808080?style=for-the-badge)

### Front-end

![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/react-%232d415c.svg?style=for-the-badge&logo=react&logoColor=%2304D8F9)
![Redux](https://img.shields.io/badge/redux-%23764ABC.svg?style=for-the-badge&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/vite-636cff?style=for-the-badge&logo=vite&logoColor=white)
![SASS](https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![React-icons](https://img.shields.io/badge/react--icons-CBCDD4?style=for-the-badge&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2MDBweCINCgkgaGVpZ2h0PSI2MDBweCIgdmlld0JveD0iMCAwIDYwMCA2MDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDYwMCA2MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0U5MUU2MyIgc3Ryb2tlLXdpZHRoPSIyNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMzcxLjk4NywyMjcuNjQxDQoJCWM0Ny42MjgsNDcuNjI4LDg1LjAzOSw5OC43MDgsMTA2LjkxNCwxNDMuNTUyYzI2LjM1OCw1NC4wMzMsMzAuMDk2LDk5LjcyMiwxMS4xMDMsMTE4LjcxNA0KCQljLTE5Ljc5MywxOS43OTMtNjguMjY3LDE1Ljg4NC0xMjUuNzMxLTEyLjk3OWMtNDMuNDQ1LTIxLjgyMS05Mi4wMzEtNTkuMTE5LTEzNy4yNDItMTA0LjMzMQ0KCQljLTQ2LjM1NC00Ni4zNTQtODQuOTUtOTUuNTQ1LTEwNi42NjctMTM5LjgxNmMtMjcuNDgtNTYuMDIzLTMwLjA1Ny0xMDMuNzQzLTEwLjY0My0xMjMuMTU3DQoJCWMxOC44MzgtMTguODM5LDYzLjI0OC0xNi4wNTYsMTE2LjY5NCw5Ljc1N0MyNzEuNTc0LDE0MS4xOTMsMzIzLjg5NSwxNzkuNTQ4LDM3MS45ODcsMjI3LjY0MXoiLz4NCgk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNFOTFFNjMiIHN0cm9rZS13aWR0aD0iMjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTI3Mi45MzEsMjAxLjEyNQ0KCQljNjUuMDUyLTE3LjQ2NSwxMjcuOTg5LTI0LjM1NCwxNzcuNzY3LTIwLjkwMmM1OS45NzQsNC4xNiwxMDEuNDIsMjMuNzQ3LDEwOC4zODUsNDkuNjg4DQoJCWM3LjI1OSwyNy4wMzMtMjAuMzQ1LDY3LjA3My03NC4wNTQsMTAyLjQzNGMtNDAuNjA4LDI2LjczMy05Ny4xODksNTAuMTg4LTE1OC45NDEsNjYuNzY5DQoJCWMtNjMuMzEyLDE2Ljk5OC0xMjUuMjA3LDI1Ljg1OC0xNzQuNDA4LDIyLjU1M2MtNjIuMjYtNC4xODEtMTA0Ljg4NC0yNS43ODktMTEyLjAwNC01Mi4zMDYNCgkJYy02LjkwNy0yNS43MzEsMTcuNjg4LTYyLjgxMSw2Ni43NS05Ni4yMTRDMTQ3Ljg3OSwyNDQuOTIzLDIwNy4yNDMsMjE4Ljc2MSwyNzIuOTMxLDIwMS4xMjV6Ii8+DQoJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRTkxRTYzIiBzdHJva2Utd2lkdGg9IjI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0yMDAuNDY5LDI3My43MDcNCgkJYzE3LjM1Ny02NS4wODEsNDIuODItMTIzLjA1LDcwLjY3MS0xNjQuNDVjMzMuNTU2LTQ5Ljg4Miw3MS4yMjUtNzYuMDA4LDk3LjE3OC02OS4wODZjMjcuMDQ1LDcuMjEyLDQ3Ljk0OSw1MS4xMjMsNTEuNzYsMTE1LjMxNQ0KCQljMi44ODMsNDguNTMzLTUuMDU1LDEwOS4yNjYtMjEuNTMxLDE3MS4wNDZjLTE2Ljg5Miw2My4zNDEtNDAuMTI2LDEyMS4zODktNjcuNTYyLDE2Mi4zNjUNCgkJYy0zNC43MTYsNTEuODUyLTc0LjcyMyw3Ny45ODgtMTAxLjI1Miw3MC45MTNjLTI1Ljc0My02Ljg2NS00NS41ODQtNDYuNjkyLTUwLjAyMS0xMDUuODgxDQoJCUMxNzUuOTYzLDQwMy45MiwxODIuOTQ0LDMzOS40MjQsMjAwLjQ2OSwyNzMuNzA3eiIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzMiPg0KCTxwYXRoIGZpbGw9IiNFOTFFNjMiIGQ9Ik0zMDAsMzQ5LjM2OWMtMS4wMTksMC0xLjg4MS0wLjM1My0yLjU4Ni0xLjA1OGwtMzYuNjc5LTM1LjM4NmMtMC4zOTItMC4zMTMtMC45MzEtMC44MjItMS42MTctMS41MjgNCgkJYy0wLjY4Ni0wLjcwNS0xLjc3My0xLjk4OC0zLjI2Mi0zLjg1MWMtMS40ODktMS44Ni0yLjgyMi0zLjc3MS0zLjk5Ny01Ljczcy0yLjIyNC00LjMzLTMuMTQ1LTcuMTEyDQoJCWMtMC45Mi0yLjc4Mi0xLjM4MS01LjQ4Ni0xLjM4MS04LjExMWMwLTguNjIxLDIuNDg4LTE1LjM2MSw3LjQ2NS0yMC4yMjFjNC45NzctNC44NTksMTEuODU0LTcuMjg5LDIwLjYzMS03LjI4OQ0KCQljMi40MywwLDQuOTA5LDAuNDIxLDcuNDM2LDEuMjY0YzIuNTI3LDAuODQzLDQuODc5LDEuOTc5LDcuMDU0LDMuNDFjMi4xNzQsMS40Myw0LjA0NiwyLjc3Miw1LjYxMyw0LjAyNnMzLjA1NywyLjU4Niw0LjQ2NywzLjk5Nw0KCQljMS40MTEtMS40MTEsMi44OTktMi43NDMsNC40NjctMy45OTdjMS41NjgtMS4yNTQsMy40MzgtMi41OTYsNS42MTQtNC4wMjZjMi4xNzUtMS40MzEsNC41MjUtMi41NjcsNy4wNTQtMy40MQ0KCQljMi41MjctMC44NDIsNS4wMDYtMS4yNjQsNy40MzUtMS4yNjRjOC43NzgsMCwxNS42NTUsMi40MywyMC42MzIsNy4yODljNC45NzgsNC44NTksNy40NjYsMTEuNiw3LjQ2NiwyMC4yMjENCgkJYzAsOC42Ni00LjQ4NywxNy40NzctMTMuNDYxLDI2LjQ1MWwtMzYuNjE5LDM1LjI2OEMzMDEuODgxLDM0OS4wMTcsMzAxLjAxOSwzNDkuMzY5LDMwMCwzNDkuMzY5eiIvPg0KPC9nPg0KPC9zdmc+DQo=)
![Joi](https://img.shields.io/badge/joi-0281fe?style=for-the-badge)
![Json Web tokens](https://img.shields.io/badge/JWT-fb005b?style=for-the-badge&logo=jsonwebtokens&logoColor=ffffff)

### Back-end

![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![NodeJS](https://img.shields.io/badge/node-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express-ccc?style=for-the-badge&logo=express&logoColor=black)
![Joi](https://img.shields.io/badge/joi-0281fe?style=for-the-badge)
![Json Web tokens](https://img.shields.io/badge/JWT-fb005b?style=for-the-badge&logo=jsonwebtokens&logoColor=ffffff)
![PostgreSQL](https://img.shields.io/badge/postgreSQL-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Sqitch](https://img.shields.io/badge/sqitch-22538e?style=for-the-badge&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAyNHB4IiBoZWlnaHQ9IjEwMjRweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTMuMiAoNzI2NDMpIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPgogICAgPHRpdGxlPnNxaXRjaC1tYXJrLXdoaXRlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlNxaXRjaCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9InNxaXRjaC1sb2dvLXdoaXRlIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHBhdGggZD0iTTY0MC4yNzU3OTUsMTY2LjU5OTc5IEw0MDUuMjU2NjMyLDMwMi4yODgxNjggQzM5Ny44ODUxMzEsMjk0LjI3NjA3IDM4OS4xODk1ODUsMjg3LjIzMTIzNSAzNzkuMjYyNzk0LDI4MS41IEMzMjYuNjUwNjA2LDI1MS4xMjQzMzkgMjU5LjM3NTY2MSwyNjkuMTUwNjA2IDIyOSwzMjEuNzYyNzk0IEMxOTguNjI0MzM5LDM3NC4zNzQ5ODMgMjE2LjY1MDYwNiw0NDEuNjQ5OTI4IDI2OS4yNjI3OTQsNDcyLjAyNTU4OSBDMzE0Ljg2OTQzNSw0OTguMzU2NTk1IDM3MS40OTM5ODIsNDg4LjMxNzM2NyA0MDUuNTUwNjY5LDQ1MC45MDcxODQgTDYyNy4xNzkwOTMsNTc4Ljg2NDQxNCBDNjI0LjQ1NzA2LDU4OC40NDEyMzcgNjIzLDU5OC41NTA0NjEgNjIzLDYwOSBDNjIzLDYyMC41OTg4OTIgNjI0Ljc5NTIxNCw2MzEuNzc4NDkgNjI4LjEyMjk0NSw2NDIuMjc2MDk3IEw0MDUuMDYyNDc1LDc3MS4wNjAxMiBDMzk4LjA1MTA0LDc2My4zODY4MDIgMzg5LjgyNTIxMSw3NTYuNTg1OTQ0IDM4MC40NjAxMDcsNzUwLjk1ODgyMSBDMzM1LjQ1MTg2OSw3MjMuOTE1MTQ0IDI3OC44NjA2NTMsNzMyLjgzMjc2MSAyNDQuMTI5MjQ3LDc2OS4zNzM0NDkgTDcuMTA1NDI3MzZlLTE1LDYyMi42ODU3OTggTDAsMTUzLjYgQzAsNjguODEyOCAyMjkuMzc2LDAgNTEyLDAgQzc5NC42MjQsMCAxMDI0LDY4LjgxMjggMTAyNCwxNTMuNiBMMTAyNCw4NzAuNCBDMTAyNCw5MjguNTY3NTM0IDkxNi4wNDM1MjcsOTc5LjIxNjY3IDc1Ny4wMDAwODksMTAwNS4yODY1NiBMNzU3LDcxNi4zNzQxMiBDODA2LjIwOTQ4LDcwNS40MjMzNCA4NDMsNjYxLjUwODExMyA4NDMsNjA5IEM4NDMsNTQ4LjI0ODY3OCA3OTMuNzUxMzIyLDQ5OSA3MzMsNDk5IEM2OTkuOTM1MzY0LDQ5OSA2NzAuMjc4MDU1LDUxMy41ODg0OTggNjUwLjExMzU1OCw1MzYuNjgwMDA4IEw0MjkuMzgzNzY3LDQwOS4yNDE2MDMgQzQzNi4wOTc5NzgsMzg3LjU4MDMxMyA0MzUuNzc1OTI5LDM2NC43Nzg1NjQgNDI5LjIzMTA2MSwzNDMuODcyMTUgTDY2NC4yNzU3OTUsMjA4LjE2OTAxIEw2OTYuMzI1MjIzLDI2My42ODAyNDcgTDgxNS4zMzIxNzQsOTMuODA2MzMyNCBMNjA4LjcxMzU3MywxMTEuOTMyNDE3IEw2NDAuMjc1Nzk1LDE2Ni41OTk3OSBaIE02NTIuMjk1NTk5LDY4My43NDU2MzUgQzY2Ny4xOTM4MDgsNjk5LjgyMzkwMiA2ODYuODM3NDAyLDcxMS40NDIxOSA3MDksNzE2LjM3NDEyIEw3MDksMTAxMi4yMDQ3IEM2NDguMzQ5NzcsMTAxOS44MDI5MyA1ODEuNzk4NzUyLDEwMjQgNTEyLDEwMjQgQzIyOS4zNzYsMTAyNCAwLDk1NS4xODcyIDAsODcwLjQgTDAsNjc4LjY4NDIwMSBMMjE5LjQwNzQyLDgxMC41MTc0NzkgQzIwMy40NDkzMTQsODU4LjMzODMwNSAyMjIuMTQzNDkyLDkxMi40OTE5NSAyNjcuMTUxNzMsOTM5LjUzNTYyNyBDMzE5LjIyNTc3Nyw5NzAuODI0ODcyIDM4Ni44MDUwNzcsOTUzLjk3NTQ2IDQxOC4wOTQzMjEsOTAxLjkwMTQxMyBDNDM0Ljg3NTAzMyw4NzMuOTczNjE4IDQzNy44MDk3MzcsODQxLjU4NjA4NCA0MjguODkwNTE2LDgxMi43Mjg2MTkgTDY1Mi4yOTU1OTksNjgzLjc0NTYzNSBaIE0yOTMuNDE4NjcyLDg5NS44MjAwOTUgQzI2NS40ODgwNDcsODc5LjAzNzY4MiAyNTYuNDUwNjM1LDg0Mi43OTA2MDMgMjczLjIzMzA0OCw4MTQuODU5OTc4IEMyOTAuMDE1NDYsNzg2LjkyOTM1MyAzMjYuMjYyNTQsNzc3Ljg5MTk0MSAzNTQuMTkzMTY1LDc5NC42NzQzNTQgQzM4Mi4xMjM3OSw4MTEuNDU2NzY2IDM5MS4xNjEyMDIsODQ3LjcwMzg0NSAzNzQuMzc4Nzg5LDg3NS42MzQ0NzEgQzM1Ny41OTYzNzYsOTAzLjU2NTA5NiAzMjEuMzQ5Mjk3LDkxMi42MDI1MDggMjkzLjQxODY3Miw4OTUuODIwMDk1IFogTTc5Miw2MDkgQzc5Miw2NDEuNTg0OCA3NjUuNTg0OCw2NjggNzMzLDY2OCBDNzAwLjQxNTIsNjY4IDY3NCw2NDEuNTg0OCA2NzQsNjA5IEM2NzQsNTc2LjQxNTIgNzAwLjQxNTIsNTUwIDczMyw1NTAgQzc2NS41ODQ4LDU1MCA3OTIsNTc2LjQxNTIgNzkyLDYwOSBaIE0zNTMuNzYyNzk0LDMyNS42NjcyOTYgQzM4MS45ODIwNTksMzQxLjk1OTY5NiAzOTEuNjUwNjkzLDM3OC4wNDM1MyAzNzUuMzU4MjkzLDQwNi4yNjI3OTQgQzM1OS4wNjU4OTMsNDM0LjQ4MjA1OSAzMjIuOTgyMDU5LDQ0NC4xNTA2OTMgMjk0Ljc2Mjc5NCw0MjcuODU4MjkzIEMyNjYuNTQzNTMsNDExLjU2NTg5MyAyNTYuODc0ODk1LDM3NS40ODIwNTkgMjczLjE2NzI5NiwzNDcuMjYyNzk0IEMyODkuNDU5Njk2LDMxOS4wNDM1MyAzMjUuNTQzNTMsMzA5LjM3NDg5NSAzNTMuNzYyNzk0LDMyNS42NjcyOTYgWiIgaWQ9InNxaXRjaC1tYXJrLXdoaXRlIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=)
![Swagger](https://img.shields.io/badge/swagger-84ea2c?style=for-the-badge&logo=swagger&logoColor=000000)
![Insomnia](https://img.shields.io/badge/insomnia-%234000BF.svg?style=for-the-badge&logo=insomnia&logoColor=white)

## L'équipe

Nous avons travaillé à 4 sur ce projet.

 :rocket: __La réalisation d'une application web,__  
 :rocket: __de sa conception au déploiement d'un MVP,__  
 :rocket: __en méthodologie Agile,__  
 :rocket: __pendant 1 mois,__  
 :rocket: __en équipe.__

Voici plus d'informations sur les membres de notre équipe :

- __DAÏ Inès__  
  
```js
  const daiInes = {
    first_name: "Inès",
    last_name: "Daï",
    project_main_role: "Front-end",
    superpowers: [
        "rappelle à l'équipe de prendre des pauses",
        "réalise des GIFs de chats"
        ]
    };
```

Son profil GitHub : [__github.com/ines-dai__](https://github.com/ines-dai)  
Son profil Linkedin: [__linkedin.com/in/ines-a-d__](https://www.linkedin.com/in/ines-a-d/)  
Son portfolio : [__noridoki.fr__](http://noridoki.fr/)  

- __HONORÉ Simon__

```js
  const honoreSimon = {
    first_name: "Simon",
    last_name: "Honoré",
    project_main_role: "Front-end",
    superpowers: [
        "a su trouver le nom du site",
        "fier Petowner d'un adorable chien"
        ]
    };
```

Son profil GitHub : [__github.com/Simon-Honore__](https://github.com/Simon-Honore)  
Son profil Linkedin: [__linkedin.com/in/simon-honore/__](https://www.linkedin.com/in/simon-honore/)  

- __KELLER Catherine__

```js
  const kellerCatherine = {
    first_name: "Catherine",
    last_name: "Keller",
    project_main_role: "Back-end",
    superpowers: [
        "n'hésite pas à passer du back-end au front-end",
        "aime et abuse des post-its"
        ]
    };
```

Son profil GitHub : [__github.com/CatherineKeller__](https://github.com/CatherineKeller)  
Son profil Linkedin: [__linkedin.com/in/kellercatherine__](https://www.linkedin.com/in/kellercatherine/)  
Son portfolio : [__catherine-keller.fr__](https://www.catherine-keller.fr) 

- __SKICA Axelle__

```js
  const skicaAxelle = {
    first_name: "Axelle",
    last_name: "Skica",
    project_main_role: "Back-end",
    superpowers: [
        "traductrice officielle des commentaires de code",
        "a appris le crochet et le tricot en autodidacte"
        ],
    };
```

Son profil GitHub : [__github.com/Axelle-SKICA__](https://github.com/Axelle-SKICA)  
Son profil Linkedin: [__linkedin.com/in/axelle-skica__](https://www.linkedin.com/in/axelle-skica) 

## Routes API

|ROUTE|METHODE|FONCTIONNALITE|
|----|:---------:|:---------|
|/login|POST|connecter un user à son compte|
||
|/users?department=&pet_type= |GET|récupérer tous les users "petsitters" disponibles (role=petsitter & availability=true) avec filtre sur "department" (localisation) et "pet_type" (type d'animal à faire garder)|
|/users|POST|créer un nouvel utilisateur (inscription)|
|/users/:id|GET|récupérer les infos d'un user|
|/users/:id|PUT|modifier un user|
|/users/:id|DELETE|supprimer un user|
||
|/user/:id/pets|GET|récupérer tous les animaux ("pets") d'un user|
|/user/:id/pets|POST|créer un "pet" pour un user|
|/pets/:id|PUT|modifier un "pet"|
|/pets/:id|DELETE|supprimer un "pet"|
||
|/ads|GET|récupérer les détails de l'ensemble des annonces ("ads") existantes|
|/user/:id/ads|GET|récupérer toutes les annonces "ads" d'un user|
|/user/:id/ads|POST|créer une "ad" pour un user|
|/ads/:id|PUT|modifier une "ad"|
|/ads/:id|DELETE|supprimer une "ad"|

## Évolutions envisagées 


Ce projet a été initié dans le cadre de notre formation chez O'clock, et nous avions donc pour objectif de __déployer un MVP au bout de 1 mois__.  

Mais nous avons également réfléchi à de __possibles évolutions__ pour notre application, que nous avons regroupées par possibles lots pour répartir la charge de travail :

- V2 : 
  - Gestion des dates avec ajout des disponibilités (datepicker, du… au…)
  - Ajout de la liaison animal / annonce
  - Possibilité de télécharger une photo de profil utilisateur / animal
  - Inscription avec comptes Google/Apple
  - Gestion de mise en favoris 

- V3 :
  - Ajout d’un rôle Administrateur (CRUD de tous les users/pets/ads/roles/pet_types, modération des annonces, des comptes...)
  - Envoi d’emails (ex : confirmation d’un compte...)
  - Ajout de “mot de passe oublié ?” avec envoi d'email pour en choisir un nouveau
  - transformation des éléments de texte sur le profil en "badges" (ex : "OK chiens", "OK chat"…)

- V4 :
  - formulaire d'inscription en deux parties : 1 obligatoire + 1 facultative (bouton ignorer) => complétion du profil sous forme de slide avec barre de progression
  - créations de profils plus complets pour les animaux (Photos, nom, âge, personnalité/comportement, ententes, soins particuliers, habitudes alimentaires, besoins (exercice...)

- V5 :  
  - filtre de recherche par localisation selon un rayon géographique autour d’une adresse
  - affichage des petsitters sur une carte lors de l’affichage des résultats d’une recherche

- V6 :
  - Fonctionnalité de messagerie par "chat" entre deux utilisateurs
  - confirmation de créneau / prestation sur le site
  - une fois la prestation faite, le petsitters et le propriétaire laissent leurs avis
  - affichage des avis petsitters et animaux
  - modération des avis par les administrateurs

- V7 :  
Bulle de notification pour l'utilisateur :
  - quand un avis a été donné sur lui
  - quand une demande de petsitting lui a été faite... 
  
- V8 :
  - compte professionnel avec paiement en ligne
  - abonnement ou paiement ponctuel pour mettre en avant son profil dans les recherches
